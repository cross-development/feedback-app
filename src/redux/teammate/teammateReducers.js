//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import teammateActions from './teammateActions';

//Teammates reducer
const items = createReducer([], {
	[teammateActions.getTeammatesSuccess]: (state, { payload }) => payload,
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
