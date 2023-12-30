import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageSrc from "../../assets/image.png";

const FearGreed = () => {
  return (
    <CardWrapper>
      <StyleTitle>시계열 예측 지표</StyleTitle>
      <StyleDescription>
        다음은 비트코인의 종가를 예측하기 위해 사용한 다양한 시계열 예측
        모델들의 결과입니다. 미래 6개의 타임스텝을 예측합니다
      </StyleDescription>
      <Box display="flex" justifyContent={"center"}>
        <Image src={imageSrc} alt="image" />
      </Box>
      <Box borderBottom={"1px solid #5D6588"} margin={"30px 0"}>
        <StyleDataHead container spacing={2}>
          <Grid item xs={4} md={4}>
            Date
          </Grid>
          <Grid item xs={4} md={4}>
            Value
          </Grid>
          <Grid item xs={4} md={4}>
            Classification
          </Grid>
        </StyleDataHead>
      </Box>
      <Grid container spacing={3}>
        <Grid item container spacing={2}>
          <Grid item xs={4} md={4}>
            2023-12-18
          </Grid>
          <Grid item xs={4} md={4} color={"#5D6588"}>
            65
          </Grid>
          <Grid item xs={4} md={4}>
            GREED
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default FearGreed;

const StyleTitle = styled(Typography)({
  color: "#fff",
  fontSize: "20px",
});

const StyleDescription = styled(Typography)({
  color: "#5D6588",
  margin: "15px 0",
});

const StyleDataHead = styled(Grid)({
  color: "#5D6588",
});
