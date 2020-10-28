//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StylesTeamUL, StyledTeamLI, StyledTeamLink } from './TeammateList.styles';
import { StyledNameSpan, StyledAvatarIMG, StyledStatusSpan } from './TeammateList.styles';

const TeammateList = ({ filter }) => {
	const { items: teammates } = useSelector(state => state.teammates);
	const { items: feedbacks } = useSelector(state => state.feedbacks);

	const getVisibleTeammates = teammates =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const getTeammatesWithFeedbackStatus = (visibleTeammates, feedbacks) => {
		if (feedbacks.length < 1) return visibleTeammates;

		const newArray = visibleTeammates.map(teammate => {
			const reviewedTeammate = feedbacks.find(feedback => teammate.tmId === feedback.teammate.tmId);
			return reviewedTeammate ? { ...teammate, isAccepted: true } : teammate;
		});

		return newArray;
	};

	const visibleTeammates = getVisibleTeammates(teammates);
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
};

TeammateList.defaultProps = {
	filter: '',
	existUser: null,
};

export default TeammateList;
