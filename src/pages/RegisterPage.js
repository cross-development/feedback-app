//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Register from 'components/Register';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const RegisterPage = ({ onRegister, error }) => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangeName = ({ target: { value } }) => setFullName(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		onRegister(fullName, email, password);

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

RegisterPage.propTypes = {
	onRegister: PropTypes.func.isRequired,
	error: PropTypes.object,
};

RegisterPage.defaultProps = {
	error: null,
};

const mapStateToProps = state => ({
	error: authSelectors.getError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
