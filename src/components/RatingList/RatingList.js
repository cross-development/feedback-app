//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import StarsRating from '../StarsRating';
//Styles
import { StyledRatingUl, StyledRatingLi } from './RatingList.styles';

const RatingList = () => {
	return (
		<StyledRatingUl>
			<StyledRatingLi>
				Leadership skills
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				English language knowledge
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Communication skills
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Problem solving
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Programming skills
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Ability to learning
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Workflow behavior
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
			<StyledRatingLi>
				Sense of humor
				<p>
					<StarsRating />
				</p>
			</StyledRatingLi>
		</StyledRatingUl>
	);
};

RatingList.propTypes = {};

export default RatingList;
