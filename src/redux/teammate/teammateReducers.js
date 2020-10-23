//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import teammateActions from './teammateActions';
import authActions from 'redux/auth/authActions';

//Teammates reducer
const items = createReducer([], {
	[teammateActions.getTeammatesSuccess]: (state, { payload }) => payload,
	[authActions.logoutSuccess]: () => [],
});

//Loading reducer
const loading = createReducer(false, {
	[teammateActions.getTeammatesRequest]: () => true,
	[teammateActions.getTeammatesSuccess]: () => false,
	[teammateActions.getTeammatesFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[teammateActions.getTeammatesFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	items,
	loading,
	error,
});
