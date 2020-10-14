import styled from 'styled-components';

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
