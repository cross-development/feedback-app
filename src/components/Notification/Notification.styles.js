//Core
import styled from 'styled-components';

export const StyledErrorDiv = styled.div`
	position: absolute;
	bottom: 25%;
	left: 45%;
	width: 32%;
	height: auto;
	background-color: #ec1940;
	background: #ec1940;
	border: none;
	border-radius: 2px;
	padding: 20px;
	margin: 0 auto;
	word-wrap: normal;
	transition: all 250ms linear;
	box-shadow: 0 0 8px 0.2px #ec1940;

	&:hover {
		box-shadow: 0 0 14px #ec1940;
	}
`;

export const StyledErrorP = styled.p`
	color: #fff;
	text-align: justify;
	font-size: 18px;
`;

export const StyledErrorBtn = styled.button`
	background-color: transparent;
	border: none;
	color: #22282d;
	font-size: 20px;
	position: absolute;
	top: -24px;
	right: -20px;
	cursor: pointer;
	outline-color: #b2bec3;
`;
