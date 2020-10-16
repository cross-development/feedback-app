const existUser = state => state.auth.user;

const getUserName = state => state.auth.user.displayName;

const getError = state => state.auth.error;

const getLoading = state => state.auth.loading;

export default {
	getError,
	existUser,
	getLoading,
	getUserName,
};
