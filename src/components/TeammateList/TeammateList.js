//Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { teammateSelectors } from 'redux/teammate';
import { teammateOperations } from 'redux/teammate';
//Styles
import {
	StylesTeamUL,
	StyledTeamLI,
	StyledTeamLink,
	StyledNameSpan,
	StyledAvatarIMG,
} from './TeammateList.styles';

const TeammateList = ({ filter, teammates, onFetchTeammates }) => {
	useEffect(() => {
		onFetchTeammates();
	}, [onFetchTeammates]);

	const getVisibleTeammates = () =>
		teammates.filter(({ tmName }) => tmName.toLowerCase().includes(filter.toLowerCase()));

	const visibleTeammates = getVisibleTeammates();

	return (
		<StylesTeamUL>
			{visibleTeammates.map(({ tmId, tmName, tmAvatar }) => (
				<StyledTeamLI key={tmId}>
					<StyledTeamLink to={`/teammates/${tmId}`}>
						<StyledAvatarIMG
							src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`}
							alt={tmName}
						/>
						<StyledNameSpan>{tmName}</StyledNameSpan>
					</StyledTeamLink>
				</StyledTeamLI>
			))}
		</StylesTeamUL>
	);
};

TeammateList.propTypes = {
	teammates: PropTypes.arrayOf(
		PropTypes.shape({
			tmId: PropTypes.string.isRequired,
			tmName: PropTypes.string.isRequired,
			tmAvatar: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	teammates: teammateSelectors.getTeammates(state),
});

const mapDispatchToProps = {
	onFetchTeammates: teammateOperations.fetchTeammates,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeammateList);
