//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Register from 'components/Register';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangeName = ({ target: { value } }) => setFullName(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		//TODO: изменить метод онЛогин с редакса на сервисы
		// this.props.onRegister(fullName, email, password);
		setEmail('');
		setFullName('');
		setPassword('');
	};

	return (
		<div>
			<Register
				email={email}
				fullName={fullName}
				password={password}
				onSubmit={handleSubmit}
				onChangeName={handleChangeName}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>
		</div>
	);
};

RegisterPage.propTypes = {
	onRegister: PropTypes.func.isRequired,
	error: PropTypes.object,
};

RegisterPage.defaultProps = {
	error: null,
};

export default RegisterPage;
