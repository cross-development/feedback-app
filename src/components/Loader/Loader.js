//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { LoaderWrapperDiv } from './Loader.styles';
import { css } from '@emotion/core';

//Custom css
const customCss = css`
	display: block;
	margin: 20% auto;
`;

const Loader = ({ onLoad }) => (
	<LoaderWrapperDiv>
		<BeatLoader size={30} color="#22282D" loading={onLoad} css={customCss} />
	</LoaderWrapperDiv>
);

Loader.defaultProps = {
	onLoad: false,
};

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

export default Loader;
