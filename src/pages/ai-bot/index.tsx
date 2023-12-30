import { Grid, Typography } from "@mui/material";
import React from "react";
import TradingBotIndicators from "../../components/aiBot/TradingBotIndicators";
import TimeSeriesForecastingIndicators from "../../components/aiBot/TimeSeriesForecastingIndicators";
import LLMInterpretationIndicators from "../../components/aiBot/LLMInterpretationIndicators";
import styled from "@emotion/styled";

const AiBot = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6} md={4}>
				<TitleStyle>트레이딩 봇 지표</TitleStyle>
				<TradingBotIndicators />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<TitleStyle textAlign="center">시계열 예측 지표</TitleStyle>
				<TimeSeriesForecastingIndicators />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<TitleStyle textAlign="end">LLM 해석 지표</TitleStyle>
				<LLMInterpretationIndicators />
			</Grid>
		</Grid>
	);
};

export default AiBot;

const TitleStyle = styled(Typography)({
	color: "#5D6588",
	margin: "15px 0",
});
