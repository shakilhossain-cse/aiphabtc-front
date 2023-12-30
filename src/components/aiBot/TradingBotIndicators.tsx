import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AiphaBot from "./AiphaBot";
import DantabotPrediction from "./DantabotPrediction";
import TableList from "./TableList";
import styled from "@emotion/styled";
import BuySellProgressBar from "./BuySellProgressBar";

const TradingBotIndicators = () => {
	const data = {
		title: "Transformer Encoder 모델 예측",
		description: ` 최근 속보들이 비트코인 가격에 얼만큼 호재, 악재, 중립성을 띄고 있는지
    CryptoBert 언어모델이 분석한 결과입니다.`,
		data: [
			{ title: "Long 확률", progress: 40 },
			{ title: "Long 확률", progress: 70 },
			{ title: "Long 확률", progress: 90 },
		],
	};

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
					<AiphaBot />
					<DantabotPrediction />
					<TableList
						data={tableData.data}
						labelOne={tableData.labelOne}
						labelTwo={tableData.labelTwo}
					/>
					<BuySellProgressBar data={data} />
				</SectionContainer>
			</Grid>
		</Box>
	);
};

export default TradingBotIndicators;

const SectionContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "16px",
});
