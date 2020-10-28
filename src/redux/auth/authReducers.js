//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	uid: null,
	displayName: '',
	photoURL: null,
	error: null,
	loading: false,
};

export const authSlice = createSlice({
	name: 'auth',

	initialState: state,

	reducers: {
		updateProfile: (state, { payload }) => ({
			...state,
			uid: payload.uid,
			photoURL: payload.photoURL,
			displayName: payload.displayName,
		}),

		setAuthLoading: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setAuthError: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		authSignOut: () => state,
	},
});
