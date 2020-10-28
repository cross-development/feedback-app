//Core
import React from 'react';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Home.styles';

const Home = () => (
	<StyledWrapperDiv>
		<StyledSubLogoDiv />
		<StyledTitleH1>Welcome to Feedback App</StyledTitleH1>
		<StyledTextP>Please, sign in or sign up to provide a feedback for your teammates.</StyledTextP>
	</StyledWrapperDiv>
);

export default Home;
