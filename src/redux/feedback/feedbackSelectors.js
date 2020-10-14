const getFeedback = state => state.feedback.item;

const getLoading = state => state.feedback.loading;

const getError = state => state.feedback.error;

export default {
	getFeedback,
	getLoading,
	getError,
};
