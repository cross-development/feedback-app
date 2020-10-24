//Core
import React from 'react';
//Styles
import { StyledLink, StyledLoginIcon, StyledUserWrapDiv, StyledRegIcon } from './AuthMenu.styles';

const AuthMenu = () => (
	<StyledUserWrapDiv>
		<StyledLink to="/register">
			<StyledRegIcon />
			Register
		</StyledLink>

		<StyledLink to="/login">
			<StyledLoginIcon />
			Log in
		</StyledLink>
	</StyledUserWrapDiv>
);

export default AuthMenu;
