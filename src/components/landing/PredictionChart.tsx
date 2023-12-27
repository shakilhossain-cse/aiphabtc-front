import React, { useState, ChangeEvent } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Button,
  Paper,
  Grid,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { PredictionBox } from "../ui-components/PredictionBox";

const PredictionContainer = styled(Box)({
  backgroundColor: "#1E1F25",
  color: "#FFFFFF",
  padding: "32px",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  height: "auto",
  margin: "0 auto",
});

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  fontSize: "1.5rem",
});

const mockData = {
  "1hour": {
    bullishVotes: 3020,
    bearishVotes: 2011,
    bettingPrice: 1231,
  },
  "4hour": {
    bullishVotes: 2311,
    bearishVotes: 1000,
    bettingPrice: 2311,
  },
};

export const PredictionChart = () => {
  const predictionData = Object.entries(mockData); // TODO: Make this API

  return (
    <PredictionContainer>
      <Grid container direction="column" spacing={2}>
        {predictionData.map(([key, data]) => (
          <Grid item key={key}>
            <Header>{key.replace("hour", " hour")} Prediction</Header>
            <PredictionBox
              bullishVotes={data.bullishVotes}
              bearishVotes={data.bearishVotes}
              bettingPrice={data.bettingPrice}
            />
          </Grid>
        ))}
      </Grid>
    </PredictionContainer>
  );
};
