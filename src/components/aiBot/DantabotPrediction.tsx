import React from 'react'
import CardWrapper from '../ui-components/CardWrapper'
import styled from '@emotion/styled'
import { Box, MenuItem, Select, Typography } from '@mui/material'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Chart from './Chart';

const DantabotPrediction = () => {
  return (
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
  )
}

export default DantabotPrediction



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
  