//Core
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
//Components
import UserProfile from 'components/UserProfile';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from 'redux/auth/authOperations';

const UserPage = () => {
	const { photoURL: photo, displayName } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const history = useHistory();

	const fullName = useRef(null);
	const photoURL = useRef(null);
	const refs = { fullName, photoURL };

	const userProfile = {
		photoURL: photo,
		fullName: displayName,
	};

	const [profileState, setProfileState] = useState(userProfile);

	const handleUpdateInfo = e => {
		e.preventDefault();

		const textInput = refs[e.currentTarget.id].current;
		textInput.disabled = false;
		textInput.focus();
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(updateUserProfile({ ...profileState }));
		history.replace('/');
	};

	return (
		<UserProfile
			refs={refs}
			onSubmit={handleSubmit}
			profileState={profileState}
			user={{ photo, displayName }}
			onUpdateInfo={handleUpdateInfo}
			onChangeProfile={setProfileState}
		/>
	);
};

export default UserPage;
