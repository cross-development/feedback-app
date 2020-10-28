//Core
import React from 'react';
//Styles
import { StyledLogoIconP, StyledLogoH2 } from './Logo.styles';
import { StyledLogoWrapperLink, StyledIconWrapperDiv } from './Logo.styles';

const Logo = () => {
	return (
		<StyledLogoWrapperLink to="/">
			<StyledIconWrapperDiv>
				<StyledLogoIconP>F</StyledLogoIconP>
			</StyledIconWrapperDiv>

			<StyledLogoH2>
				Feedback <br /> app
			</StyledLogoH2>
		</StyledLogoWrapperLink>
	);
};

export default Logo;
