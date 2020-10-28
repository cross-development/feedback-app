//Core
import React, { useState } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { teammateOperations } from 'redux/teammate';
//Styles
import { StylesForm, StyledLabel, StyledInput, StyledButton } from './Admin.styles';

const initialState = {
	tmName: '',
	tmAvatar: '',
	tmOccupation: '',
};

const Admin = () => {
	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(teammateOperations.addTeammate(state));
		setState(initialState);
	};
	return (
		<StylesForm onSubmit={handleSubmit}>
			<StyledLabel>
				Name
				<StyledInput
					type="text"
					name="tmName"
					value={state.tmName}
					autoComplete="off"
					onChange={e => setState({ ...state, tmName: e.target.value })}
				/>
			</StyledLabel>

			<StyledLabel>
				Avatar
				<StyledInput
					type="text"
					name="tmAvatar"
					value={state.tmAvatar}
					autoComplete="off"
					onChange={e => setState({ ...state, tmAvatar: e.target.value })}
				/>
			</StyledLabel>

			<StyledLabel>
				Occupation
				<StyledInput
					type="text"
					name="tmOccupation"
					value={state.tmOccupation}
					autoComplete="off"
					onChange={e => setState({ ...state, tmOccupation: e.target.value })}
				/>
			</StyledLabel>

			<StyledButton type="submit">Log in</StyledButton>
		</StylesForm>
	);
};

export default Admin;
