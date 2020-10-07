//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledFilterWrapDiv, StyledFilterLabel, StyledFilterInput } from './TeamFilter.styles';

const TeamFilter = ({ value, onChangeFilter }) => (
	<StyledFilterWrapDiv>
		<StyledFilterLabel>
			Your teammates
			<StyledFilterInput
				type="text"
				value={value}
				autoComplete="off"
				placeholder="Search a teammate"
				onChange={e => onChangeFilter(e.target.value)}
			/>
		</StyledFilterLabel>
	</StyledFilterWrapDiv>
);

TeamFilter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default TeamFilter;
