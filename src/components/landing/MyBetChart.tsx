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
import { MyBetRow } from "../ui-components/MyBetRow";

const PredictionContainer = styled(Box)({
  backgroundColor: "#1E1F25",
  color: "#FFFFFF",
  padding: "32px",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  width: "80%",
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
  data: [
    {
      coin: "BTC",
      time: "1",
      trend: "bull",
      amount: 100,
      result: "win",
      date: "2022-11-02 14:04",
    },
    {
      coin: "ETH",
      time: "4",
      trend: "bear",
      amount: 200,
      result: "win",
      date: "2022-11-02 14:04",
    },
    {
      coin: "BTC",
      time: "1",
      trend: "bear",
      nameid: "bitcoin",
      amount: 300,
      result: "win",
      date: "2022-11-02 14:04",
    },
    {
      coin: "ETH",
      time: "1",
      trend: "bear",
      amount: 100,
      result: "win",
      date: "2022-11-02 14:04",
    },
    {
      coin: "BTC",
      time: "4",
      trend: "bull",
      amount: 120,
      result: "pending",
      date: "2022-11-02 14:04",
    },
    {
      coin: "BTC",
      time: "1",
      trend: "bull",
      nameid: "bitcoin",
      amount: 100,
      result: "lose",
      date: "2022-11-02 14:04",
    },
    {
      coin: "BTC",
      time: "4",
      trend: "bullish",
      amount: 100,
      result: "win",
      date: "2022-11-02 14:04",
    },
    {
      coin: "BTC",
      time: "1",
      trend: "bull",
      amount: 100,
      result: "lose",
      date: "2022-11-02 14:04",
    },
  ],
};

export const MyBetChart = () => {
  const data = mockData.data;

  return (
    <PredictionContainer>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Header>
            <div>My Bets</div>
          </Header>
        </Grid>

        {data.map((item, index) => (
          <Grid key={index} item>
            <MyBetRow
              coin={item.coin}
              time={item.time}
              trend={item.trend}
              amount={item.amount}
              result={item.result}
              date={item.date}
            />
          </Grid>
        ))}
      </Grid>
    </PredictionContainer>
  );
};
