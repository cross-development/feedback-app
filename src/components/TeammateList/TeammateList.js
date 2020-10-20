//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { teammateSelectors } from 'redux/teammate';
import { feedbackSelectors } from 'redux/feedback';
//Styles
import { StylesTeamUL, StyledTeamLI, StyledTeamLink } from './TeammateList.styles';
import { StyledNameSpan, StyledAvatarIMG, StyledStatusSpan } from './TeammateList.styles';

const TeammateList = ({ filter, teammates, feedbacks }) => {
	const getVisibleTeammates = teammates =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates(teammates);

	const getTeammatesWithFeedbackStatus = (visibleTeammates, feedbacks) => {
		if (feedbacks.length < 1) return visibleTeammates;

		const newArray = visibleTeammates.map(teammate => {
			const reviewedTeammate = feedbacks.find(feedback => teammate.tmId === feedback.teammate.tmId);
			return reviewedTeammate ? { ...teammate, isAccepted: true } : teammate;
		});

		return newArray;
	};

	const teammatesWithFbStatus = getTeammatesWithFeedbackStatus(visibleTeammates, feedbacks);

	return (
		<StylesTeamUL>
			{teammatesWithFbStatus.map(({ tmId, tmName, tmAvatar, isAccepted }) => (
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
	teammates: teammateSelectors.getTeammates(state),
	feedbacks: feedbackSelectors.getFeedbacks(state),
});

export default connect(mapStateToProps)(TeammateList);
