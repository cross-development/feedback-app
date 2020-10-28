//Core
import React, { useState } from 'react';
//Components
import Register from 'components/Register';
//Redux
import { register } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const { error } = useSelector(state => state.auth);

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangeName = ({ target: { value } }) => setFullName(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(register(fullName, email, password));

		setFullName('');
		setPassword('');
		setEmail('');
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

export default RegisterPage;
