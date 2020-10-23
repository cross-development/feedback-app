//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Loader from 'components/Loader';
//Redux
import { connect } from 'react-redux';
import { feedbackSelectors } from 'redux/feedback';
import { teammateSelectors } from 'redux/teammate';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Main.styles';

const Main = ({ teammates, feedbacks }) => {
	const isReviewed = teammates.length === feedbacks.length;
	const isFeedbackAndTeammateNotEmpty = feedbacks.length > 0 && teammates.length > 0;
	const isFeedbackAndTeammateAreEmpty = feedbacks.length < 1 || teammates.length < 1;

	return (
		<>
			{teammates.length < 1 ? (
				<Loader onLoad={true} />
			) : (
				<StyledWrapperDiv>
					<StyledSubLogoDiv />
					<StyledTitleH1>No teammate selected</StyledTitleH1>
					<StyledTextP>
						To provide a feedback you should select an employee from the teammates list or to search
						by a name using the search field.
					</StyledTextP>
				</StyledWrapperDiv>
			)}

			{/* {isFeedbackAndTeammateNotEmpty && (
				<>
					<StyledSubLogoDiv />
					<StyledTitleH1>Your feedback accepted</StyledTitleH1>
					<StyledTextP>You can review other your teammates</StyledTextP>
				</>
			)} */}

			{isReviewed && isFeedbackAndTeammateNotEmpty && (
				<StyledWrapperDiv>
					<StyledSubLogoDiv />
					<StyledTitleH1>You reviewed all your team</StyledTitleH1>
					<StyledTextP>Great job! Now you can only wait for the feedback session.</StyledTextP>
				</StyledWrapperDiv>
			)}
		</>
	);
};

const mapStateToProps = state => ({
	teammates: teammateSelectors.getTeammates(state),
	feedbacks: feedbackSelectors.getFeedbacks(state),
});

export default connect(mapStateToProps)(Main);

// {isReviewed ? (
// 	<>
// 		<StyledTitleH1>You reviewed all your team</StyledTitleH1>
// 		<StyledTextP>Great job! Now you can only wait for the feedback session.</StyledTextP>
// 	</>
// ) : (
// 	<>
// 		<StyledTitleH1>No teammate selected</StyledTitleH1>
// 		<StyledTextP>
// 			To provide a feedback you should select an employee from the teammates list or to search
// 			by a name using the search field.
// 		</StyledTextP>
// 	</>
// )}
