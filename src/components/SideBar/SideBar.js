//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Logo from '../Logo';
import Loader from '../Loader';
import UserMenu from '../UserMenu';
import TeamFilter from '../TeamFilter';
import TeammateList from '../TeammateList';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { teammateSelectors } from 'redux/teammate';
import { feedbackSelectors } from 'redux/feedback';
//Styles
import { StyledAside } from './SideBar.styles';

const SideBar = ({ existUser, teammatesLoading, feedbacksLoading }) => {
	const [filter, setFilter] = useState('');

	const handleChangeFilter = filter => setFilter(filter);

	const handleClearFilter = () => setFilter('');

	return (
		<StyledAside>
			<Logo />

			{existUser && (
				<>
					<UserMenu uid={existUser.uid} name={existUser.displayName} />

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
			)}
		</StyledAside>
	);
};

SideBar.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
	teammatesLoading: PropTypes.bool.isRequired,
	feedbacksLoading: PropTypes.bool.isRequired,
};

SideBar.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	feedbacksLoading: feedbackSelectors.getLoading(state),
	teammatesLoading: teammateSelectors.getLoading(state),
});

export default connect(mapStateToProps)(SideBar);
