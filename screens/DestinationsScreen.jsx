import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";

export default Destinations = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.destinations}>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Dublin</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Barcelone</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Lisbonne</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Home")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Montréal</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Toronto</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>Singapour</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.destination} onPress={() => navigation.navigate("Login")}>
					<View style={styles.destination.image}></View>
					<Text style={styles.destination.text}>San Francisco</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={styles.title}>VEUILLEZ CHOISIR VOTRE LXP</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.green,
		paddingVertical: 50,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
		color: colors.light,
	},
	destinations: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		margin: 50,
		gap: 40,
		justifyContent: "space-between",
	},
	destination: {
		backgroundColor: colors.light,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		width: 100,
		text: {
			fontSize: 15,
			textAlign: "center",
			fontWeight: "bold",
			paddingHorizontal: 5,
		},
		image: {
			backgroundColor: "#437503",
			width: 100,
			height: 100,
			borderTopLeftRadius: 10,
			borderTopRightRadius: 10,
		},
	},
	button: {
		justifyContent: "center",
		textAlign: "center",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#FFF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		text: {
			fontSize: 20,
			fontWeight: "bold",
		},
	},
});
