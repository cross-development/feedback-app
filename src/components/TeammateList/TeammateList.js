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
		{teammates.map(({ teammateId, tmName, avatarUrl }) => (
			<StyledTeamLI key={teammateId}>
				<StyledTeamLink to={`/teammates/${teammateId}`}>
					<StyledAvatarIMG
						src={`${process.env.PUBLIC_URL}/avatars/${avatarUrl}.png`}
						alt={tmName}
					/>
					<StyledNameSpan>{tmName}</StyledNameSpan>
				</StyledTeamLink>
			</StyledTeamLI>
		))}
	</StylesTeamUL>
);

TeammateList.propTypes = {
	teammates: PropTypes.arrayOf(
		PropTypes.shape({
			tmName: PropTypes.string.isRequired,
			avatarUrl: PropTypes.string.isRequired,
			teammateId: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default TeammateList;
