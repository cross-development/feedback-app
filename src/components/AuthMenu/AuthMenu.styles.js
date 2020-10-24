import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaClipboardCheck } from 'react-icons/fa';

export const StyledUserWrapDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 70%;
	height: 70px;
	margin: auto auto 3rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

export const StyledLink = styled(Link)`
	color: #fff;
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
	text-decoration: none;
	display: flex;
	align-items: center;
	transition: color 250ms linear;

	&:hover {
		color: #ec1940;
	}
`;

export const StyledRegIcon = styled(FaClipboardCheck)`
	margin-right: 1rem;
`;

export const StyledLoginIcon = styled(FaSignInAlt)`
	margin-right: 1rem;
`;
