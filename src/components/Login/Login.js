//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledH1, StylesForm, StyledLabel, StyledInput, StyledButton } from './Login.styles';

const Login = ({ email, password, onSubmit, onChangeEmail, onChangePassword }) => (
	<StylesForm onSubmit={onSubmit}>
		<StyledH1>Log in to provide a feedback</StyledH1>

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

		<StyledButton type="submit">Log in</StyledButton>
	</StylesForm>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	onChangeEmail: PropTypes.func.isRequired,
	onChangePassword: PropTypes.func.isRequired,
};

export default Login;
