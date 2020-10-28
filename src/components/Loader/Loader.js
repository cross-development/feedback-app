//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { LoaderWrapperDiv } from './Loader.styles';
import { css } from '@emotion/core';

//Custom css
const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;

const Loader = ({ onLoad, size }) => (
	<LoaderWrapperDiv>
		<BeatLoader size={size} color="#A7A99F" loading={onLoad} css={beatCss} />
	</LoaderWrapperDiv>
);

Loader.propTypes = {
	onLoad: PropTypes.bool,
	size: PropTypes.number,
};

Loader.defaultProps = {
	onLoad: false,
	size: 40,
};

export default Loader;
