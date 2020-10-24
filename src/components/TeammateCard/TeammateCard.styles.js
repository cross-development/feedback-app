import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

export const StyledContainerDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 1rem;
`;

export const StyledWrapperDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;

export const StyledNameP = styled.p`
	color: #22282d;
	font-size: 20px;
	font-weight: 700;
`;

export const StyledOccupationP = styled.p`
	color: #7a7e81;
	font-size: 14px;
	font-weight: 400;
`;

export const StyledAvatarWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledAvatarIMG = styled.img`
	width: 78px;
	height: 78px;
	display: block;
	margin-right: 1rem;
`;

export const StyledEsc = styled(Link)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #4e5357;
`;

export const StyledRatingStar = withStyles({
	iconFilled: { color: '#ff3d47' },
	iconHover: { color: '#EC1940' },
})(Rating);
