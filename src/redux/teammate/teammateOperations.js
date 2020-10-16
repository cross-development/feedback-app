//Database
import firebase from 'firebase';
//Redux
import teammateActions from './teammateActions';

const addTeammate = credentials => dispatch => {
	dispatch(teammateActions.onAddTeammateRequest());

	try {
		const userCollection = firebase.database().ref('teammates');
		userCollection.push(credentials);

		dispatch(teammateActions.onAddTeammateSuccess());
	} catch (error) {
		dispatch(teammateActions.onAddTeammateFailure(error));
	}
};

const getTeammates = () => async dispatch => {
	dispatch(teammateActions.getTeammatesRequest());

	try {
		const teammates = firebase.database().ref('teammates');

		teammates.on('value', snapshot => {
			const teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ tmId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(teammateActions.getTeammatesSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(teammateActions.getTeammatesFailure(error));
	}
};

export default {
	addTeammate,
	getTeammates,
};
