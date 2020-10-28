//Core
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//Redux
import { authSlice } from './auth/authReducers';
import { feedbackSlice } from './feedback/feedbackReducers';
import { teammateSlice } from './teammate/teammateReducers';

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[feedbackSlice.name]: feedbackSlice.reducer,
	[teammateSlice.name]: teammateSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
