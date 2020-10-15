//Core
import { createAction } from '@reduxjs/toolkit';

const onAddTeammateRequest = createAction('collection/onAddTeammateRequest');
const onAddTeammateSuccess = createAction('collection/onAddTeammateSuccess');
const onAddTeammateFailure = createAction('collection/onAddTeammateFailure');

const getTeammatesRequest = createAction('collection/getTeammatesRequest');
const getTeammatesSuccess = createAction('collection/getTeammatesSuccess');
const getTeammatesFailure = createAction('collection/getTeammatesFailure');

export default {
	onAddTeammateRequest,
	onAddTeammateSuccess,
	onAddTeammateFailure,

	getTeammatesRequest,
	getTeammatesSuccess,
	getTeammatesFailure,
};
