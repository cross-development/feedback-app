const existUser = state => state.auth.user;

const getUserName = state => state.auth.user.displayName;

const getError = state => state.auth.error;

export default {
	getError,
	existUser,
	getUserName,
};
