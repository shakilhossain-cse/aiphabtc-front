import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { PriceChart } from "./PriceChart";

const ChartAnalyst = () => {
  return (
    <CardWrapper>
      <Typography>GPT-4 차트 애널리스트</Typography>
      <Box margin={'15px 0'}>
      <PriceChart />
      </Box>
      <CustomButton variant="outlined" size="large" fullWidth>
        터는 1시간봉
      </CustomButton>
      <Box marginTop={4}>
        <Typography>
          이 비트코인 데이터는 1시간봉 차트를 기반으로 한 것으로 보입니다.
          여기에는 여러 기술적 지표들이 포함되어 있습니다. - SMA_50:
          50시간동안의 평균 가격을 나타냅니다. 현재 가격이 이 값보다 낮다면 하락
          추세를, 높다면 상승 추세를 의미할 수 있습니다. 이 데이터에서는
          SMA_50이 감소하고 있고 현재 가격이 이보다 낮아 하락 추세를 보이고
          있습니다. - EMA_50: SMA_50과 비슷하지만 최근 가격에 더 많은 가중치를
          두어 계산한 값입니다. 이 값도 SMA_50과 마찬가지로 감소하고 있습니다. -
          RSI: 상대강도지수로, 과매수와 과매도 상황을 판단하는데 사용됩니다.
          일반적으로 RSI가 70 이상이면 과매수, 30 이하면 과매도 상태를
          나타냅니다. 이 데이터에서는 RSI가 점차 증가하고 있지만 아직은 과매도
          상태에 가까운 것으로 보입니다. - Bollinger Bands: 볼린저 밴드는 가격의
          변동성을 나타내는 지표로, 상단 밴드와 하단 밴드 사이에 가격이 움직이는
          것이 일반적입니다. 현재 가격이 하단 밴드에 가까우므로 약세를 보이고
          있습니다. - MACD: 이동평균수렴확산으로, 장기적인 추세를 나타냅니다.
          MACD가 Signal보다 낮으면 약세를, 높으면 강세를 나타냅니다. 이
          데이터에서는 MACD가 Signal보다 낮아 약세를 보이고 있습니다. - %K, %D:
          스토캐스틱 지표로, 과매수와 과매도 상황을 판단하는데 사용됩니다. %K가
          %D를 상향 돌파하면 매수 신호, 하향 돌파하면 매도 신호로 볼 수
          있습니다. 이 데이터에서는 %K와 %D가 점차 상승하고 있지만 아직은 매도
          신호에 가까운 것으로 보입니다. 총평을 내보면, 비트코인은 현재 약세를
          보이고 있으며, 과매도 상태에 가까운 것으로 보입니다. 그러나 RSI와
          스토캐스틱 지표가 점차 상승하고 있어 반등 가능성도 염두에 두어야 할
          것으로 보입니다. 하지만 여전히 MACD는 약세를 나타내고 있으므로,
          추가적인 하락 가능성을 배제할 수 없습니다.
        </Typography>
      </Box>
    </CardWrapper>
  );
};

const CustomButton = styled(Button)({
  borderRadius: "50px",
  backgroundColor: "transparent",
  color: "#11CABE",
  border: "1px solid #11CABE",
  height: "50px",
  "&:hover": {
    backgroundColor: "rgba(17, 202, 190, 0.1)",
  },
});

export default ChartAnalyst;
