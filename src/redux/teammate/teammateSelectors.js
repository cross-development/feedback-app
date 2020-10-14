const getTeammates = state => state.teammates.items;

const getLoading = state => state.teammates.loading;

const getError = state => state.teammates.error;

export default {
	getTeammates,
	getLoading,
	getError,
};
