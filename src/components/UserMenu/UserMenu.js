//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledUserWrapDiv,
	StyledAvatarWrapDiv,
	StyledAvatarIMG,
	StyledNameLink,
	StyledNameWrapDiv,
	StyledLogoutLink,
} from './UserMenu.styles';

const UserMenu = ({ uid, avatar, name, onLogout }) => (
	<StyledUserWrapDiv>
		<StyledAvatarWrapDiv>
			<StyledAvatarIMG src={`${process.env.PUBLIC_URL}/avatars/user.png`} alt={name} />
		</StyledAvatarWrapDiv>

		<StyledNameWrapDiv>
			<StyledNameLink to={`/users/${uid}`}>{name}</StyledNameLink>

			<StyledLogoutLink to="/" onClick={onLogout}>
				Log out
			</StyledLogoutLink>
		</StyledNameWrapDiv>
	</StyledUserWrapDiv>
);

UserMenu.propTypes = {
	name: PropTypes.string,
	onLogout: PropTypes.func,
	avatar: PropTypes.string,
};

UserMenu.defaultProps = {
	name: 'Christian Pierce',
	avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
};

export default UserMenu;
