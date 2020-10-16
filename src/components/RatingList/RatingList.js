//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Rating from '@material-ui/lab/Rating';
//Data
import ratingsListData from 'data/ratingsList.json';
//Styles
import { withStyles } from '@material-ui/core/styles';
import { StyledRatingUl, StyledRatingLi } from './RatingList.styles';

const StyledRatingStar = withStyles({
	iconFilled: { color: '#ff3d47' },
	iconHover: { color: '#EC1940' },
})(Rating);

const RatingList = ({ state, handleRatings }) => {
	return (
		<StyledRatingUl>
			{ratingsListData.map(({ title, label }) => (
				<StyledRatingLi key={label}>
					{title}
					<StyledRatingStar
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
