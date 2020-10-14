//Core
import { createAction } from '@reduxjs/toolkit';

const getTeammatesRequest = createAction('collection/getTeammatesRequest');
const getTeammatesSuccess = createAction('collection/getTeammatesSuccess');
const getTeammatesFailure = createAction('collection/getTeammatesFailure');

export default {
	getTeammatesRequest,
	getTeammatesSuccess,
	getTeammatesFailure,
};
