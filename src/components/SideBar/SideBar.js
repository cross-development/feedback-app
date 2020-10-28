//Core
import React, { useState } from 'react';
//Components
import Logo from '../Logo';
import Loader from '../Loader';
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

	const { user, loading: userLoading } = useSelector(state => state.auth);
	const { loading: teammatesLoading } = useSelector(state => state.teammates);
	const { loading: feedbacksLoading } = useSelector(state => state.feedbacks);

	const handleChangeFilter = filter => setFilter(filter);

	const handleClearFilter = () => setFilter('');

	return (
		<StyledAside>
			<Logo />

			{user ? (
				<>
					<UserMenu uid={user.uid} name={user.displayName} />

					<TeamFilter
						value={filter}
						onClearFilter={handleClearFilter}
						onChangeFilter={handleChangeFilter}
					/>

					{teammatesLoading || feedbacksLoading ? (
						<Loader onLoad={teammatesLoading} size={20} />
					) : (
						<TeammateList filter={filter} />
					)}
				</>
			) : (
				user || (userLoading && <AuthMenu />)
			)}
		</StyledAside>
	);
};

export default SideBar;
