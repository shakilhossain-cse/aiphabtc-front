import { Grid } from "@mui/material";
import React from "react";
import TradingBotIndicators from "../../components/aiBot/TradingBotIndicators";
import TimeSeriesForecastingIndicators from "../../components/aiBot/TimeSeriesForecastingIndicators";
import LLMInterpretationIndicators from "../../components/aiBot/LLMInterpretationIndicators";

const Playground = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TradingBotIndicators />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TimeSeriesForecastingIndicators />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LLMInterpretationIndicators />
      </Grid>
    </Grid>
  );
};

export default Playground;
