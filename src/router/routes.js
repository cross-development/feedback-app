//Core
import { lazy } from 'react';

export default [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	// {
	// 	path: '/users/:userId',
	// 	label: 'Users',
	// 	exact: true,
	// 	private: true,
	// 	restricted: false,
	// 	component: lazy(() => import('pages/UserPage' /* webpackChunkName: "user-page"*/)),
	// },
	{
		path: '/teammates/:teammateId',
		label: 'Teammates',
		exact: false,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeammatePage' /* webpackChunkName: "teammate-page" */)),
	},
];
