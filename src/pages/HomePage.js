//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { teammateSelectors } from 'redux/teammate';
import { feedbackSelectors } from 'redux/feedback';

const HomePage = ({ existUser, userLoading, teammatesLoading, feedbacksLoading }) => {
	return (
		<>
			{/* {teammatesLoading || feedbacksLoading && <Loader onLoad={userLoading} />} */}
			{/* 
			{teammatesLoading || !userLoading ? <Loader onLoad={userLoading} /> : <Main />} */}

			{existUser && <Main />}

			{!existUser && (userLoading || !userLoading) && <Home />}
			{/* {existUser || !userLoading ? <Main /> : <Home />} */}
		</>
	);
};

HomePage.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	userLoading: authSelectors.getLoading(state),
	feedbacksLoading: feedbackSelectors.getLoading(state),
	teammatesLoading: teammateSelectors.getLoading(state),
});

export default connect(mapStateToProps)(HomePage);
