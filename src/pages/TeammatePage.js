//Core
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Teammate from 'components/Teammate';

import teammates from 'data/teammates.json';

const TeammatePage = () => {
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
			resolution,
			teammate,
		};

		console.log(feedback);

		//TODO: тут будет метод, который отправит полный отзыв на сервер
		// this.props.onFeedback(fullName, email, password);
		setResolution(resolutionState);
		setRatings(ratingsState);
	};

	useEffect(() => {
		//TODO: тут будет метод, который будет забирать всех тиммейтов с сервера
		const member = teammates.find(({ tmId }) => tmId === teammateId);

		setTeammate(member);
	}, [teammateId]);

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

export default TeammatePage;
