//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Login from 'components/Login';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		//TODO: изменить метод онЛогин с редакса на сервисы
		// this.props.onLogin(email, password);
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
	error: PropTypes.object,
	onLogin: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
	error: null,
};

export default LoginPage;
