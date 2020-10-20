//Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { feedbackSelectors } from 'redux/feedback';
import { teammateSelectors } from 'redux/teammate';
import { feedbackOperations } from 'redux/feedback';
//Components
import Teammate from 'components/Teammate';

const TeammatePage = ({ existUser, teammates, feedbacks, onAddFeedback }) => {
	const { teammateId } = useParams();
	const history = useHistory();

	const ratingsState = {
		leadershipSkills: 0,
		englishKnowledge: 0,
		communicateSkills: 0,
		problemSolving: 0,
		programmingSkills: 0,
		abilityLearning: 0,
		workflowBehavior: 0,
		senseOfHumor: 0,
	};

	const resolutionState = {
		improve: '',
		wrong: '',
	};

	const [resolution, setResolution] = useState(resolutionState);
	const [ratings, setRatings] = useState(ratingsState);
	const [teammate, setTeammate] = useState(null);
	const [feedback, setFeedback] = useState(null);

	const handleChangeRatings = value => setRatings(value);
	const handleChangeResolution = value => setResolution(value);

	const handleSubmit = e => {
		e.preventDefault();

		const teammateFeedback = {
			ratings,
			resolution,
			teammate: { ...teammate, isAccepted: true },
		};

		onAddFeedback(existUser.uid, teammateFeedback);

		history.replace('/');

		setResolution(resolutionState);
		setRatings(ratingsState);
	};

	useEffect(() => {
		const currentTeammate = teammates.find(({ tmId }) => tmId === teammateId);

		if (!currentTeammate) return setTeammate(null);

		setTeammate(currentTeammate);
	}, [teammates, teammateId]);

	useEffect(() => {
		const currentFeedback = feedbacks.find(({ teammate }) => teammate.tmId === teammateId);

		if (!currentFeedback) {
			setFeedback(null);
			setRatings(ratingsState);
			setResolution(resolutionState);
			return;
		}

		const { ratings, resolution } = currentFeedback;
		setFeedback({ ratings, resolution });
	}, [feedbacks, ratingsState, resolutionState, teammateId]);

	const feedbackRatings = feedback ? feedback.ratings : ratings;
	const feedbackResolutions = feedback ? feedback.resolution : resolution;

	return (
		teammate && (
			<Teammate
				member={teammate}
				ratingsState={feedbackRatings}
				resolutionState={feedbackResolutions}
				onSubmit={handleSubmit}
				handleRatings={handleChangeRatings}
				handleResolution={handleChangeResolution}
			/>
		)
	);
};

TeammatePage.propTypes = {
	teammates: PropTypes.arrayOf(
		PropTypes.shape({
			tmId: PropTypes.string.isRequired,
			tmName: PropTypes.string.isRequired,
			tmAvatar: PropTypes.string.isRequired,
			tmOccupation: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,

	existUser: PropTypes.objectOf(PropTypes.any),

	onAddFeedback: PropTypes.func.isRequired,

	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			fbId: PropTypes.string.isRequired,
			ratings: PropTypes.shape({
				leadershipSkills: PropTypes.number.isRequired,
				englishKnowledge: PropTypes.number.isRequired,
				communicateSkills: PropTypes.number.isRequired,
				problemSolving: PropTypes.number.isRequired,
				programmingSkills: PropTypes.number.isRequired,
				abilityLearning: PropTypes.number.isRequired,
				workflowBehavior: PropTypes.number.isRequired,
				senseOfHumor: PropTypes.number.isRequired,
			}).isRequired,
			resolution: PropTypes.exact({
				improve: PropTypes.string.isRequired,
				wrong: PropTypes.string.isRequired,
			}).isRequired,
			teammates: PropTypes.exact({
				tmId: PropTypes.string.isRequired,
				tmName: PropTypes.string.isRequired,
				tmAvatar: PropTypes.string.isRequired,
				tmOccupation: PropTypes.string.isRequired,
			}),
		}).isRequired,
	).isRequired,
};

TeammatePage.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
	teammates: teammateSelectors.getTeammates(state),
	feedbacks: feedbackSelectors.getFeedbacks(state),
});

const mapDispatchToProps = {
	onAddFeedback: feedbackOperations.addFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeammatePage);
