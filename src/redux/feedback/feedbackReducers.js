//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import feedbackActions from './feedbackActions';

//Feedback reducer
const items = createReducer([], {
	[feedbackActions.updateFeedbackSuccess]: (state, { payload }) => ({ ...state, payload }),
	[feedbackActions.getFeedbackSuccess]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[feedbackActions.addFeedbackRequest]: () => true,
	[feedbackActions.addFeedbackSuccess]: () => false,
	[feedbackActions.addFeedbackFailure]: () => false,

	[feedbackActions.updateFeedbackRequest]: () => true,
	[feedbackActions.updateFeedbackSuccess]: () => false,
	[feedbackActions.updateFeedbackFailure]: () => false,

	[feedbackActions.getFeedbackRequest]: () => true,
	[feedbackActions.getFeedbackSuccess]: () => false,
	[feedbackActions.getFeedbackFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[feedbackActions.addFeedbackFailure]: (state, { payload }) => payload,
	[feedbackActions.updateFeedbackFailure]: (state, { payload }) => payload,
	[feedbackActions.getFeedbackFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	items,
	loading,
	error,
});
