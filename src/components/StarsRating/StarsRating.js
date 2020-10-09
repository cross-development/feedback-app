//Core
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledRatingLabel, StyledRatingInput, StyledRatingStar } from './StarsRating.styles';

const StarsRating = ({ label }) => {
	const [hover, setHover] = useState(null);
	const [rating, setRating] = useState(null);

	return (
		<StyledRatingLabel>
			{label}

			{[...Array(5)].map((star, idx) => {
				const ratingValue = idx + 1;

				return (
					<Fragment key={ratingValue}>
						<StyledRatingInput
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>

						<StyledRatingStar
							size={20}
							onMouseLeave={() => setHover(null)}
							onMouseEnter={() => setHover(ratingValue)}
							color={ratingValue <= (hover || rating) ? '#EC1940' : '#E8E9EA'}
						/>
					</Fragment>
				);
			})}
		</StyledRatingLabel>
	);
};

StarsRating.propTypes = {
	label: PropTypes.string.isRequired,
};

export default StarsRating;
