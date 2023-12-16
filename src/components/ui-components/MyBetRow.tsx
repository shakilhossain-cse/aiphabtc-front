import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Trophy icon
import PendingIcon from "@mui/icons-material/Pending"; // Pending icon
import CloseIcon from "@mui/icons-material/Close"; // X icon
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface MyBetChartRowProps {
  coin: string;
  time: string;
  trend: string;
  amount: number;
  result: string;
  date: string;
}

export const MyBetRow = (props: MyBetChartRowProps) => {
  const { coin, time, trend, amount, result, date } = props;

  // Function to calculate time elapsed, improved for accuracy
  const getTimeElapsed = (dateString: string) => {
    const dateObject = new Date(dateString);
    const now = new Date();
    const diffMilliseconds = now.getTime() - dateObject.getTime();
    const diffHours = diffMilliseconds / (1000 * 60 * 60);
    return `${Math.max(0, Math.round(diffHours))} hours ago`; // Round and ensure non-negative
  };

  // Function to select the appropriate result icon
  const getResultIcon = (result) => {
    switch (result.toLowerCase()) {
      case "win":
        return <EmojiEventsIcon />;
      case "pending":
        return <PendingIcon />;
      case "lose":
        return <CloseIcon />;
      default:
        return null;
    }
  };

  return (
    <Box py={1}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2} container alignItems="center">
          {coin === "BTC" ? (
            <CurrencyBitcoinIcon sx={{ color: "orange" }} />
          ) : (
            <AttachMoneyIcon sx={{ color: "orange" }} />
          )}
          <Typography>{coin}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{time}-hour</Typography>
        </Grid>
        <Grid item xs={1}>
          {trend === "Bull" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </Grid>
        <Grid item xs={2}>
          <Typography>{amount} APB</Typography>
        </Grid>
        <Grid item xs={1.5}>
          {getResultIcon(result)}
        </Grid>
        <Grid item xs={3.5}>
          <Typography>{date}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
