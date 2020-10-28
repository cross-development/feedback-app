import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';

export const StyledContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 70%;
	margin: 0 auto;
`;

export const StyledRatingForm = styled.form`
	width: 100%;
`;

export const StyledTitleH2 = styled.h2`
	color: #ec1940;
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 1.5rem;
`;

export const StyledWrapperDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 30px;
	width: 100%;
	position: relative;
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	padding: 6px 0;
	border: none;
	border-bottom: 2px solid ${({ inputLength }) => (inputLength ? '#EC1940' : '#bdbdbd')};
	width: 100%;
	outline: 0;

	&:disabled {
		background-color: #fafafa;
	}

	&::placeholder {
		font: inherit;
		color: #616161;
		font-size: 14px;
	}

	&::-webkit-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&::-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-ms-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:focus::-webkit-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus::-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-ms-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}
`;

export const StyledButton = styled.button`
	background: #ec1940;
	border: none;
	color: #fff;
	border-radius: 2px;
	padding: 12px 0;
	cursor: pointer;
	transition: all 250ms linear;
	box-shadow: 0 0 8px 0.2px #ec1940;
	outline: none;
	width: 16%;
	margin-left: auto;
	margin-right: 0;
	text-transform: uppercase;

	&:hover {
		box-shadow: 0 0 14px #ec1940;
	}
`;

export const StyledNameP = styled.p`
	color: #4e5357;
	font-size: 32px;
	font-weight: 700;
`;

export const StyledAvatarWrap = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 2rem;
`;

export const StyledAvatarIMG = styled.img`
	width: 100px;
	height: 100px;
	display: block;
	margin-right: 1rem;
	border-radius: 50px;
`;

export const StyledPenBtn = styled.button`
	position: absolute;
	bottom: 6px;
	right: 0;
	cursor: pointer;
	border: none;
	background-color: transparent;
	outline: none;
`;

export const StyledPenIcon = styled(FaPen)`
	color: #9e9e9e;
	transition: color 250ms linear;
	display: block;
	font-size: 18px;

	&:hover {
		color: #424242;
	}
`;
