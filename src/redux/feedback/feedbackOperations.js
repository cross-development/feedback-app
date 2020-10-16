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
		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === credentials) {
					firebase
						.database()
						.ref('users/' + userId + '/favorites/' + data.key)
						.remove();
				}
			}),
		);
	} catch (error) {
		dispatch(feedbackActions.updateFeedbackFailure(error));
	}
};

const getFeedback = () => async dispatch => {
	dispatch(feedbackActions.getFeedbackRequest());

	try {
		const teammates = firebase.database().ref('teammates');

		teammates.on('value', snapshot => {
			const teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ tmId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(feedbackActions.getFeedbackSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(feedbackActions.getFeedbackFailure(error));
	}
};

export default {
	addFeedback,
	updateFeedback,
	getFeedback,
};

// const favMovies = firebase.database().ref('users/' + userId + '/favorites');

// 		favMovies.on('value', snapshot => {
// 			const favMovieData = Object.values(snapshot.val());

// 			dispatch(collectionActions.getFavoriteMoviesSuccess(favMovieData));
// 		});
