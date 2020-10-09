import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const StyledRatingLabel = styled.label`
	font-size: 14px;
	font-weight: 400;
	color: #7a7e81;
`;

export const StyledRatingInput = styled.input`
	display: none;
`;

export const StyledRatingStar = styled(FaStar)`
	cursor: pointer;
	transition: color 200ms;
`;
