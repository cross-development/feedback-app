//Core
import React, { useState, useEffect } from 'react';
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
import { feedbackOperations } from 'redux/feedback';
//Styles
import { StyledAside } from './SideBar.styles';

const SideBar = ({ existUser, teammatesLoading, onGetFeedbacks }) => {
	const [filter, setFilter] = useState('');

	useEffect(() => {
		if (!existUser) return;

		onGetFeedbacks(existUser.uid);
	}, [onGetFeedbacks, existUser]);

	const handleChangeFilter = filter => setFilter(filter);

	return (
		<StyledAside>
			<Logo />

			{existUser && (
				<>
					<UserMenu uid={existUser.uid} name={existUser.displayName} />

					<TeamFilter value={filter} onChangeFilter={handleChangeFilter} />

					{teammatesLoading ? (
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
	onGetFeedbacks: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	teammatesLoading: teammateSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onGetFeedbacks: feedbackOperations.getFeedbacks,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
