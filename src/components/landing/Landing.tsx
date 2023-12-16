import React from "react";
import { styled, Grid } from "@mui/material";
import { Indicator } from "./Indicator";
import { PriceChart } from "./PriceChart";
import { ChatRoom } from "./ChatRoom";
import { BettingChart } from "./BettingChart";
import { PredictionChart } from "./PredictionChart";
import { MyBetChart } from "./MyBetChart";

const FullHeightGrid = styled(Grid)({
  height: "100vh",
  width: "100%",
});

const FullHeightItem = styled(Grid)(({ theme }) => ({
  height: "100%",
  minHeight: "1000px", // Example minimum height
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

export const Landing = () => {
  return (
    <FullHeightGrid container spacing={2}>
      {/* Left */}
      <FullHeightItem item xs={12} lg={9}>
        <Grid container direction="column" style={{ height: "105%" }}>
          <Grid item style={{ height: "20%" }}>
            <Indicator />
          </Grid>
          <Grid item style={{ height: "50%" }}>
            <PriceChart />
          </Grid>
          <Grid item style={{ height: "30%" }}>
            <ChatRoom />
          </Grid>
        </Grid>
      </FullHeightItem>

      {/* Right */}
      <FullHeightItem item xs={12} lg={3}>
        <Grid container direction="column" style={{ height: "150%" }}>
          <Grid item style={{ height: "22%" }}>
            <BettingChart />
          </Grid>
          <Grid item style={{ height: "25%" }}>
            <PredictionChart />
          </Grid>
          <Grid item style={{ height: "30%" }}>
            <MyBetChart />
          </Grid>
        </Grid>
      </FullHeightItem>
    </FullHeightGrid>
  );
};

export default Landing;
