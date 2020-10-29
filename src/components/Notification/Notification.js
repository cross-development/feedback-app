//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useDispatch } from 'react-redux';
import { unsetErrorMessage } from 'redux/auth/authOperations';
//Styles
import { StyledErrorDiv, StyledErrorP, StyledErrorBtn } from './Notification.styles';

const Notification = ({ message }) => {
	const dispatch = useDispatch();

	const handleCloseErrorWindow = () => dispatch(unsetErrorMessage());

	return (
		<StyledErrorDiv>
			<StyledErrorBtn onClick={handleCloseErrorWindow}>&#10006;</StyledErrorBtn>
			<StyledErrorP>{message}</StyledErrorP>
		</StyledErrorDiv>
	);
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
