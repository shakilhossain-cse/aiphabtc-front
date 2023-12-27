import React from "react";
import { styled, Grid } from "@mui/material";
import { Indicator } from "./Indicator";
import { PriceChart } from "./PriceChart";
import { ChatRoom } from "./ChatRoom";
import { BettingChart } from "./BettingChart";
import { PredictionChart } from "./PredictionChart";
import { MyBetChart } from "./MyBetChart";

export const Landing = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} container spacing={2}>
        <Grid item xs={12}>
          <Indicator />
        </Grid>
        <Grid item xs={12}>
          <PriceChart />
        </Grid>
        <Grid item xs={12}>
          <ChatRoom />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} container spacing={2}>
        <Grid item xs={12}>
          <BettingChart />
        </Grid>
        <Grid item xs={12}>
          <PredictionChart />
        </Grid>
        <Grid item xs={12}>
          <MyBetChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;

{
  /* <FullHeightGrid container spacing={2}> */
}

{
  /* <FullHeightItem item xs={8}>
  <Grid container direction="column">
    <Grid item>
      <Indicator />
    </Grid>
    <Grid item>
      <PriceChart />
    </Grid>
    <Grid item>
      <ChatRoom />
    </Grid>
  </Grid>
</FullHeightItem>

<Grid item  xs={4}>
  <Grid container direction="column"  spacing={2}>
    <Grid item>
      <BettingChart />
    </Grid>
    <Grid item>
      <PredictionChart />
    </Grid>
    <Grid item >
      <MyBetChart />
    </Grid>
  </Grid>
</Grid>
</FullHeightGrid> */
}
