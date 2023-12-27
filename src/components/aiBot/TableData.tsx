import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import CardWrapper from "../ui-components/CardWrapper";

interface IProps {
  labelOne: string;
  labelTwo: string;
  data: {
    title: string;
    value: string;
  }[];
}
const TableData: React.FC<IProps> = ({ data, labelOne, labelTwo }) => {
  return (
    <CardWrapper>
      <TableHead>
        <Typography color={"inherit"}>{labelOne}</Typography>
        <Typography color={"inherit"}>{labelTwo}</Typography>
      </TableHead>
      {data.map((item, index) => (
        <TableItem container spacing={2} key={index}>
          <Grid item xs={8}>
            {item.title}
          </Grid>
          <Grid item xs={4}>
            {item.value}
          </Grid>
        </TableItem>
      ))}
    </CardWrapper>
  );
};

export default TableData;

const TableHead = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #5D6588",
  color: "#5D6588",
  fontSize: "14px",
  paddingBottom: "10px",
});

const TableItem = styled(Grid)({
  color: "#FFFFFF",
  fontSize: "14px",
  margin: "30px 0",
});
