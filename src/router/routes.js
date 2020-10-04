//Core
import { lazy } from 'react';

export default [
	{
		path: '/home',
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
	{
		path: '/user/:userId',
		label: 'User',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/UserPage' /* webpackChunkName: "user-page"*/)),
	},
	{
		path: '/teammates/:teammateId',
		label: 'Teammates',
		exact: false,
		private: true,
		restricted: false,
		component: lazy(() => import('page/TeammatePage' /* webpackChunkName: "teammate-page" */)),
	},
];
