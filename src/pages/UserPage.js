//Core
import React, { useState } from 'react';
//Components
import UserProfile from 'components/UserProfile';
//Redux
import { useSelector } from 'react-redux';

const UserPage = () => {
	const { user } = useSelector(state => state.auth);

	const clearInput = '';

	const userProfile = {
		photoURL: user.photoURL,
		phoneNumber: user.phoneNumber,
		displayName: user.displayName,
	};

	const [profileState, setProfileState] = useState(userProfile);

	const handleChangeProfile = value => setProfileState(value);

	const handleSubmit = e => {
		e.preventDefault();

		console.log(profileState);
	};

	return (
		<UserProfile
			user={user}
			onSubmit={handleSubmit}
			profileState={profileState}
			handleChangeProfile={handleChangeProfile}
		/>
	);
};

export default UserPage;
