//Core
import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import Layout from '../Layout';
import SideBar from '../SideBar';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
//Routes
import routes from 'router';

const App = () => {
	return (
		<Router>
			<SideBar />

			<Layout>
				<Suspense fallback={null}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
						{/* <Route component={asyncComponents.NotFoundPage} /> */}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
