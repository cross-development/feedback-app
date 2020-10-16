//Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { teammateSelectors } from 'redux/teammate';
import { teammateOperations } from 'redux/teammate';
import { feedbackOperations } from 'redux/feedback';
//Styles
import { StyledNameSpan, StyledAvatarIMG } from './TeammateList.styles';
import { StylesTeamUL, StyledTeamLI, StyledTeamLink } from './TeammateList.styles';

const TeammateList = ({ filter, teammates, onGetTeammates, existUser, onGetFeedbacks }) => {
	//TODO: исправить, 2 ре-рендера
	useEffect(() => {
		onGetTeammates();
		onGetFeedbacks(existUser.uid);
	}, [onGetTeammates, onGetFeedbacks, existUser]);

	const getVisibleTeammates = () =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates();

	return (
		<StylesTeamUL>
			{visibleTeammates.map(({ tmId, tmName, tmAvatar }) => (
				<StyledTeamLI key={tmId}>
					<StyledTeamLink to={`/teammates/${tmId}`}>
						<StyledAvatarIMG
							src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`}
							alt={tmName}
						/>
						<StyledNameSpan>{tmName}</StyledNameSpan>
					</StyledTeamLink>
				</StyledTeamLI>
			))}
		</StylesTeamUL>
	);
};

TeammateList.propTypes = {
	filter: PropTypes.string,
	existUser: PropTypes.objectOf(PropTypes.any),
	teammates: PropTypes.arrayOf(
		PropTypes.shape({
			tmId: PropTypes.string.isRequired,
			tmName: PropTypes.string.isRequired,
			tmAvatar: PropTypes.string.isRequired,
			tmOccupation: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	onGetTeammates: PropTypes.func.isRequired,
	onGetFeedbacks: PropTypes.func.isRequired,
};

TeammateList.defaultProps = {
	filter: '',
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	teammates: teammateSelectors.getTeammates(state),
});

const mapDispatchToProps = {
	onGetTeammates: teammateOperations.getTeammates,
	onGetFeedbacks: feedbackOperations.getFeedbacks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeammateList);
