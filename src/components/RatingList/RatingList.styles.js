import styled from 'styled-components';

export const StyledRatingUl = styled.ul`
	list-style: none;
	width: 100%;
	margin-bottom: 1rem;
`;

export const StyledRatingLi = styled.li`
	display: flex;
	justify-content: space-between;
	color: #7a7e81;
	font-size: 14px;

	&:not(:last-of-type) {
		margin-bottom: 0.5rem;
	}
`;
