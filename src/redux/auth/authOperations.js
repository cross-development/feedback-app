//Database
import firebase from 'firebase';
//Redux
import { authSlice } from './authReducers';
import { feedbackSlice } from 'redux/feedback/feedbackReducers';
import { teammateSlice } from 'redux/teammate/teammateReducers';

const {
	authSignOut,
	setAuthError,
	updateProfile,
	setUserProfile,
	setAuthLoading,
} = authSlice.actions;

const { clearAllFeedbacks } = feedbackSlice.actions;
const { clearAllTeammates } = teammateSlice.actions;

export const register = (fullName, email, password) => async dispatch => {
	dispatch(setAuthLoading(true));

	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName });

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(setUserProfile({ uid, displayName }));
		dispatch(setAuthLoading(false));
	} catch (error) {
		dispatch(setAuthError(error));
		dispatch(setAuthLoading(false));
	}
};

export const login = (email, password) => async dispatch => {
	dispatch(setAuthLoading(true));

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(updateProfile({ uid, displayName, photoURL }));
		dispatch(setAuthLoading(false));
	} catch (error) {
		dispatch(setAuthError(error));
		dispatch(setAuthLoading(false));
	}
};

export const logout = () => async dispatch => {
	dispatch(setAuthLoading(true));

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(authSignOut());
				dispatch(clearAllFeedbacks());
				dispatch(clearAllTeammates());
			});
		dispatch(setAuthLoading(false));
	} catch (error) {
		dispatch(setAuthError(error));
		dispatch(setAuthLoading(false));
	}
};

export const getCurrentUser = () => async dispatch => {
	dispatch(setAuthLoading(true));

	try {
		await firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				const { uid, displayName, photoURL } = currentUser;

				dispatch(updateProfile({ uid, displayName, photoURL }));
				dispatch(setAuthLoading(false));
			}
		});
	} catch (error) {
		dispatch(setAuthError(error));
		dispatch(setAuthLoading(false));
	}
};

export const updateUserProfile = ({ fullName, photoURL: photo }) => async dispatch => {
	dispatch(setAuthLoading(true));
	try {
		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName, photoURL: photo });

		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(updateProfile({ uid, displayName, photoURL }));
		dispatch(setAuthLoading(false));
	} catch (error) {
		dispatch(setAuthError(error));
		dispatch(setAuthLoading(false));
	}
};

export const unsetErrorMessage = () => dispatch => dispatch(setAuthError(null));
