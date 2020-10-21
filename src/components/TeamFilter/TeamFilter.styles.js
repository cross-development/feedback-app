import styled from 'styled-components';

export const StyledFilterWrapDiv = styled.div`
	margin-bottom: 2.5rem;
	width: 70%;
`;

export const StyledFilterLabel = styled.label`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: flex-start;
	color: #a7a9ab;
	text-transform: uppercase;
	position: relative;
`;

export const StyledFilterInput = styled.input`
	color: #d3d4d5;
	font-size: 14px;
	padding: 4px 0;
	border: none;
	background-color: transparent;
	border-bottom: 2px solid ${({ value }) => (value ? '#EC1940' : '#616161')};
	width: 100%;
	display: block;
	outline: 0;
	margin-top: 0.5rem;

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

export const StyledClearButton = styled.button`
	width: 16px;
	height: 16px;
	border-radius: 50px;
	background-color: #7a7e81;
	border: none;
	position: absolute;
	bottom: 6px;
	right: 4px;
	outline: none;
	cursor: pointer;
`;
