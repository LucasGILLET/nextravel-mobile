import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";
import { FontAwesome } from "@expo/vector-icons";

export default Profile = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.openDrawer();
			}}
			style={styles.container}
		>
			<Text style={styles.text}>
				<FontAwesome name="user" size={30} color="black" />
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightblue,
		borderRadius: 100,
		width: 50,
		height: 50,
		position: "absolute",
		left: "90%",
		top: "6%",
	},
	text: {
		color: colors.light,
		fontSize: 30,
		fontWeight: "bold",

		textAlign: "center",
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		alignContent: "center",
		position: "relative",
		top: 8,
		flex: 1,
	},
});
