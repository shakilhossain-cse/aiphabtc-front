import { Card, CardContent } from "@mui/material";
import React, { ReactNode } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

interface CardWrapperProps {
	children: ReactNode;
}
ChartJS.register(ArcElement, Tooltip, Legend);

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
	// const data = {
	//   labels: ["Red", "Green", "Yellow"],
	//   datasets: [
	//     {
	//       data: [300, 50, 100],
	//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
	//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
	//     },
	//   ],
	//   text: "Total: 9000+",
	// };

	return (
		<Card
			sx={{
				minWidth: 275,
				backgroundColor: "#1e1f25",
				color: "white",
				borderRadius: 3,
			}}
		>
			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default CardWrapper;
