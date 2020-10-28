//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	items: [],
	error: null,
	loading: false,
};

export const feedbackSlice = createSlice({
	name: 'feedbacks',

	initialState: state,

	reducers: {
		getAllFeedbacks: (state, { payload }) => ({
			...state,
			items: [...payload],
		}),

		setFeedbacksLoading: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setFeedbacksError: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		clearAllFeedbacks: () => state,
	},
});
