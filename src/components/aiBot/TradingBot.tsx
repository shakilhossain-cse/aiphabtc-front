import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import styled from "@emotion/styled";
import Chart from "./Chart";

const TradingBot = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item></Grid>
      <CardWrapper>
        <Header>
          <Typography>AIPHABOT 예측 결과</Typography>
          <InDicator>
            <ArrowDropUpIcon />
            <Typography>Bullish</Typography>
          </InDicator>
        </Header>
        <PredictionBody>
          <Box>
            <SubTitle>진입 가격 (USDT)</SubTitle>
            <Typography>USD 41,385.20</Typography>
          </Box>
          <StyleSelect value={"1 hour"}>
            <MenuItem value={"1 hour"} selected>
              1 hour
            </MenuItem>
          </StyleSelect>
        </PredictionBody>
        <PredictionBody>
          <Box>
            <SubTitle>Long Take Profit (USDT)</SubTitle>
            <Typography>USD 42,626.76</Typography>
          </Box>
          <Box>
            <SubTitle>Short Take Profit (USDT)</SubTitle>
            <Typography>USD 40,143.64</Typography>
          </Box>
        </PredictionBody>
        <Chart />
      </CardWrapper>
      <CardWrapper>
        <Header>
          <Typography>AIPHABOT 예측 결과</Typography>
          <InDicator>
            <ArrowDropUpIcon />
            <Typography>Bullish</Typography>
          </InDicator>
        </Header>
        <PredictionBody>
          <Box>
            <SubTitle>진입 가격 (USDT)</SubTitle>
            <Typography>USD 41,385.20</Typography>
          </Box>
          <StyleSelect value={"1 hour"}>
            <MenuItem value={"1 hour"} selected>
              1 hour
            </MenuItem>
          </StyleSelect>
        </PredictionBody>

        <Chart />
      </CardWrapper>
    </Grid>
  );
};

export default TradingBot;

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const InDicator = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  color: "#11CABE",
});

const PredictionBody = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "15px 0",
});

const SubTitle = styled(Box)({
  fontSize: "14px",
  color: "#5D6588",
});

const StyleSelect = styled(Select)({
  border: "none",
  color: "white",
  "& .MuiSelect-icon": {
    color: "white",
  },
  "&.MuiInput-underline::before": {
    borderBottom: "none", // Hide the border
  },
  "&.MuiInput-underline:hover:not(.Mui-disabled)::before": {
    borderBottom: "none", // Hide the border on hover
  },
  "&.MuiInput-underline.Mui-focused::before": {
    borderBottom: "none", // Hide the focus border
  },
});
