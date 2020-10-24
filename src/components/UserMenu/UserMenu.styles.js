import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

export const StyledUserWrapDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 70%;
	margin: 2.5rem auto;
`;

export const StyledAvatarWrapDiv = styled.div`
	width: 48px;
	height: 48px;
	margin-right: 1rem;
`;

export const StyledAvatarIMG = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 50px;
`;

export const StyledNameWrapDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	height: 100%;
`;

export const StyledNameLink = styled(Link)`
	font-weight: 400;
	font-size: 16px;
	text-decoration: none;
	color: #fff;
`;

export const StyledLogoutLink = styled(Link)`
	color: #fff;
	font-size: 12px;
	line-height: 14px;
	font-weight: 400;
	text-decoration: none;
	display: flex;
	align-items: center;
`;

export const StyledLogOutIcon = styled(FaSignOutAlt)`
	margin-left: 0.5rem;
`;
