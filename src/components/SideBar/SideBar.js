//Core
import React, { useState } from 'react';
//Components
import Logo from '../Logo';
import AuthMenu from '../AuthMenu';
import UserMenu from '../UserMenu';
import TeamFilter from '../TeamFilter';
import TeammateList from '../TeammateList';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledAside } from './SideBar.styles';

const SideBar = () => {
	const [filter, setFilter] = useState('');

	const { uid, displayName, photoURL, loading: userLoading } = useSelector(state => state.auth);
	const { loading: teammatesLoading } = useSelector(state => state.teammates);
	const { loading: feedbacksLoading } = useSelector(state => state.feedbacks);

	const handleChangeFilter = filter => setFilter(filter);

	const handleClearFilter = () => setFilter('');

	return (
		<StyledAside>
			<Logo />

			{uid && !teammatesLoading && !feedbacksLoading && (
				<>
					{displayName && <UserMenu uid={uid} name={displayName} avatar={photoURL} />}

					<TeamFilter
						value={filter}
						onClearFilter={handleClearFilter}
						onChangeFilter={handleChangeFilter}
					/>
					<TeammateList filter={filter} />
				</>
			)}

			{!uid && userLoading ? <AuthMenu /> : null}
		</StyledAside>
	);
};

export default SideBar;
