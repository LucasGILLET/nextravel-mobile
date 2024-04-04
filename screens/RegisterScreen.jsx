import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";

export default Register = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.box.title}>Créer un compte</Text>
				<View style={styles.inputs}>
					<TextInput
						placeholder="EMAIL"
						placeholderTextColor="#FFF"
						inputMode="email"
						keyboardType="email-address"
						style={styles.input}
					/>
					<TextInput
						placeholder="MOT DE PASSE"
						placeholderTextColor="#FFF"
						secureTextEntry={true}
						style={styles.input}
					/>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
					<Text style={styles.button.text}>Envoyer</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.green,
		alignItems: "center",
		justifyContent: "center",
	},
	box: {
		backgroundColor: colors.light,
		color: colors.dark,
		borderRadius: 20,
		padding: 20,
		title: {
			justifyContent: "center",
			fontSize: 35,
			alignItems: "center",
			alignItems: "center",
			justifyContent: "center",
			marginLeft: "auto",
			marginRight: "auto",
			fontWeight: "bold",
		},
	},
	inputs: {
		marginVertical: 20,
		marginLeft: "auto",
		marginRight: "auto",
	},
	input: {
		color: "#FFFFFF",
		backgroundColor: colors.dark,
		padding: 6,
		marginVertical: 8,
		borderRadius: 10,
		width: 250,
		paddingHorizontal: 15,
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
