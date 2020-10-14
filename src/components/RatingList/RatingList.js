//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Rating from '@material-ui/lab/Rating';
//Data
import ratingsListData from 'data/ratingsList.json';
//Styles
import { StyledRatingUl, StyledRatingLi } from './RatingList.styles';
//
const RatingList = ({ state, handleRatings }) => {
	return (
		<StyledRatingUl>
			{ratingsListData.map(({ title, label }) => (
				<StyledRatingLi key={label}>
					{title}
					<Rating
						name={`${label}`}
						value={state[`${label}`]}
						onChange={(event, newValue) => {
							handleRatings({ ...state, [`${label}`]: newValue });
						}}
					/>
				</StyledRatingLi>
			))}
		</StyledRatingUl>
	);
};

RatingList.propTypes = {
	handleRatings: PropTypes.func.isRequired,
	state: PropTypes.shape({
		leadershipSkills: PropTypes.number.isRequired,
		englishKnowledge: PropTypes.number.isRequired,
		communicateSkills: PropTypes.number.isRequired,
		problemSolving: PropTypes.number.isRequired,
		programmingSkills: PropTypes.number.isRequired,
		abilityLearning: PropTypes.number.isRequired,
		workflowBehavior: PropTypes.number.isRequired,
		senseOfHumor: PropTypes.number.isRequired,
	}).isRequired,
};

export default RatingList;
