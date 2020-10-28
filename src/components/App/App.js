//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Redux
import { authOperations } from 'redux/auth';
import { teammateOperations } from 'redux/teammate';
import { feedbackOperations } from 'redux/feedback';
import { useSelector, useDispatch } from 'react-redux';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import SideBar from '../SideBar';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(teammateOperations.getTeammates());
			dispatch(feedbackOperations.getFeedbacks(user.uid));
		}
	}, [dispatch, user]);

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

export default App;
