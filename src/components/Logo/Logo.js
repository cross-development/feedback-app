//Core
import React from 'react';
//Styles
import {
	StyledLogoWrapperDiv,
	StyledIconWrapperDiv,
	StyledLogoIconP,
	StyledLogoH2,
} from './Logo.styles';

const Logo = () => {
	return (
		<StyledLogoWrapperDiv>
			<StyledIconWrapperDiv>
				<StyledLogoIconP>F</StyledLogoIconP>
			</StyledIconWrapperDiv>

			<StyledLogoH2>
				Feedback <br /> app
			</StyledLogoH2>
		</StyledLogoWrapperDiv>
	);
};

export default Logo;
