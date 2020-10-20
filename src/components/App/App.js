//Core
import React, { Suspense, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { teammateOperations } from 'redux/teammate';
import { feedbackOperations } from 'redux/feedback';
import { authOperations, authSelectors } from 'redux/auth';
//Components
import Layout from '../Layout';
import Loader from '../Loader';
import SideBar from '../SideBar';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

class App extends Component {
	async componentDidMount() {
		await this.props.onGetCurrentUser();
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevProps.existUser !== this.props.existUser) {
			await this.props.onGetTeammates();

			if (this.props.existUser) {
				await this.props.onGetFeedbacks(this.props.existUser.uid);
			}
		}
	}

	render() {
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
	}
}

// const App = ({ onGetCurrentUser, onGetTeammates }) => {
// 	useEffect(() => {
// 		onGetCurrentUser();
// 		onGetTeammates();
// 	}, [onGetCurrentUser, onGetTeammates]);

// 	return (
// 		<Router>
// 			<SideBar />

// 			<Layout>
// 				<Suspense fallback={<Loader onLoad={true} />}>
// 					<Switch>
// 						{routes.map(route =>
// 							route.private ? (
// 								<PrivateRoute key={route.path} {...route} />
// 							) : (
// 								<PublicRoute key={route.path} {...route} />
// 							),
// 						)}
// 					</Switch>
// 				</Suspense>
// 			</Layout>
// 		</Router>
// 	);
// };

// App.propTypes = {
// 	onGetCurrentUser: PropTypes.func.isRequired,
// 	onGetTeammates: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	userLoading: authSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
	onGetTeammates: teammateOperations.getTeammates,
	onGetFeedbacks: feedbackOperations.getFeedbacks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
