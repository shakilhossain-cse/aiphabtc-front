import React from "react";
import CardWrapper from "../ui-components/CardWrapper";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BreakingNews = () => {
  return (
    <CardWrapper>
      <Box borderBottom={"1px solid #5D6588"} marginBottom={'30px'}>
        <GridHead container spacing={2}>
          <Grid item xs={6} md={8}>
            뉴스
          </Grid>
          <Grid item xs={6} md={4}>
            시간
          </Grid>
        </GridHead>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={9} md={9}>
          <Typography>
            슬로우미스트 “ 지난주 암호화폐 보안 사고 피해액 $842만 규모
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography>2023-12-18 21:28</Typography>
        </Grid>
        <Grid item xs={9} md={9}>
          <Typography>
            슬로우미스트 “ 지난주 암호화폐 보안 사고 피해액 $842만 규모
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography>2023-12-18 21:28</Typography>
        </Grid>
        <Grid item xs={9} md={9}>
          <Typography>
            슬로우미스트 “ 지난주 암호화폐 보안 사고 피해액 $842만 규모
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography>2023-12-18 21:28</Typography>
        </Grid>
        <Grid item xs={9} md={9}>
          <Typography>
            슬로우미스트 “ 지난주 암호화폐 보안 사고 피해액 $842만 규모
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography>2023-12-18 21:28</Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default BreakingNews;

const GridHead = styled(Grid)({
  color: "#5D6588",
  fontSize: "14px",
  paddingBottom: "10px",
});
