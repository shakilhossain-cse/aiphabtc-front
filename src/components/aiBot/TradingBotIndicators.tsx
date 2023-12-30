import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AiphaBot from "./AiphaBot";
import DantabotPrediction from "./DantabotPrediction";
import TableList from "./TableList";

const TradingBotIndicators = () => {
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
        <AiphaBot />
        <DantabotPrediction />
        <TableList
          data={tableData.data}
          labelOne={tableData.labelOne}
          labelTwo={tableData.labelTwo}
        />
      </Grid>
    </Box>
  );
};

export default TradingBotIndicators;
