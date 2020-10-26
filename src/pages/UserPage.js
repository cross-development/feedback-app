//Core
import React, { useState } from 'react';
//Components
import UserProfile from 'components/UserProfile';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const UserPage = ({ existUser }) => {
	const clearInput = '';

	const userProfile = {
		photoURL: existUser.photoURL,
		phoneNumber: existUser.phoneNumber,
		displayName: existUser.displayName,
	};

	const [profileState, setProfileState] = useState(userProfile);

	const handleChangeProfile = value => setProfileState(value);

	const handleSubmit = e => {
		e.preventDefault();

		console.log(profileState);
	};

	return (
		<UserProfile
			user={existUser}
			onSubmit={handleSubmit}
			profileState={profileState}
			handleChangeProfile={handleChangeProfile}
		/>
	);
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
