//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from 'redux/auth';
import { feedbackReducers } from 'redux/feedback';
import { teammateReducers } from 'redux/teammate';

const store = configureStore({
	reducer: {
		auth: authReducers,
		feedbacks: feedbackReducers,
		teammates: teammateReducers,
	},
});

export default store;
