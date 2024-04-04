import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../assets/css/colors";
import Profile from "../components/Profile";

export default Informations = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Informations</Text>

			<Profile navigation={navigation} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.green,
		paddingVertical: 50,
		paddingHorizontal: 20,
		flexDirection: "column",
		gap: 50,
	},
	title: {
		textAlign: "center",
		fontSize: 40,
		fontWeight: "bold",
		color: colors.light,
	},
	collocation: {
		backgroundColor: "#437953",
		padding: 20,
		borderRadius: 10,
		title: {
			color: colors.light,
			fontSize: 25,
			fontWeight: 600,
		},
		paragraphe: {
			color: colors.light,
		},
		button: {
			position: "relative",
			left: "70%",
			padding: 10,
			backgroundColor: colors.realBlue,
			borderRadius: 10,
			width: 91,

			text: {
				color: colors.dark,
			},
		},
	},
	conseils: {
		backgroundColor: colors.realBlue,
		padding: 20,
		borderRadius: 10,
		paddingBottom: 100,
		text: {
			color: colors.light,
			fontSize: 20,
			fontWeight: "bold",
			textAlign: "center",
		},
	},
});
