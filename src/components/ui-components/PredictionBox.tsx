import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledVoteContainer = styled(Box)({
  backgroundColor: "#34384C",
  borderRadius: 10,
  padding: 16,
  margin: "8px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledVoteLabel = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "1rem",
});

const StyledVoteProgress = styled(LinearProgress)(({ theme }) => ({
  flexGrow: 1,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#2A2C34",
  margin: "0 16px",
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#4CAF50", // Change for Bullish/Bearish
  },
}));

const StyledVoteCount = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "1rem",
  textAlign: "right",
  minWidth: "100px",
});

interface PredictionBoxProps {
  bullishVotes: number;
  bearishVotes: number;
  bettingPrice: number;
}

export const PredictionBox = (props: PredictionBoxProps) => {
  const { bullishVotes, bearishVotes, bettingPrice } = props;

  const totalVotes = bullishVotes + bearishVotes;
  const bullishPercentage = (bullishVotes / totalVotes) * 100;
  const bearishPercentage = (bearishVotes / totalVotes) * 100;

  return (
    <Box>
      <StyledVoteContainer>
        <StyledVoteLabel>Bullish</StyledVoteLabel>
        <StyledVoteProgress variant="determinate" value={bullishPercentage} />
        <Box>
          <StyledVoteCount>{bullishVotes} Votes</StyledVoteCount>
          <StyledVoteCount>{bettingPrice} APB</StyledVoteCount>
        </Box>
      </StyledVoteContainer>

      <StyledVoteContainer>
        <StyledVoteLabel>Bearish</StyledVoteLabel>
        <StyledVoteProgress
          variant="determinate"
          value={bearishPercentage}
          sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "#9C27B0" } }}
        />
        <Box>
          <StyledVoteCount>{bearishVotes} Votes</StyledVoteCount>
          <StyledVoteCount>{bettingPrice} APB</StyledVoteCount>
        </Box>
      </StyledVoteContainer>
    </Box>
  );
};
