//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	items: [],
	error: null,
	loading: false,
};

export const teammateSlice = createSlice({
	name: 'teammates',

	initialState: state,

	reducers: {
		getAllTeammates: (state, { payload }) => ({
			...state,
			items: [...payload],
		}),

		setTeammatesLoading: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setTeammatesError: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		clearAllTeammates: () => state,
	},
});
