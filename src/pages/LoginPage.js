//Core
import React, { useState } from 'react';
//Components
import Login from 'components/Login';
import Notification from 'components/Notification';
//Redux
import { login } from 'redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const { error } = useSelector(state => state.auth);

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(login(email, password));

		setPassword('');
		setEmail('');
	};

	return (
		<>
			<Login
				email={email}
				password={password}
				onSubmit={handleSubmit}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default LoginPage;
