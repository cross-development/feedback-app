//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledH1 } from './Register.styles';

const Register = ({
	email,
	fullName,
	password,
	onSubmit,
	onChangeName,
	onChangeEmail,
	onChangePassword,
}) => (
	<StyledForm onSubmit={onSubmit}>
		<StyledH1>Sign up to provide a feedback</StyledH1>

		<StyledLabel>
			Full name
			<StyledInput
				required
				type="text"
				name="fullName"
				value={fullName}
				autoComplete="off"
				onChange={onChangeName}
			/>
		</StyledLabel>

		<StyledLabel>
			Email
			<StyledInput
				required
				type="email"
				name="email"
				value={email}
				autoComplete="off"
				onChange={onChangeEmail}
			/>
		</StyledLabel>

		<StyledLabel>
			Password
			<StyledInput
				required
				type="password"
				name="password"
				value={password}
				autoComplete="off"
				onChange={onChangePassword}
			/>
		</StyledLabel>

		<StyledButton type="submit">Sign up</StyledButton>
	</StyledForm>
);

Register.propTypes = {
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	fullName: PropTypes.string.isRequired,
	onChangeName: PropTypes.func.isRequired,
	onChangeEmail: PropTypes.func.isRequired,
	onChangePassword: PropTypes.func.isRequired,
};

export default Register;
