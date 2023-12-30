import React from "react";
import Navbar from "../../components/ui-components/Navbar";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CardWrapper from "../../components/ui-components/CardWrapper";
import ListCard from "../../components/aiBot/ListCard";
import BuySellProgressBar from "../../components/aiBot/BuySellProgressBar";
import TableList from "../../components/aiBot/TableList";
import TableData from "../../components/aiBot/TableData";
import TradingBot from "../../components/aiBot/AiphaBot";
import TimeIndicator from "../../components/aiBot/TimeIndicator";
import BreakingNews from "../../components/aiBot/BreakingNews";
import FearGreed from "../../components/aiBot/FearGreed";
import ChartAnalyst from "../../components/aiBot/ChartAnalyst";

const aiBot = () => {
  const data = {
    title: "Transformer Encoder 모델 예측",
    description: ` 최근 속보들이 비트코인 가격에 얼만큼 호재, 악재, 중립성을 띄고 있는지
    CryptoBert 언어모델이 분석한 결과입니다.`,
    data: [
      { title: "Long 확률", progress: 40 },
      { title: "Long 확률", progress: 70 },
      { title: "Long 확률", progress: 90 },
    ],
  };

  const tableData = {
    labelOne: "정보",
    labelTwo: "수치 ",
    data: [
      { title: "촬성 시장", value: "27,933" },
      { title: "시가 총액 ($)", value: "15525" },
      { title: "총 거래량 ($)", value: "51.68" },
      { title: "ETH 도미넌스 (%)", value: "16.84" },
      { title: "시가 총액 변화 (%)", value: "-3.56" },
      { title: "거래량 변화 (%)", value: "119.53" },
    ],
  };
  return (
    <div>
    
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <TradingBot />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FearGreed/>
            <TimeIndicator />
            <TableData
              data={tableData.data}
              labelOne={tableData.labelOne}
              labelTwo={tableData.labelTwo}
            />
            <BuySellProgressBar data={data} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TableList
              data={tableData.data}
              labelOne={tableData.labelOne}
              labelTwo={tableData.labelTwo}
            />
            <BreakingNews/>
            <ChartAnalyst/>
          </Grid>
        </Grid>
    </div>
  );
};

export default aiBot;
