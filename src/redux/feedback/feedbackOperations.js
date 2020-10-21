//Database
import firebase from 'firebase';
//Redux
import feedbackActions from './feedbackActions';

const addFeedback = (userId, credentials) => dispatch => {
	dispatch(feedbackActions.addFeedbackRequest());

	try {
		const userFeedbacks = firebase.database().ref('users/' + userId);
		userFeedbacks.child('feedbacks').push(credentials);

		dispatch(feedbackActions.addFeedbackSuccess());
	} catch (error) {
		dispatch(feedbackActions.addFeedbackFailure(error));
	}
};

const updateFeedback = (userId, credentials) => async dispatch => {
	dispatch(feedbackActions.updateFeedbackRequest());

	try {
		const { teammate, ratings, resolution } = credentials;
		const feedbacks = firebase.database().ref('users/' + userId + '/feedbacks');
		console.log('1');

		feedbacks.on('value', snapshot =>
			snapshot.forEach(data => {
				console.log('2');
				if (data.val().teammate.tmId === teammate.tmId) {
					console.log('3');
					firebase
						.database()
						.ref('users/' + userId + '/feedbacks/' + data.key)
						.update({ ratings, resolution });
				}
			}),
		);
		dispatch(feedbackActions.updateFeedbackSuccess());
	} catch (error) {
		dispatch(feedbackActions.updateFeedbackFailure(error));
	}
};

const getFeedbacks = userId => dispatch => {
	dispatch(feedbackActions.getFeedbackRequest());

	try {
		const feedbacks = firebase.database().ref('users/' + userId + '/feedbacks');

		feedbacks.on('value', snapshot => {
			let feedbacksData = [];

			if (!snapshot.val()) {
				return dispatch(feedbackActions.getFeedbackSuccess(feedbacksData));
			}

			feedbacksData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ fbId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(feedbackActions.getFeedbackSuccess(feedbacksData));
		});
	} catch (error) {
		dispatch(feedbackActions.getFeedbackFailure(error));
	}
};

export default {
	addFeedback,
	updateFeedback,
	getFeedbacks,
};
