import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TableList from "./TableList";
import styled from "@emotion/styled";
import BreakingNews from "./BreakingNews";
import ChartAnalyst from "./ChartAnalyst";

const LLMInterpretationIndicators = () => {
	const tableData = {
		labelOne: "Name",
		labelTwo: "Action",
		data: [
			{ title: "RSI", value: "Neutral" },
			{ title: "STOCH", value: "Neutral" },
			{ title: "STOCHRSI", value: "Short" },
			{ title: "MACD", value: "Short" },
			{ title: "ADX", value: "Long" },
			{ title: "Williams &R", value: "Neutral" },
			{ title: "CCI", value: "Neutral" },
			{ title: "ATR", value: "Neutral" },
			{ title: "Highs/Lows", value: "Long" },
			{ title: "Ultimate Oscillator", value: "Long" },
			{ title: "ROC", value: "Long" },
		],
	};
	return (
		<Box>
			<Typography></Typography>
			<Grid rowSpacing={2}>
				<SectionContainer>
					<TableList
						data={tableData.data}
						labelOne={tableData.labelOne}
						labelTwo={tableData.labelTwo}
					/>
					<BreakingNews />
					<ChartAnalyst />
				</SectionContainer>
			</Grid>
		</Box>
	);
};

export default LLMInterpretationIndicators;

const SectionContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "16px",
});
