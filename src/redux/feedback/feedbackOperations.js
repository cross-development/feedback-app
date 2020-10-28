//Database
import firebase from 'firebase';
//Redux
import { feedbackSlice } from './feedbackReducers';

const { getAllFeedbacks, setFeedbacksLoading, setFeedbacksError } = feedbackSlice.actions;

export const addFeedback = (userId, credentials) => dispatch => {
	dispatch(setFeedbacksLoading(true));

	try {
		const userFeedbacks = firebase.database().ref('users/' + userId);
		userFeedbacks.child('feedbacks').push(credentials);

		dispatch(setFeedbacksLoading(false));
	} catch (error) {
		dispatch(setFeedbacksError(error));
		dispatch(setFeedbacksLoading(false));
	}
};

export const updateFeedback = (userId, credentials) => async dispatch => {
	dispatch(setFeedbacksLoading(true));

	try {
		const { teammate, ratings, resolution } = credentials;
		const feedbacks = firebase.database().ref('users/' + userId + '/feedbacks');

		feedbacks.once('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().teammate.tmId === teammate.tmId) {
					firebase
						.database()
						.ref('users/' + userId + '/feedbacks/' + data.key)
						.update({ ratings, resolution });
				}
			}),
		);

		dispatch(setFeedbacksLoading(false));
	} catch (error) {
		dispatch(setFeedbacksError(error));
		dispatch(setFeedbacksLoading(false));
	}
};

export const getFeedbacks = userId => dispatch => {
	dispatch(setFeedbacksLoading(true));

	try {
		const feedbacks = firebase.database().ref('users/' + userId + '/feedbacks');

		feedbacks.on('value', snapshot => {
			let feedbacksData = [];

			if (!snapshot.val()) {
				dispatch(getAllFeedbacks(feedbacksData));
				dispatch(setFeedbacksLoading(false));
				return;
			}

			feedbacksData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ fbId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(getAllFeedbacks(feedbacksData));
			dispatch(setFeedbacksLoading(false));
		});
	} catch (error) {
		dispatch(setFeedbacksError(error));
		dispatch(setFeedbacksLoading(false));
	}
};
