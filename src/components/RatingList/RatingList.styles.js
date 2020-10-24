import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

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

export const StyledRatingStar = withStyles({
	iconFilled: { color: '#ff3d47' },
	iconHover: { color: '#EC1940' },
})(Rating);
