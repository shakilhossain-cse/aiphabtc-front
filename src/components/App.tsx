import React from "react";
import { styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./ui-components/Navbar";
import { Landing } from "./landing";
import { Grid } from "@mui/material";

// Styled component that applies global styles
const GlobalStyle = styled("div")(({ theme }) => ({
  "&::before": {
    content: '""',
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
}));

export const App = () => {
  return (
    <>
      <CssBaseline /> {/* Normalize the default styles */}
      <GlobalStyle /> {/* Apply global styles */}
      <FullHeightGrid container direction="column">
        {/* Navbar - 10% of the viewport height */}
        <GridItemWithHeight item height={10}>
          <Navbar />
        </GridItemWithHeight>

        {/* Landing - Remaining 90% of the viewport height */}
        <GridItemWithHeight item height={90}>
          <Landing />
        </GridItemWithHeight>
      </FullHeightGrid>
    </>
  );
};

const FullHeightGrid = styled(Grid)({
  height: "180vh",
  width: "100%",
  margin: 0,
  padding: 0,
  backgroundColor: "#141518", // Your desired background color
});

const GridItemWithHeight = styled(Grid)(({ height }) => ({
  height: `${height}%`,
}));

export default App;
