import { Provider } from "react-redux";
import { store } from "../store/store";
import { styled } from "@mui/material/styles";
import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "../components/ui-components/Navbar";
import "../assets/styles/style.css";
function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<CssBaseline />
			<FullHeightGrid container direction="column">
				<Navbar />
				<Container style={{ maxWidth: 1700 }}>
					<Component {...pageProps} />
				</Container>
			</FullHeightGrid>
		</Provider>
	);
}
export default App;

const FullHeightGrid = styled(Grid)({
	backgroundColor: "#141518",
});
