//Core
import React from 'react';
import PropTypes from 'prop-types';
import StarsRating from '../StarsRating';
//Styles
import {
	StyledNameP,
	StyledWrapperDiv,
	StyledAvatarWrap,
	StyledAvatarIMG,
	StyledOccupationP,
	StyledContainerDiv,
} from './TeammateCard.styles';

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

			<StyledWrapperDiv>
				<p>Average score</p>
				<div>
					<span>4.2</span>
					<StarsRating />
				</div>
			</StyledWrapperDiv>

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
