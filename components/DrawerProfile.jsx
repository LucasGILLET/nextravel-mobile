import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";

export default DrawerProfile = ({ state, navigation, descriptors }) => {
	return (
		<View style={{ marginVertical: 50, marginHorizontal: 15 }}>
			<Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Lucas GILLET</Text>
			<Text style={{ fontSize: 15 }}>Age : 21</Text>
			<Text style={{ fontSize: 15 }}>Ecole : WebTech Institute</Text>
			<Text style={{ fontSize: 15 }}>Classe : 3e année</Text>
			<Text style={{ fontSize: 15 }}>Destination : Montréal</Text>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Destinations");
				}}
				style={{ padding: 15, backgroundColor: colors.realBlue, borderRadius: 10, marginTop: 20, marginBottom: 10 }}
			>
				<Text style={{ color: "white", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>
					Changer de destination
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Login");
				}}
				style={{ padding: 15, backgroundColor: "#CC0000", borderRadius: 10, marginVertical: 10 }}
			>
				<Text style={{ color: "white", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>Se déconnecter</Text>
			</TouchableOpacity>
		</View>
	);
};
