//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperations';
import { getTeammates } from 'redux/teammate/teammateOperations';
import { getFeedbacks } from 'redux/feedback/feedbackOperations';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import SideBar from '../SideBar';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { uid } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (uid) {
			dispatch(getTeammates());
			dispatch(getFeedbacks(uid));
		}
	}, [dispatch, uid]);

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
