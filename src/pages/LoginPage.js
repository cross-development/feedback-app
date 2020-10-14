//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Login from 'components/Login';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const LoginPage = ({ onLogin, error }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		onLogin(email, password);

		setPassword('');
		setEmail('');
	};

	return (
		<div>
			<Login
				email={email}
				password={password}
				onSubmit={handleSubmit}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>
		</div>
	);
};

LoginPage.propTypes = {
	onLogin: PropTypes.func.isRequired,
	error: PropTypes.object,
};

LoginPage.defaultProps = {
	error: null,
};

const mapStateToProps = state => ({
	error: authSelectors.getError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
