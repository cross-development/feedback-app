const getFeedbacks = state => state.feedbacks.items;

const getLoading = state => state.feedbacks.loading;

const getError = state => state.feedbacks.error;

export default {
	getFeedbacks,
	getLoading,
	getError,
};
