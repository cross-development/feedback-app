//Database
import firebase from 'firebase';
//Redux
import teammateActions from './teammateActions';

const fetchTeammates = () => async dispatch => {
	dispatch(teammateActions.getTeammatesRequest());

	try {
		const teammates = firebase.database().ref('teammates');

		teammates.on('value', snapshot => {
			const teammatesData = Object.values(snapshot.val());

			dispatch(teammateActions.getTeammatesSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(teammateActions.getTeammatesFailure(error));
	}
};

export default {
	fetchTeammates,
};
