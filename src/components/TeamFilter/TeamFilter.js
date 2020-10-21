//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledFilterWrapDiv,
	StyledFilterLabel,
	StyledFilterInput,
	StyledClearButton,
} from './TeamFilter.styles';

const TeamFilter = ({ value, onChangeFilter, onClearFilter }) => (
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
			{value.length > 0 && (
				<StyledClearButton
					type="button"
					value={value.length}
					onClick={onClearFilter}
				></StyledClearButton>
			)}
		</StyledFilterLabel>
	</StyledFilterWrapDiv>
);

TeamFilter.propTypes = {
	value: PropTypes.string.isRequired,
	onClearFilter: PropTypes.func.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default TeamFilter;
