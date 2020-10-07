//Core
import React, { useState } from 'react';
//Components
import Logo from '../Logo';
import UserMenu from '../UserMenu';
import TeamFilter from '../TeamFilter';
import TeammateList from '../TeammateList';
//Styles
import { StyledAside } from './SideBar.styles';

import teammateList from 'data/teammates.json';

const SideBar = () => {
	const teammates = [...teammateList];

	const [filter, setFilter] = useState('');

	const handleChangeFilter = filter => setFilter(filter);

	const getVisibleTeammates = () =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates();

	return (
		<StyledAside>
			<Logo />

			<UserMenu />

			<TeamFilter value={filter} onChangeFilter={handleChangeFilter} />

			<TeammateList teammates={visibleTeammates} />
		</StyledAside>
	);
};

export default SideBar;
