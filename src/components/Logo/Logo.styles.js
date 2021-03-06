import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogoWrapperLink = styled(Link)`
	color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70%;
	text-decoration: none;
`;

export const StyledIconWrapperDiv = styled.div`
	height: 48px;
	width: 48px;
	background-color: #ec1940;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
`;

export const StyledLogoIconP = styled.p`
	font-size: 26px;
	font-weight: 700;
`;

export const StyledLogoH2 = styled.h2`
	text-transform: uppercase;
	font-size: 24px;
	line-height: 24px;
`;
