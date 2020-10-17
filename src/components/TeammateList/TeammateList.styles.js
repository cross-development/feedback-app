import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
	/* ... */
`;

export const StyledTeamLink = styled(NavLink)`
	text-decoration: none;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 0.7rem;

	&.active {
		background-color: #616161;
	}
`;

export const StyledAvatarIMG = styled.img`
	margin-right: 1rem;
`;

export const StyledNameSpan = styled.span`
	/* ... */
`;

export const StyledStatusSpan = styled.span`
	width: 15px;
	height: 15px;
	display: ${props => (props.isAccepted ? 'block' : 'none')};
	background-color: #8bc34a;
	border-radius: 50px;
	margin-left: auto;
	margin-right: 0;
`;
