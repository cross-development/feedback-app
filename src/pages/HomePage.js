//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const HomePage = ({ existUser }) => (existUser ? <Main /> : <Home />);

HomePage.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(HomePage);
