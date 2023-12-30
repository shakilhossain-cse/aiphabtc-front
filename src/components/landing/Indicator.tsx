import React, { useState } from "react";
import {
	Box,
	Grid,
	Select,
	MenuItem,
	Typography,
	Container,
	SelectChangeEvent,
} from "@mui/material";
import { IndicatorBox } from "../ui-components/IndicatorBox";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const data = [
	{
		Coin: "BTC/USD",
		Change: "+0.53%",
		"Last Price": "18282.2 USD",
		Low: "12312 USD",
	},
	{
		Coin: "ETH/USD",
		Change: "-0.51%",
		"Last Price": "18282.2 USD",
		Low: "21 USD",
	},
];

export const Indicator = () => {
	const [selectedCoin, setSelectedCoin] = useState(data[0].Coin);

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedCoin(event.target.value as string);
	};

	const selectedData = data.find((coinData) => coinData.Coin === selectedCoin);

	return (
		<Box color="white">
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<IndicatorBox label="Coin" value={selectedCoin}>
					<Grid container>
						<Grid
							item
							xs={4}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<CurrencyBitcoinIcon
								style={{ marginRight: 4, color: "orange" }}
							/>
						</Grid>
						<Grid item xs={8}>
							<Select
								value={selectedCoin}
								onChange={handleChange}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
								sx={{
									width: { xs: "90%" },
									color: "white",
									borderColor: "#11CABE",
									borderWidth: 2,
									borderStyle: "solid",
									borderRadius: "10px",
									marginBottom: "8px",
									"& .MuiSelect-select": {
										paddingY: "10px", // Adjust vertical padding to control the height
										paddingX: "20px", // Adjust horizontal padding
									},
								}}
								fullWidth
							>
								{data.map((coinData) => (
									<MenuItem key={coinData.Coin} value={coinData.Coin}>
										{coinData.Coin}
									</MenuItem>
								))}
							</Select>
						</Grid>
					</Grid>
				</IndicatorBox>

				{selectedData &&
					Object.entries(selectedData)
						.filter(([key]) => key !== "Coin")
						.map(([label, value]) => (
							<IndicatorBox key={label} label={label} value={String(value)} />
						))}
			</Grid>
		</Box>
	);
};

export default Indicator;
