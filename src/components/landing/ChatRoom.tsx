import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Grid, Container } from "@mui/material";

const getChat = () => {
	return [
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1124",
			Messages: "To the moon",
			Prediction: "Bull",
			Hour: "1hr",
			Timestamp: "Nov.11.23:20",
		},
		{
			User: "User1125",
			Messages: "To the moon 2",
			Prediction: "Bear",
			Hour: "2hr",
			Timestamp: "Nov.11.23:20",
		},
	];
};

export const ChatRoom = () => {
	const [selected, setSelected] = React.useState("All Chats");

	const handleSelection = (option) => {
		setSelected(option);
	};

	const data = getChat();

	return (
		<Box
			bgcolor="#1E1F25"
			color="white"
			p={2}
			style={{
				borderRadius: 10,
			}}
		>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h5">Real-time Chats</Typography>
				</Grid>
				<Grid item>
					<Box display="flex" justifyContent="flex-end" alignItems="center">
						{["All Chats", "1-hr predictions", "4-hr predictions"].map(
							(option) => (
								<Typography
									key={option}
									onClick={() => handleSelection(option)}
									style={{
										padding: "6px 12px",
										borderRadius: "20px",
										backgroundColor: selected === option ? "#333" : "",
										marginLeft: "8px",
										cursor: "pointer",
										color: selected === option ? "#FFFFFF" : "#5D6588",
									}}
								>
									{option}
								</Typography>
							),
						)}
					</Box>
				</Grid>
			</Grid>
			<Box borderBottom="1px solid gray" py={1} mt={2}>
				<Grid container>
					<Grid item xs={3}>
						<Typography style={{ color: "#5D6588" }}>User</Typography>
					</Grid>
					<Grid item xs={5}>
						<Typography style={{ color: "#5D6588" }}>Messages</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography style={{ color: "#5D6588" }}>Prediction</Typography>
					</Grid>
					<Grid item xs={1}>
						<Typography style={{ color: "#5D6588" }}>Hour</Typography>
					</Grid>
					<Grid item xs={1}>
						<Typography style={{ color: "#5D6588" }}>Timestamp</Typography>
					</Grid>
				</Grid>
			</Box>
			{data.map((chat, index) => (
				<Box key={index} py={1}>
					<Grid container>
						<Grid item xs={3}>
							<Typography>{chat.User}</Typography>
						</Grid>
						<Grid item xs={5}>
							<Typography>{chat.Messages}</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{chat.Prediction}</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography>{chat.Hour}</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography>{chat.Timestamp}</Typography>
						</Grid>
					</Grid>
				</Box>
			))}
		</Box>
	);
};
