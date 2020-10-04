import styled from 'styled-components';

export const StyledH1 = styled.h1`
	font-size: 48px;
	font-weight: 300;
	margin-bottom: 2rem;
`;

export const StylesForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 5rem auto;
	padding: 20px 14px;
	width: 380px;
	border: none;
	border-radius: 4px;
`;

export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 30px;

	&:last-of-type {
		margin-bottom: 50px;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	padding: 6px 4px;
	border: none;
	border-bottom: 2px solid #bdbdbd;
	width: 100%;
	outline: 0;
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
	width: 40%;
	margin-left: auto;
	margin-right: 0;
	text-transform: uppercase;

	&:hover {
		box-shadow: 0 0 14px #ec1940;
	}
`;
