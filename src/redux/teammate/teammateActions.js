//Core
import { createAction } from '@reduxjs/toolkit';

const onAddTeammateRequest = createAction('teammates/onAddTeammateRequest');
const onAddTeammateSuccess = createAction('teammates/onAddTeammateSuccess');
const onAddTeammateFailure = createAction('teammates/onAddTeammateFailure');

const getTeammatesRequest = createAction('teammates/getTeammatesRequest');
const getTeammatesSuccess = createAction('teammates/getTeammatesSuccess');
const getTeammatesFailure = createAction('teammates/getTeammatesFailure');

const clearTeammatesRequest = createAction('teammates/clearTeammatesRequest');
const clearTeammatesSuccess = createAction('teammates/clearTeammatesSuccess');
const clearTeammatesFailure = createAction('teammates/clearTeammatesFailure');

export default {
	onAddTeammateRequest,
	onAddTeammateSuccess,
	onAddTeammateFailure,

	getTeammatesRequest,
	getTeammatesSuccess,
	getTeammatesFailure,

	clearTeammatesRequest,
	clearTeammatesSuccess,
	clearTeammatesFailure,
};
