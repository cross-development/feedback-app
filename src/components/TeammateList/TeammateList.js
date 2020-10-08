//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StylesTeamUL,
	StyledTeamLI,
	StyledTeamLink,
	StyledNameSpan,
	StyledAvatarIMG,
} from './TeammateList.styles';

const TeammateList = ({ teammates }) => (
	<StylesTeamUL>
		{teammates.map(({ tmId, tmName, tmAvatar }) => (
			<StyledTeamLI key={tmId}>
				<StyledTeamLink to={`/teammates/${tmId}`}>
					<StyledAvatarIMG src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`} alt={tmName} />
					<StyledNameSpan>{tmName}</StyledNameSpan>
				</StyledTeamLink>
			</StyledTeamLI>
		))}
	</StylesTeamUL>
);

TeammateList.propTypes = {
	teammates: PropTypes.arrayOf(
		PropTypes.shape({
			tmId: PropTypes.string.isRequired,
			tmName: PropTypes.string.isRequired,
			tmAvatar: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default TeammateList;
