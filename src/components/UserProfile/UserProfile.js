//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledPenBtn } from './UserProfile.styles';
import { StyledLabel, StyledAvatarIMG, StyledNameP, StyledPenIcon } from './UserProfile.styles';
import { StyledAvatarWrap, StyledRatingForm, StyledContainerDiv } from './UserProfile.styles';
import { StyledInput, StyledTitleH2, StyledButton, StyledWrapperDiv } from './UserProfile.styles';

const UserProfile = ({ user, refs, onSubmit, profileState, onUpdateInfo, onChangeProfile }) => {
	const userAvatar = user.photo || `${process.env.PUBLIC_URL}/avatars/unnamed.png`;

	return (
		<StyledContainerDiv>
			<StyledAvatarWrap>
				<StyledAvatarIMG src={userAvatar} alt={user.displayName} />

				<StyledWrapperDiv>
					<StyledNameP>{user.displayName}</StyledNameP>
				</StyledWrapperDiv>
			</StyledAvatarWrap>

			<StyledRatingForm onSubmit={onSubmit}>
				<StyledTitleH2>About Me</StyledTitleH2>

				<StyledWrapperDiv>
					<StyledLabel>
						Full Name
						<StyledInput
							required
							disabled
							type="text"
							name="fullName"
							autoComplete="off"
							ref={refs.fullName}
							placeholder="Enter full name"
							value={profileState.fullName || ''}
							inputLength={profileState.fullName}
							onChange={({ target: { name, value } }) =>
								onChangeProfile({ ...profileState, [name]: value })
							}
						/>
						<StyledPenBtn id="fullName" onClick={onUpdateInfo}>
							<StyledPenIcon />
						</StyledPenBtn>
					</StyledLabel>

					<StyledLabel>
						Profile photo
						<StyledInput
							disabled
							type="text"
							name="photoURL"
							autoComplete="off"
							ref={refs.photoURL}
							placeholder="Enter photo URL"
							value={profileState.photoURL || ''}
							inputLength={profileState.photoURL}
							onChange={({ target: { name, value } }) =>
								onChangeProfile({ ...profileState, [name]: value })
							}
						/>
						<StyledPenBtn id="photoURL" onClick={onUpdateInfo}>
							<StyledPenIcon />
						</StyledPenBtn>
					</StyledLabel>

					<StyledButton type="submit">Update</StyledButton>
				</StyledWrapperDiv>
			</StyledRatingForm>
		</StyledContainerDiv>
	);
};

UserProfile.propTypes = {
	user: PropTypes.shape({
		displayName: PropTypes.string,
		photoURL: PropTypes.string,
	}).isRequired,
	refs: PropTypes.objectOf(PropTypes.any).isRequired,
	onSubmit: PropTypes.func.isRequired,
	onUpdateInfo: PropTypes.func.isRequired,
	onChangeProfile: PropTypes.func.isRequired,
	profileState: PropTypes.exact({
		photoURL: PropTypes.string,
		fullName: PropTypes.string,
	}).isRequired,
};

UserProfile.defaultProps = {
	uid: null,
	displayName: '',
	photoURL: null,
};

export default UserProfile;
