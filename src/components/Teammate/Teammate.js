//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import StarsRating from '../StarsRating';
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
	const { tmName, tmAvatar, tmOccupation } = member;

	return (
		<StyledContainerDiv>
			<div>
				<StyledWrapperDiv>
					<img src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`} alt={tmName} />
					<p>{tmName}</p>
					<p>{tmOccupation}</p>
				</StyledWrapperDiv>
				<StyledWrapperDiv>
					<span>&times;</span>
					<p>ESC</p>
				</StyledWrapperDiv>
			</div>

			<StyledRatingForm onSubmit={onSubmit}>
				<StyledFormTitleH2>Provide feedback</StyledFormTitleH2>

				<StyledWrapperDiv>
					<StyledFormSubTitleH3>Personal skills and competences</StyledFormSubTitleH3>

					<StarsRating label="Leadership skills" />
					<StarsRating label="English language knowledge" />
					<StarsRating label="Communication skills" />
					<StarsRating label="Problem solving" />
					<StarsRating label="Programming skills" />
					<StarsRating label="Ability to learning" />
					<StarsRating label="Workflow behavior" />
					<StarsRating label="Sense of humor" />
				</StyledWrapperDiv>

				<StyledWrapperDiv>
					<StyledFormSubTitleH3>Write a feedback</StyledFormSubTitleH3>

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
