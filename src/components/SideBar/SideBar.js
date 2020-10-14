//Core
import React, { useState } from 'react';
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

const SideBar = ({ existUser }) => {
	const [filter, setFilter] = useState('');

	const handleChangeFilter = filter => setFilter(filter);

	return (
		<StyledAside>
			<Logo />

			{existUser && (
				<>
					<UserMenu uid={existUser.uid} name={existUser.displayName} />

					<TeamFilter value={filter} onChangeFilter={handleChangeFilter} />

					<TeammateList filter={filter} />
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
