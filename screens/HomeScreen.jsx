import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import colors from "../assets/css/colors";
import Profile from "../components/Profile";

export default Home = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Next-Travel</Text>

			<View style={styles.collocation}>
				<Text style={styles.collocation.title}>Votre collocation</Text>
				<Text style={styles.collocation.paragraphe}>
					- destination : Montréal{"\n"}- 4 membres{"\n"}- logement non validé
				</Text>
				<TouchableOpacity
					style={styles.collocation.button}
					onPress={() => {
						navigation.navigate("Chat");
					}}
				>
					<Text style={styles.collocation.button.text}>Voir le chat</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.conseils}>
				<Text style={styles.conseils.text}>Conseils concernant votre voyage : Montréal</Text>
			</View>
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
