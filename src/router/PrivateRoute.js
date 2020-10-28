//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { uid } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props => (uid ? <Component {...props} /> : <Redirect to="/" />)}
		/>
	);
};

export default PrivateRoute;
