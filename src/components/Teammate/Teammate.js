//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLabel, StyledInput, StyledButton } from './Teammate.styles';

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
		<div>
			<div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`} alt={tmName} />
					<p>{tmName}</p>
					<p>{tmOccupation}</p>
				</div>
				<div>
					<span>&times;</span>
					<p>ESC</p>
				</div>
			</div>

			<form onSubmit={onSubmit}>
				<h2>Provide feedback</h2>

				<p>Leadership skills</p>
				<p>English language knowledge</p>
				<p>Communication skills</p>
				<p>Problem solving</p>
				<p>Programming skills</p>
				<p>Ability to learning</p>
				<p>Workflow behavior</p>
				<p>Sense of humor</p>

				<div>
					<h3>Write a feedback</h3>

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
				</div>
				<StyledButton type="submit">Submit</StyledButton>
			</form>
		</div>
	);
};

Teammate.propTypes = {};

export default Teammate;
