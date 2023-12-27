import { Box, Card, CardContent, Typography } from "@mui/material";
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
const TableList: React.FC<IProps> = ({ data, labelOne, labelTwo }) => {
  return (
    <CardWrapper>
      <TableHead>
        <Typography color={"inherit"}>{labelOne}</Typography>
        <Typography color={"inherit"}>{labelTwo}</Typography>
      </TableHead>
      {data.map((item, index) => (
        <TableItem key={index}>
          <Typography color={"inherit"}>{item.title}</Typography>
          <Typography color={"inherit"}>{item.value}</Typography>
        </TableItem>
      ))}
    </CardWrapper>
  );
};

export default TableList;

const TableHead = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #5D6588",
  color: "#5D6588",
  fontSize: "14px",
  paddingBottom: "10px",
});

const TableItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  color: "#FFFFFF",
  fontSize: "14px",
  margin: "30px 0",
});
