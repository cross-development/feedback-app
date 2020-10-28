//Core
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//Redux
import { feedbackOperations } from 'redux/feedback';
import { useSelector, useDispatch } from 'react-redux';
//Components
import Teammate from 'components/Teammate';

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

const TeammatePage = () => {
	const history = useHistory();
	const { teammateId } = useParams();

	const dispatch = useDispatch();

	const { user } = useSelector(state => state.auth);
	const { items: teammates } = useSelector(state => state.teammates);
	const { items: feedbacks } = useSelector(state => state.feedbacks);

	const [resolution, setResolution] = useState(resolutionState);
	const [ratings, setRatings] = useState(ratingsState);
	const [teammate, setTeammate] = useState(null);
	const [feedback, setFeedback] = useState(null);
	const [isReviewed, setIsReviewed] = useState(false);
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		const currentTeammate = teammates.find(({ tmId }) => tmId === teammateId);

		if (!currentTeammate) return setTeammate(null);

		setTeammate(currentTeammate);
	}, [teammates, teammateId]);

	useEffect(() => {
		const currentFeedback = feedbacks.find(({ teammate }) => teammate.tmId === teammateId);

		if (!currentFeedback) {
			setFeedback(null);
			setIsReviewed(false);
			setRatings(ratingsState);
			setResolution(resolutionState);
			return;
		}

		const { ratings, resolution } = currentFeedback;

		setFeedback({ ratings, resolution });
		setIsReviewed(true);
		setIsUpdated(false);
	}, [feedbacks, teammateId]);

	const handleChangeRatings = value => setRatings(value);
	const handleChangeResolution = value => setResolution(value);

	const handleSubmit = e => {
		e.preventDefault();

		const teammateFeedback = {
			ratings,
			resolution,
			teammate: { ...teammate, isAccepted: true },
		};

		if (isReviewed) {
			setFeedback(null);
			setIsUpdated(true);
			setIsReviewed(false);
			setRatings(ratingsState);
			setResolution(resolutionState);
			return;
		}

		isUpdated
			? dispatch(feedbackOperations.updateFeedback(user.uid, teammateFeedback))
			: dispatch(feedbackOperations.addFeedback(user.uid, teammateFeedback));

		setResolution(resolutionState);
		setRatings(ratingsState);
		setIsReviewed(false);
		setIsUpdated(true);

		history.replace('/');
	};

	const feedbackRatings = feedback ? feedback.ratings : ratings;
	const feedbackResolutions = feedback ? feedback.resolution : resolution;

	return (
		teammate && (
			<Teammate
				teammate={teammate}
				isReviewed={isReviewed}
				ratingsState={feedbackRatings}
				resolutionState={feedbackResolutions}
				onSubmit={handleSubmit}
				handleRatings={handleChangeRatings}
				handleResolution={handleChangeResolution}
			/>
		)
	);
};

export default TeammatePage;
