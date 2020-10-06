//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props => (true ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);

//TODO: заменить true на проверку залогиненного юзера

PrivateRoute.propTypes = {};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
