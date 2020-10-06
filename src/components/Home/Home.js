//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Home.styles';

const Home = () => {
	return (
		<StyledWrapperDiv>
			<StyledSubLogoDiv />

			<StyledTitleH1>Welcome to Feedback App</StyledTitleH1>
			<StyledTextP>
				To leave feedback, please <Link to="/register">register</Link> or{' '}
				<Link to="/login">log in</Link>.
			</StyledTextP>
		</StyledWrapperDiv>
	);
};

export default Home;
