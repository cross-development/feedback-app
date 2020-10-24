//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledRatingStar } from './TeammateCard.styles';
import { StyledNameP, StyledAvatarIMG, StyledWrapperDiv, StyledEsc } from './TeammateCard.styles';
import { StyledAvatarWrap, StyledOccupationP, StyledContainerDiv } from './TeammateCard.styles';

const TeammateCard = ({ teammate }) => {
	const { tmName, tmAvatar, tmOccupation } = teammate;

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
					<StyledRatingStar name="score" value={4} readOnly />
				</div>
			</StyledWrapperDiv> */}

			<StyledWrapperDiv>
				<StyledEsc to="/">
					<span>&times;</span>
					<p>ESC</p>
				</StyledEsc>
			</StyledWrapperDiv>
		</StyledContainerDiv>
	);
};

TeammateCard.propTypes = {
	teammate: PropTypes.shape({
		tmName: PropTypes.string.isRequired,
		tmAvatar: PropTypes.string.isRequired,
		tmOccupation: PropTypes.string.isRequired,
	}).isRequired,
};

export default TeammateCard;
