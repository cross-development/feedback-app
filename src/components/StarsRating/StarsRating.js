//Core
import React, { useState } from 'react';
//Styles
import { StyledRatingLabel, StyledRatingInput, StyledRatingStar } from './StarsRating.styles';

const StarsRating = () => {
	const [hover, setHover] = useState(null);
	const [rating, setRating] = useState(null);

	return [...Array(5)].map((star, idx) => {
		const ratingValue = idx + 1;

		return (
			<StyledRatingLabel key={ratingValue}>
				<StyledRatingInput
					type="radio"
					name="rating"
					value={ratingValue}
					onClick={() => setRating(ratingValue)}
				/>

				<StyledRatingStar
					size={20}
					onMouseEnter={() => setHover(ratingValue)}
					onMouseLeave={() => setHover(null)}
					color={ratingValue <= (hover || rating) ? '#EC1940' : '#E8E9EA'}
				/>
			</StyledRatingLabel>
		);
	});
};

export default StarsRating;
