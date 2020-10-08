import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StylesTeamUL = styled.ul`
	list-style: none;
	width: 70%;
	max-height: 54%;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #424242;
	}

	&::-webkit-scrollbar-thumb {
		background: #7a7e81;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #9e9e9e;
	}
`;

export const StyledTeamLI = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;

export const StyledTeamLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const StyledAvatarIMG = styled.img`
	margin-right: 1rem;
`;

export const StyledNameSpan = styled.span`
	/* ... */
`;
