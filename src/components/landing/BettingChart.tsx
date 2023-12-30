import React, { useState, ChangeEvent } from "react";
import {
	Box,
	TextField,
	MenuItem,
	Select,
	FormControl,
	Button,
	Paper,
	Grid,
	InputAdornment,
	SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const CryptoContainer = styled(Box)({
	backgroundColor: "#1E1F25",
	color: "#FFFFFF",
	padding: "32px",
	borderRadius: 10,
	display: "flex",
	flexDirection: "column",
	height: "auto",
	margin: "0 auto",
});

const Header = styled(Box)({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "24px",
	fontSize: "1.5rem",
});

const commonInputStyles = {
	borderRadius: "50px",
};

const CustomTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderBottom: "1px solid white", // White bottom border
		"&:hover": {
			borderBottom: "2px solid white", // White border on hover
		},
		"&.Mui-focused": {
			borderBottom: "2px solid white", // White border when focused
		},
		color: "white", // White text
	},
	"& .MuiInputBase-input": {
		color: "white", // Set input text color to white
	},
	"& .MuiInputAdornment-root": {
		color: "white", // White color for the 'APB' text
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none", // Remove border
	},
});

const CustomSelect = styled(Select)({
	"& .MuiOutlinedInput-root": {
		...commonInputStyles,
	},
	"& .MuiSelect-select": {
		height: "10%",
	},
	"& .MuiPaper-root": {
		borderRadius: "25px",
	},
});

const CustomFormControl = styled(FormControl)({
	"& .MuiOutlinedInput-root": {
		backgroundColor: "#34384C", // Background color
		color: "white", // Font color
		height: "50px",
		borderRadius: "50px",
		"& fieldset": {
			borderColor: "#34384C", // Set border color to match background
		},
		"&:hover fieldset": {
			borderColor: "#2F3241", // Outline color on hover
		},
		"&.Mui-focused fieldset": {
			borderColor: "#34384C", // Remove border when focused
		},
	},
});

const CustomButton = styled(Button)({
	...commonInputStyles,
	backgroundColor: "transparent",
	color: "#11CABE",
	border: "1px solid #11CABE",
	height: "50px",
	"&:hover": {
		backgroundColor: "rgba(17, 202, 190, 0.1)",
	},
});

export const BettingChart = () => {
	const [betAmount, setBetAmount] = useState("");
	const [predictionTime, setPredictionTime] = useState("1");
	const [predictionOutcome, setPredictionOutcome] = useState("bull");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setBetAmount(event.target.value as string);
	};

	const handleSelectChange =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(event: SelectChangeEvent<string>) => {
			setter(event.target.value as string);
		};

	return (
		<CryptoContainer component={Paper}>
			<Grid container direction="column" spacing={2}>
				<Grid item>
					<Header>
						<div>Bitcoin</div>
						<CurrencyBitcoinIcon
							style={{ fontSize: "2rem", color: "orange" }}
						/>
					</Header>
				</Grid>

				<Grid item>
					<Box mb={1}>
						<div style={{ color: "#5D6588" }}>Bet Amount</div>
					</Box>
					<CustomTextField
						label=""
						value={betAmount}
						onChange={handleInputChange}
						fullWidth
						margin="dense"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<span>APB</span>
								</InputAdornment>
							),
						}}
					/>
				</Grid>

				<Grid item>
					<Box mb={1}>
						<div style={{ color: "#5D6588" }}>Prediction</div>
					</Box>
					<CustomFormControl fullWidth variant="outlined" margin="dense">
						<CustomSelect
							labelId="prediction-time-label"
							id="prediction-time"
							value={predictionTime}
							onChange={handleSelectChange(setPredictionTime)}
							label="Prediction"
						>
							<MenuItem value="1">Next 1 Hour</MenuItem>
							<MenuItem value="4">Next 4 Hours</MenuItem>
						</CustomSelect>
					</CustomFormControl>
				</Grid>

				<Grid item>
					<CustomFormControl fullWidth variant="outlined" margin="dense">
						<CustomSelect
							labelId="prediction-outcome-label"
							id="prediction-outcome"
							value={predictionOutcome}
							onChange={handleSelectChange(setPredictionOutcome)}
							label="Prediction"
						>
							<MenuItem value="bull">Bull</MenuItem>
							<MenuItem value="bear">Bear</MenuItem>
						</CustomSelect>
					</CustomFormControl>
				</Grid>

				<Grid item>
					<CustomButton variant="outlined" size="large" fullWidth>
						Bet
					</CustomButton>
				</Grid>
			</Grid>
		</CryptoContainer>
	);
};
