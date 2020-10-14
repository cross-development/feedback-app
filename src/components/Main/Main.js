//Core
import React from 'react';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Main.styles';

const Main = () => {
	return (
		<StyledWrapperDiv>
			<StyledSubLogoDiv />

			<StyledTitleH1>No teammate selected</StyledTitleH1>

			<StyledTextP>
				To provide a feedback you should select an employee from the teammates list or to search by
				a name using the search field.
			</StyledTextP>
		</StyledWrapperDiv>
	);
};

export default Main;
