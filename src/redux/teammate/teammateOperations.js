//Database
import firebase from 'firebase';
//Redux
import { teammateSlice } from './teammateReducers';

const { getAllTeammates, setTeammatesLoading, setTeammatesError } = teammateSlice.actions;

export const addTeammate = credentials => dispatch => {
	dispatch(setTeammatesLoading(true));

	try {
		const userCollection = firebase.database().ref('teammates');
		userCollection.push(credentials);

		dispatch(setTeammatesLoading(false));
	} catch (error) {
		dispatch(setTeammatesError(error));
		dispatch(setTeammatesLoading(false));
	}
};

export const getTeammates = () => dispatch => {
	dispatch(setTeammatesLoading(true));

	try {
		const teammates = firebase.database().ref('teammates');

		teammates.on('value', snapshot => {
			const teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ tmId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(getAllTeammates(teammatesData));
			dispatch(setTeammatesLoading(false));
		});
	} catch (error) {
		dispatch(setTeammatesError(error));
		dispatch(setTeammatesLoading(false));
	}
};
