import { Provider } from "react-redux";
import { store } from "../store/store";
import { styled } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <FullHeightGrid container direction="column">
      <Component {...pageProps} />
      </FullHeightGrid>
    </Provider>
  );
}
export default App;


const FullHeightGrid = styled(Grid)({ 
  backgroundColor: "#141518",
});
