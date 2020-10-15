//Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { teammateSelectors } from 'redux/teammate';
//Components
import Teammate from 'components/Teammate';

const TeammatePage = ({ teammates }) => {
	const { teammateId } = useParams();

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

		console.log(feedback);

		//TODO: тут будет метод, который отправит полный отзыв на сервер
		// this.props.onFeedback(fullName, email, password);
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
};

const mapStateToProps = state => ({
	teammates: teammateSelectors.getTeammates(state),
});

export default connect(mapStateToProps)(TeammatePage);
