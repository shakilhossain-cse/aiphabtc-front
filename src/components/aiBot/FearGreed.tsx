import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
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
      <Box display="flex" justifyContent={'center'}>
        <Image src={imageSrc} alt="image" />
      </Box>
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
