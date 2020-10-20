//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const HomePage = ({ existUser, userLoading }) => (existUser || !userLoading ? <Main /> : <Home />);

HomePage.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	userLoading: authSelectors.getLoading(state),
});

export default connect(mapStateToProps)(HomePage);
