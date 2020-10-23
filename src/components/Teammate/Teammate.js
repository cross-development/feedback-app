//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import RatingList from '../RatingList';
import TeammateCard from '../TeammateCard';
//Styles
import { StyledRatingForm, StyledTitleH2, StyledButton, StyledWrapperDiv } from './Teammate.styles';
import { StyledLabel, StyledInput, StyledContainerDiv, StyledSubtitleH3 } from './Teammate.styles';

const Teammate = ({
	member,
	onSubmit,
	isReviewed,
	ratingsState,
	resolutionState,
	handleRatings,
	handleResolution,
}) => {
	return (
		<StyledContainerDiv>
			<TeammateCard member={member} />

			<StyledRatingForm onSubmit={onSubmit}>
				<StyledTitleH2>Provide feedback</StyledTitleH2>

				<StyledSubtitleH3>Personal skills and competences</StyledSubtitleH3>

				<StyledWrapperDiv>
					<RatingList state={ratingsState} handleRatings={handleRatings} />

					<StyledSubtitleH3>Write a feedback</StyledSubtitleH3>

					<StyledLabel>
						<StyledInput
							required
							type="text"
							name="wrong"
							autoComplete="off"
							placeholder="What is wrong"
							value={resolutionState.wrong}
							inputLength={resolutionState.wrong}
							onChange={e => handleResolution({ ...resolutionState, wrong: e.target.value })}
						/>
					</StyledLabel>

					<StyledLabel>
						<StyledInput
							required
							type="text"
							name="improve"
							autoComplete="off"
							value={resolutionState.improve}
							inputLength={resolutionState.improve}
							placeholder="What could be improved"
							onChange={e => handleResolution({ ...resolutionState, improve: e.target.value })}
						/>
					</StyledLabel>

					<StyledButton type="submit">{isReviewed ? 'Update' : 'Submit'}</StyledButton>
				</StyledWrapperDiv>
			</StyledRatingForm>
		</StyledContainerDiv>
	);
};

Teammate.propTypes = {
	member: PropTypes.shape({
		tmName: PropTypes.string.isRequired,
		tmAvatar: PropTypes.string.isRequired,
		tmOccupation: PropTypes.string.isRequired,
	}).isRequired,

	resolutionState: PropTypes.shape({
		improve: PropTypes.string.isRequired,
		wrong: PropTypes.string.isRequired,
	}).isRequired,

	ratingsState: PropTypes.shape({
		leadershipSkills: PropTypes.number.isRequired,
		englishKnowledge: PropTypes.number.isRequired,
		communicateSkills: PropTypes.number.isRequired,
		problemSolving: PropTypes.number.isRequired,
		programmingSkills: PropTypes.number.isRequired,
		abilityLearning: PropTypes.number.isRequired,
		workflowBehavior: PropTypes.number.isRequired,
		senseOfHumor: PropTypes.number.isRequired,
	}).isRequired,

	onSubmit: PropTypes.func.isRequired,
	handleRatings: PropTypes.func.isRequired,
	handleResolution: PropTypes.func.isRequired,
};

export default Teammate;
