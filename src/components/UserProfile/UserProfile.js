//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLabel, StyledAvatarIMG, StyledNameP, StyledPenBtn } from './UserProfile.styles';
import { StyledAvatarWrap, StyledRatingForm, StyledContainerDiv } from './UserProfile.styles';
import { StyledInput, StyledTitleH2, StyledButton, StyledWrapperDiv } from './UserProfile.styles';

const UserProfile = ({ user, onSubmit, profileState, handleChangeProfile }) => (
	<StyledContainerDiv>
		<StyledAvatarWrap>
			<StyledAvatarIMG src={`${process.env.PUBLIC_URL}/avatars/user.png`} alt={user.displayName} />

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
						type="text"
						name="fullName"
						autoComplete="off"
						placeholder="Enter full name"
						value={profileState.displayName || ''}
						inputLength={profileState.displayName}
						onChange={e => handleChangeProfile({ ...profileState, displayName: e.target.value })}
					/>
					<StyledPenBtn />
				</StyledLabel>

				<StyledLabel>
					Phone number
					<StyledInput
						type="text"
						name="phoneNumber"
						autoComplete="off"
						placeholder="Enter phone number"
						value={profileState.phoneNumber || ''}
						inputLength={profileState.phoneNumber}
						onChange={e => handleChangeProfile({ ...profileState, phoneNumber: e.target.value })}
					/>
					<StyledPenBtn />
				</StyledLabel>

				<StyledLabel>
					Profile photo
					<StyledInput
						type="text"
						name="photoURL"
						autoComplete="off"
						placeholder="Enter photo URL"
						value={profileState.photoURL || ''}
						inputLength={profileState.photoURL}
						onChange={e => handleChangeProfile({ ...profileState, photoURL: e.target.value })}
					/>
					<StyledPenBtn />
				</StyledLabel>

				<StyledButton type="submit">Update</StyledButton>
			</StyledWrapperDiv>
		</StyledRatingForm>
	</StyledContainerDiv>
);

UserProfile.propTypes = {
	user: PropTypes.objectOf(PropTypes.any),
};

UserProfile.defaultProps = {
	user: null,
};

export default UserProfile;
