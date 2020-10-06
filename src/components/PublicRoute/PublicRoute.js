//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props =>
			false && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
);

//TODO: заменить true на проверку залогиненного юзера

PublicRoute.propTypes = {};

PublicRoute.defaultProps = {};

export default PublicRoute;
