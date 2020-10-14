//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import RatingList from '../RatingList';
import TeammateCard from '../TeammateCard';
//Styles
import {
	StyledLabel,
	StyledInput,
	StyledButton,
	StyledWrapperDiv,
	StyledRatingForm,
	StyledFormTitleH2,
	StyledContainerDiv,
	StyledFormSubTitleH3,
} from './Teammate.styles';

const Teammate = ({
	member,
	onSubmit,
	wrongValue,
	improveValue,
	onChangeWrong,
	onChangeImprove,
}) => {
	return (
		<StyledContainerDiv>
			<TeammateCard member={member} />

			<StyledRatingForm onSubmit={onSubmit}>
				<StyledFormTitleH2>Provide feedback</StyledFormTitleH2>

				<StyledWrapperDiv>
					<StyledFormSubTitleH3>Personal skills and competences</StyledFormSubTitleH3>
				</StyledWrapperDiv>

				<StyledWrapperDiv>
					<StyledFormSubTitleH3>Write a feedback</StyledFormSubTitleH3>

					<RatingList />

					<StyledLabel>
						<StyledInput
							type="text"
							name="wrong"
							value={wrongValue}
							autoComplete="off"
							onChange={onChangeWrong}
							placeholder="What is wrong"
						/>
					</StyledLabel>

					<StyledLabel>
						<StyledInput
							type="text"
							name="improve"
							value={improveValue}
							autoComplete="off"
							onChange={onChangeImprove}
							placeholder="What could be improved"
						/>
					</StyledLabel>

					<StyledButton type="submit">Submit</StyledButton>
				</StyledWrapperDiv>
			</StyledRatingForm>
		</StyledContainerDiv>
	);
};

Teammate.propTypes = {};

export default Teammate;
