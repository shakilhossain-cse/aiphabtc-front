import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardWrapper from "../ui-components/CardWrapper";

interface IProps {
	data: {
		description?: string;
		title: string;
		data: {
			title: string;
			progress?: number;
			votes?: {
				vote: string;
				apb: string;
			};
		}[];
	};
}

const BuySellProgressBar = (props: IProps) => {
	const { title, data, description } = props.data;
	return (
		<CardWrapper>
			<Box>
				<StyleTitle>{title}</StyleTitle>
				{description && <StyleDescription>{description}</StyleDescription>}

				{data.map((item, index) => (
					<StyledContainer key={index}>
						<Box
							display={"flex"}
							justifyContent={item.votes ? "space-between" : null}
						>
							<StyleLabel>{item.title}</StyleLabel>
							{item.progress && (
								<StyleLabelParentage>{item.progress}%</StyleLabelParentage>
							)}
							{item.votes && (
								<Box>
									<Typography color="#fff">{item.votes.vote}</Typography>
									<StyleLabelParentage>{item.votes.apb}</StyleLabelParentage>
								</Box>
							)}
						</Box>
						<StyledProgress variant="determinate" value={item.progress} />
					</StyledContainer>
				))}
			</Box>
		</CardWrapper>
	);
};

export default BuySellProgressBar;

const StyleTitle = styled(Typography)({
	color: "#fff",
	fontSize: "20px",
});

const StyleDescription = styled(Typography)({
	color: "#5D6588",
	margin: "15px 0",
});

const StyledContainer = styled(Box)({
	border: "1px solid #5D6588",
	backgroundColor: "initial ",
	borderRadius: 10,
	padding: "10px 26px",
	margin: "8px 0",
	justifyContent: "space-between",
	alignItems: "center",
});

const StyleLabel = styled(Typography)({
	color: "#FFFFFF",
	fontSize: "1rem",
});

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
	flexGrow: 1,
	height: 10,
	borderRadius: 5,
	backgroundColor: "#2A2C34",
	margin: "10px 0",
	"& .MuiLinearProgress-bar": {
		borderRadius: 5,
		backgroundColor: "#4CAF50", // Change for Bullish/Bearish
	},
}));

const StyleLabelParentage = styled(Typography)({
	color: "#11CABE",
	marginLeft: "10px",
});
