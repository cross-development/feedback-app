//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { authOperations } from 'redux/auth';
//Styles
import { StyledLogOutIcon } from './UserMenu.styles';
import { StyledNameLink, StyledNameWrapDiv, StyledLogoutLink } from './UserMenu.styles';
import { StyledUserWrapDiv, StyledAvatarWrapDiv, StyledAvatarIMG } from './UserMenu.styles';

const UserMenu = ({ uid, avatar, name, onLogout }) => (
	<StyledUserWrapDiv>
		<StyledAvatarWrapDiv>
			<StyledAvatarIMG src={avatar} alt={name} />
		</StyledAvatarWrapDiv>

		<StyledNameWrapDiv>
			<StyledNameLink to={`/users/${uid}`}>{name}</StyledNameLink>

			<StyledLogoutLink to="/" onClick={onLogout}>
				Log out <StyledLogOutIcon />
			</StyledLogoutLink>
		</StyledNameWrapDiv>
	</StyledUserWrapDiv>
);

UserMenu.propTypes = {
	name: PropTypes.string,
	avatar: PropTypes.string,
	onLogout: PropTypes.func.isRequired,
};

UserMenu.defaultProps = {
	name: '',
	avatar: `${process.env.PUBLIC_URL}/avatars/unnamed.png`,
};

const mapDispatchToProps = {
	onLogout: authOperations.logout,
};

export default connect(null, mapDispatchToProps)(UserMenu);
