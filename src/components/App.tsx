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
	return <Landing />;
};

export default App;
