import React from "react";
import { Box, Grid, Typography } from "@mui/material";

interface StatBoxProps {
	label: string;
	value: string;
	children?: React.ReactNode;
}

export const IndicatorBox = ({ label, value, children }: StatBoxProps) => (
	<Grid item xs={12} md={6} lg={3}>
		<Box
			sx={{
				backgroundColor: "#1E1F25",
				borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "center",
				height: "120px",
			}}
		>
			{children || (
				<>
					<Typography
						variant="h6"
						color="#5D6588"
						align="left"
						style={{ padding: "12px" }}
					>
						{label}
					</Typography>
					<Typography
						variant="h5"
						color="white"
						align="left"
						style={{ padding: "12px" }}
					>
						{value}
					</Typography>
				</>
			)}
		</Box>
	</Grid>
);
