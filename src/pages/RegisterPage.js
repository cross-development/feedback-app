//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Register from 'components/Register';

const RegisterPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeName = ({ target: { value } }) => setName(value);
	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		//TODO: изменить метод онЛогин с редакса на сервисы
		// this.props.onRegister(name, email, password);
		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<Register
				name={name}
				email={email}
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
