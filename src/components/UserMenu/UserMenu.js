//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
//Styles
import { StyledLogOutIcon } from './UserMenu.styles';
import { StyledNameLink, StyledNameWrapDiv, StyledLogoutLink } from './UserMenu.styles';
import { StyledUserWrapDiv, StyledAvatarWrapDiv, StyledAvatarIMG } from './UserMenu.styles';

const UserMenu = ({ uid, avatar, name }) => {
	const userAvatar = avatar || `${process.env.PUBLIC_URL}/avatars/unnamed.png`;

	const dispatch = useDispatch();

	return (
		<StyledUserWrapDiv>
			<StyledAvatarWrapDiv>
				<StyledAvatarIMG src={userAvatar} alt={name} />
			</StyledAvatarWrapDiv>

			<StyledNameWrapDiv>
				<StyledNameLink to={`/users/${uid}`}>{name}</StyledNameLink>

				<StyledLogoutLink to="/" onClick={() => dispatch(logout())}>
					Log out <StyledLogOutIcon />
				</StyledLogoutLink>
			</StyledNameWrapDiv>
		</StyledUserWrapDiv>
	);
};

UserMenu.propTypes = {
	avatar: PropTypes.string,
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

UserMenu.defaultProps = {
	avatar: null,
};

export default UserMenu;
