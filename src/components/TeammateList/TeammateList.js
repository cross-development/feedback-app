//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { teammateSelectors } from 'redux/teammate';
import { feedbackSelectors } from 'redux/feedback';
//Styles
import { StylesTeamUL, StyledTeamLI, StyledTeamLink } from './TeammateList.styles';
import { StyledNameSpan, StyledAvatarIMG, StyledStatusSpan } from './TeammateList.styles';

const TeammateList = ({ filter, existUser, teammates, feedbacks }) => {
	const getVisibleTeammates = teammates =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates(teammates);

	const getTeammatesWithFeedbackStatus = (visibleTeammates, feedbacks) => {
		console.log(feedbacks);
		if (feedbacks.length < 1) return visibleTeammates;
	};

	const teammatesWithFbStatus = getTeammatesWithFeedbackStatus(visibleTeammates, feedbacks);

	console.log('teammatesWithFbStatus ', teammatesWithFbStatus);

	return (
		<StylesTeamUL>
			{visibleTeammates.map(({ tmId, tmName, tmAvatar, isAccepted }) => (
				<StyledTeamLI key={tmId}>
					<StyledTeamLink to={`/teammates/${tmId}`}>
						<StyledAvatarIMG
							src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`}
							alt={tmName}
						/>
						<StyledNameSpan>{tmName}</StyledNameSpan>
						<StyledStatusSpan isAccepted={isAccepted}></StyledStatusSpan>
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
};

TeammateList.defaultProps = {
	filter: '',
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	teammates: teammateSelectors.getTeammates(state),
	feedbacks: feedbackSelectors.getFeedbacks(state),
});

export default connect(mapStateToProps)(TeammateList);
