//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
// import Rating from '@material-ui/lab/Rating';
//Styles
import { StyledNameP, StyledAvatarIMG, StyledWrapperDiv } from './TeammateCard.styles';
import { StyledAvatarWrap, StyledOccupationP, StyledContainerDiv } from './TeammateCard.styles';

const TeammateCard = ({ score, member }) => {
	const { tmName, tmAvatar, tmOccupation } = member;

	return (
		<StyledContainerDiv>
			<StyledAvatarWrap>
				<StyledAvatarIMG src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`} alt={tmName} />

				<StyledWrapperDiv>
					<StyledNameP>{tmName}</StyledNameP>
					<StyledOccupationP>{tmOccupation}</StyledOccupationP>
				</StyledWrapperDiv>
			</StyledAvatarWrap>

			{/* <StyledWrapperDiv>
				<p>Average score</p>
				<div>
					<span>4.2</span>
					<Rating
							name="score"
							value={score}
							onChange={(event, newValue) => {
								handleRatings({ ...state, [`${label}`]: newValue });
							}}
						/>
				</div>
			</StyledWrapperDiv> */}

			<StyledWrapperDiv>
				<span>&times;</span>
				<p>ESC</p>
			</StyledWrapperDiv>
		</StyledContainerDiv>
	);
};

TeammateCard.propTypes = {
	member: PropTypes.shape({
		tmName: PropTypes.string.isRequired,
		tmAvatar: PropTypes.string.isRequired,
		tmOccupation: PropTypes.string.isRequired,
	}).isRequired,
};

export default TeammateCard;
