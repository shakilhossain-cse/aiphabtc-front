import React from "react";
import { styled } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { Navbar } from "./ui-components/Navbar";
import { Landing } from "./landing";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/features/counter/counterSlice";

// Styled component that applies global styles

export const App = () => {
  return (
    <div>
      <Navbar />
      <Container style={{ maxWidth: 1700 }}>
        <Landing />
      </Container>
    </div>
  );
};


export default App;
