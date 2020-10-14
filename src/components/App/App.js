//Core
import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authOperations } from 'redux/auth';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import SideBar from '../SideBar';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = ({ onGetCurrentUser }) => {
	useEffect(() => {
		onGetCurrentUser();
	}, [onGetCurrentUser]);

	return (
		<Router>
			<SideBar />

			<Layout>
				<Suspense fallback={<Loader onLoad={true} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

App.propTypes = {
	onGetCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
