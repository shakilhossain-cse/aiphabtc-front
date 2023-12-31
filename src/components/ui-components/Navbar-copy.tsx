import React from "react";
import { Grid, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

export const Navbar = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

	const menuItems = [
		{
			label: "Dashboard",
			uri: "/",
		},
		{
			label: "Community",
			uri: "/",
		},
		{
			label: "Rewards",
			uri: "/",
		},
		{
			label: "AI Bot",
			uri: "/ai-bot",
		},
		{
			label: "Whitepapers",
			uri: "/",
		},
		{
			label: "About Us",
			uri: "/",
		},
	];

	return (
		<Grid container alignItems="center" justifyContent="center">
			<Logo item xs={11} lg={1} xl={1} sx={{ p: 3 }}>
				AIPHABTC
			</Logo>
			{!isSmallScreen && (
				<>
					<Grid item xs={6} lg={6} xl={5} sx={{ p: 3 }}>
						<Grid container justifyContent="space-between">
							{menuItems.map((item, index) => (
								<Link
									href={item.uri}
									key={index}
									style={{ textDecoration: "none" }}
								>
									<LinkGridItem item xs>
										{item.label}
									</LinkGridItem>
								</Link>
							))}
						</Grid>
					</Grid>

					<Grid item xs={2} lg={3} xl={2} sx={{ p: 3 }}>
						<SearchBar />
					</Grid>

					<Account item xs={3} lg={2} xl={1} sx={{ p: 3 }}>
						Sign in
					</Account>
				</>
			)}
		</Grid>
	);
};

const Logo = styled(Grid)({
	fontWeight: 700,
	color: "#FFFFFF",
	fontSize: 20,
});

const LinkGridItem = styled(Grid)({
	height: "100%",
	color: "#5D6588",
	textAlign: "center",
	fontSize: 20,
});

const RoundedSearchTextField = styled(TextField)({
	"& .MuiInputBase-root": {
		borderRadius: "1.875em",
		backgroundColor: "#2F3241",
		color: "#5D6588",
		"& .MuiSvgIcon-root": {
			color: "#FFFFFF",
		},
		"& .MuiInputBase-input": {
			padding: "0.625em",
			marginLeft: "1em",
			color: "#FFFFFF",
		},
	},
	"& .MuiInputAdornment-positionEnd": {
		marginRight: "0.5em",
	},
});

const Account = styled(Grid)({
	color: "#5D6588",
	textAlign: "center",
	fontSize: 20,
});

export default Navbar;
