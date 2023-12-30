import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartOptions } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = () => {
	const data = {
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3],
				backgroundColor: ["red", "blue", "yellow"],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				cutout: "80%",
			},
		],
	};

	const plugin = {
		id: "textCenter",
		beforeDraw: function (chart) {
			const width = chart.width,
				height = chart.height,
				ctx = chart.ctx;
			ctx.restore();
			const fontSize = (height / 160).toFixed(2);
			ctx.font = fontSize + "em sans-serif";
			ctx.textBaseline = "top";
			ctx.fillStyle = "white";
			const text = "50%",
				textX = Math.round((width - ctx.measureText(text).width) / 2),
				textY = height / 2;
			ctx.fillText(text, textX, textY);
			ctx.save();
		},
	};
	return (
		<Grid container spacing={1}>
			<Grid item xs={5}>
				<ChartTitle>예측 시점</ChartTitle>
			</Grid>
			<Grid item xs={7}>
				<ChartTitle>2023-12-18 09:00:00 (KST)</ChartTitle>
			</Grid>
			<Grid item container spacing={2} alignItems="center">
				<Grid item xs={5} md={6}>
					<Doughnut data={data} plugins={[plugin] as any} />
				</Grid>
				<Grid item xs={7} md={6} marginTop={3}>
					<Grid container direction="column" spacing={3}>
						<Grid item container display="flex" justifyContent="space-between">
							<Grid item>
								<ChartLabel>Long 확률</ChartLabel>
							</Grid>
							<Grid item>
								<ChartUpParentage>
									<ArrowDropUpIcon />
									26.27%
								</ChartUpParentage>
							</Grid>
						</Grid>

						<Grid item container display="flex" justifyContent="space-between">
							<Grid item>
								<ChartLabel>Short 확률</ChartLabel>
							</Grid>
							<Grid item>
								<ChartUpParentage>
									<ArrowDropUpIcon />
									26.27%
								</ChartUpParentage>
							</Grid>
						</Grid>

						<Grid item container display="flex" justifyContent="space-between">
							<Grid item>
								<ChartLabel>Hold 확률</ChartLabel>
							</Grid>
							<Grid item>
								<ChartUpParentage>
									<ArrowDropUpIcon />
									26.27%
								</ChartUpParentage>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Chart;

const ChartTitle = styled(Typography)({
	color: "#a5adcf",
	fontSize: "14px",
	textAlign: "center",
});

const ChartLabel = styled(Typography)({
	color: "#a5adcf",
	fontSize: "14px",
});

const ChartUpParentage = styled(Typography)({
	color: "#11CABE",
	fontSize: "14px",
	display: "flex",
	alignItems: "center",
});

// const ChartDownParentage = styled(Typography)({
// 	color: "#11CABE",
// 	fontSize: "14px",
// 	display: "flex",
// 	alignItems: "center",
// });
