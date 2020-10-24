//Database
import firebase from 'firebase';
//Redux
import authActions from './authActions';
import feedbackActions from 'redux/feedback/feedbackActions';
import teammateActions from 'redux/teammate/teammateActions';

const register = (name, email, password) => async dispatch => {
	dispatch(authActions.registerRequest());

	try {
		const { user: newUser } = await firebase.auth().createUserWithEmailAndPassword(email, password);
		await newUser.updateProfile({ displayName: name });

		await firebase
			.database()
			.ref('users/' + newUser.uid)
			.set({ name, uid: newUser.uid });

		const user = newUser.toJSON();

		dispatch(authActions.registerSuccess(user));
	} catch (error) {
		dispatch(authActions.registerFailure(error));
	}
};

const login = (email, password) => async dispatch => {
	dispatch(authActions.loginRequest());

	try {
		const { user: currentUser } = await firebase.auth().signInWithEmailAndPassword(email, password);
		const user = currentUser.toJSON();

		dispatch(authActions.loginSuccess(user));
	} catch (error) {
		dispatch(authActions.loginFailure(error));
	}
};

const logout = () => async dispatch => {
	dispatch(authActions.logoutRequest());

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(authActions.logoutSuccess());
				dispatch(feedbackActions.clearFeedbacksSuccess());
				dispatch(teammateActions.clearTeammatesSuccess());
			});
	} catch (error) {
		dispatch(authActions.logoutFailure(error));
	}
};

const getCurrentUser = () => dispatch => {
	dispatch(authActions.getCurrentUserRequest());

	try {
		firebase.auth().onAuthStateChanged(currentUser => {
			if (!currentUser) return firebase.auth().signOut();

			const user = currentUser.toJSON();

			dispatch(authActions.getCurrentUserSuccess(user));
		});
	} catch (error) {
		dispatch(authActions.getCurrentUserFailure(error));
	}
};

export default { register, login, logout, getCurrentUser };
