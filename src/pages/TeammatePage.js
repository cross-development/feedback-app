//Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { teammateSelectors } from 'redux/teammate';
import { feedbackOperations } from 'redux/feedback';
//Components
import Teammate from 'components/Teammate';

const TeammatePage = ({ teammates, onAddFeedback, existUser: { uid } }) => {
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

	const handleChangeRatings = value => setRatings(value);
	const handleChangeResolution = value => setResolution(value);

	const handleSubmit = e => {
		e.preventDefault();

		const feedback = {
			ratings,
			teammate,
			resolution,
		};

		onAddFeedback(uid, feedback);

		history.replace('/');

		setResolution(resolutionState);
		setRatings(ratingsState);
	};

	useEffect(() => {
		const member = teammates.find(({ tmId }) => tmId === teammateId);

		setTeammate(member);
	}, [teammates, teammateId]);

	return (
		teammate && (
			<Teammate
				member={teammate}
				ratingsState={ratings}
				resolutionState={resolution}
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
};

TeammatePage.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	teammates: teammateSelectors.getTeammates(state),
	existUser: authSelectors.existUser(state),
});

const mapDispatchToProps = {
	onAddFeedback: feedbackOperations.addFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeammatePage);
