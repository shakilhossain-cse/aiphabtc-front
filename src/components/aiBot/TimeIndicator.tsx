import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TimeIndicator = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 25, 22, 40, 26, 50],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <CardWrapper>
      <StyleTitle>시계열 예측 지표</StyleTitle>
      <StyleDescription>
        다음은 비트코인의 종가를 예측하기 위해 사용한 다양한 시계열 예측
        모델들의 결과입니다. 미래 6개의 타임스텝을 예측합니다
      </StyleDescription>
      <StyleChart>
        <Line options={options} data={data} />
      </StyleChart>
    </CardWrapper>
  );
};

export default TimeIndicator;

const StyleTitle = styled(Typography)({
  color: "#fff",
  fontSize: "20px",
});

const StyleDescription = styled(Typography)({
  color: "#5D6588",
  margin: "15px 0",
});

const StyleChart = styled(Box)({
  background: "#ffff",
});
