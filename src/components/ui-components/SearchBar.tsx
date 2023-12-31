import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
	return (
		<RoundedSearchTextField
			fullWidth
			placeholder="Search"
			InputProps={{
				endAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
};

const RoundedSearchTextField = styled(TextField)({
	"& .MuiInputBase-root": {
		borderRadius: "10em",
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
