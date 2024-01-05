import React from "react";
import { styled, Grid, Box } from "@mui/material";
import { Indicator } from "./Indicator";
import { PriceChart } from "../aiBot/PriceChart";
import { ChatRoom } from "./ChatRoom";
import { BettingChart } from "./BettingChart";
import { PredictionChart } from "./PredictionChart";
import { MyBetChart } from "./MyBetChart";
import BuySellProgressBar from "../aiBot/BuySellProgressBar";

export const Landing = () => {
	const data = {
		title: "1 hour prediction",

		data: [
			{
				title: "Bullish",
				votes: {
					vote: "3,020 Votes",
					apb: "1,203 APB ",
				},
			},
			{
				title: "Bullish",
				votes: {
					vote: "3,020 Votes",
					apb: "1,203 APB ",
				},
			},
		],
	};
	const data2 = {
		title: "2 hour prediction",

		data: [
			{
				title: "Bullish",
				votes: {
					vote: "3,020 Votes",
					apb: "1,203 APB ",
				},
			},
			{
				title: "Bullish",
				votes: {
					vote: "3,020 Votes",
					apb: "1,203 APB ",
				},
			},
		],
	};
	return (
		<Grid container spacing={2} marginTop={0}>
			<Grid item xs={12} sm={12} md={8} container spacing={2}>
				<Grid item xs={12}>
					<SectionContainer>
						<Indicator />
						<ChartWrapper>
							<PriceChart />
						</ChartWrapper>
						<ChatRoom />
					</SectionContainer>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={4} container spacing={2}>
				<Grid item xs={12}>
					<BettingChart />
				</Grid>
				<Grid item xs={12}>
					{/* <PredictionChart /> */}
					<BuySellProgressBar data={data} />
				</Grid>
				<Grid item xs={12}>
					<BuySellProgressBar data={data2} />
				</Grid>
				<Grid item xs={12}>
					<MyBetChart />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Landing;

const ChartWrapper = styled(Box)({
	backgroundColor: "#1E1F25",
	color: "#FFFFFF",
	padding: "10px",
	borderRadius: 10,
});

const SectionContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "16px",
});

