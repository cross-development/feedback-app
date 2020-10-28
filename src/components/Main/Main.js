//Core
import React from 'react';
//Components
import Loader from 'components/Loader';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Main.styles';

const Main = () => {
	const { items: teammates } = useSelector(state => state.teammates);
	const { items: feedbacks, loading: feedbacksLoading } = useSelector(state => state.feedbacks);

	const isReviewed = teammates.length === feedbacks.length;
	const isFeedbacksAndTeammatesNotEmpty = feedbacks.length > 0 && teammates.length > 0;
	const isFeedbacksAndTeammatesAreEmpty = feedbacks.length < 1 || teammates.length < 1;

	return (
		<>
			{isFeedbacksAndTeammatesAreEmpty && <Loader onLoad={true && teammates.length < 1} />}

			{feedbacks.length < 1 && teammates.length > 0 && !feedbacksLoading && (
				<StyledWrapperDiv>
					<StyledSubLogoDiv />
					<StyledTitleH1>No teammate selected</StyledTitleH1>
					<StyledTextP>
						To provide a feedback you should select an employee from the teammates list or to search
						by a name using the search field.
					</StyledTextP>
				</StyledWrapperDiv>
			)}

			{isFeedbacksAndTeammatesNotEmpty && (
				<StyledWrapperDiv>
					<StyledSubLogoDiv />
					<StyledTitleH1>Your feedback accepted</StyledTitleH1>
					<StyledTextP>You can review other your teammates</StyledTextP>
				</StyledWrapperDiv>
			)}

			{isReviewed && isFeedbacksAndTeammatesNotEmpty && (
				<StyledWrapperDiv>
					<StyledSubLogoDiv />
					<StyledTitleH1>You reviewed all your team</StyledTitleH1>
					<StyledTextP>Great job! Now you can only wait for the feedback session.</StyledTextP>
				</StyledWrapperDiv>
			)}
		</>
	);
};

export default Main;
