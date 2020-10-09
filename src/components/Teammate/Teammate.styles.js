import styled from 'styled-components';

export const StyledContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 80%;
	margin: 0 auto;
`;

export const StyledRatingForm = styled.form`
	width: 100%;
`;

export const StyledFormTitleH2 = styled.h2`
	color: #ec1940;
	font-size: 24px;
	font-weight: 400;
`;

export const StyledFormSubTitleH3 = styled.h3`
	color: #22282d;
	font-size: 16px;
	font-weight: 400;
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

	&:last-of-type {
		margin-bottom: 50px;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	padding: 6px 0;
	border: none;
	border-bottom: 2px solid #bdbdbd;
	width: 100%;
	outline: 0;

	&::placeholder {
		font: inherit;
		color: #616161;
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
