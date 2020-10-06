//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Logo from '../Logo';
//Styles
import { StyledAside } from './SideBar.styles';

const SideBar = props => {
	return (
		<StyledAside>
			<Logo />
		</StyledAside>
	);
};

SideBar.propTypes = {};

export default SideBar;
