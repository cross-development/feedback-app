//Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import Logo from '../Logo';
import UserMenu from '../UserMenu';
import TeamFilter from '../TeamFilter';
import TeammateList from '../TeammateList';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Styles
import { StyledAside } from './SideBar.styles';

import teammateList from 'data/teammates.json';

const SideBar = ({ existUser }) => {
	const [filter, setFilter] = useState('');
	// const [teammates, setTeammates] = useState(null);
	//TODO: тут будет метод, который будет забирать всех тиммейтов с сервера
	const teammates = [...teammateList];

	const handleChangeFilter = filter => setFilter(filter);

	const getVisibleTeammates = () =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates();

	return (
		<StyledAside>
			<Logo />

			{existUser && (
				<>
					<UserMenu uid={existUser.uid} name={existUser.displayName} />

					<TeamFilter value={filter} onChangeFilter={handleChangeFilter} />

					<TeammateList teammates={visibleTeammates} />
				</>
			)}
		</StyledAside>
	);
};

SideBar.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

SideBar.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(SideBar);
