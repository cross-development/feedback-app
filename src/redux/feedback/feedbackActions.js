//Core
import { createAction } from '@reduxjs/toolkit';

const addFeedbackRequest = createAction('collection/addFeedbackRequest');
const addFeedbackSuccess = createAction('collection/addFeedbackSuccess');
const addFeedbackFailure = createAction('collection/addFeedbackFailure');

const updateFeedbackRequest = createAction('collection/updateFeedbackRequest');
const updateFeedbackSuccess = createAction('collection/updateFeedbackSuccess');
const updateFeedbackFailure = createAction('collection/updateFeedbackFailure');

const getFeedbackRequest = createAction('collection/getFeedbackRequest');
const getFeedbackSuccess = createAction('collection/getFeedbackSuccess');
const getFeedbackFailure = createAction('collection/getFeedbackFailure');

export default {
	addFeedbackRequest,
	addFeedbackSuccess,
	addFeedbackFailure,

	updateFeedbackRequest,
	updateFeedbackSuccess,
	updateFeedbackFailure,

	getFeedbackRequest,
	getFeedbackSuccess,
	getFeedbackFailure,
};
