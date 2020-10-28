//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { uid } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props =>
				uid && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
