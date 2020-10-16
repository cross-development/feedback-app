//Core
import { createAction } from '@reduxjs/toolkit';

const addFeedbackRequest = createAction('feedbacks/addFeedbackRequest');
const addFeedbackSuccess = createAction('feedbacks/addFeedbackSuccess');
const addFeedbackFailure = createAction('feedbacks/addFeedbackFailure');

const updateFeedbackRequest = createAction('feedbacks/updateFeedbackRequest');
const updateFeedbackSuccess = createAction('feedbacks/updateFeedbackSuccess');
const updateFeedbackFailure = createAction('feedbacks/updateFeedbackFailure');

const getFeedbackRequest = createAction('feedbacks/getFeedbackRequest');
const getFeedbackSuccess = createAction('feedbacks/getFeedbackSuccess');
const getFeedbackFailure = createAction('feedbacks/getFeedbackFailure');

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
