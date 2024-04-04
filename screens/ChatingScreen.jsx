import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";
import { GiftedChat } from "react-native-gifted-chat";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default Chat = ({ route }) => {
	const [messages, setMessages] = React.useState([]);
	const navigation = useNavigation();

	dayjs.locale("fr");

	const onSend = (message = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, message));
	};

	return (
		<>
			<GiftedChat
				messages={messages}
				onSend={(message) => onSend(message)}
				user={{
					_id: 1,
					avatar: "https://i.pravatar.cc/300",
				}}
				messagesContainerStyle={{
					backgroundColor: "#fff",
				}}
				// timeFormat={}
				dateFormat="llll"
				locale="fr"
			/>

			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
				style={{ position: "absolute", top: "3%", padding: 20 }}
			>
				<Ionicons name="arrow-back" size={30} color="black" />
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.green,
		paddingVertical: 50,
		paddingHorizontal: 20,
		flexDirection: "column",
		// justifyContent: 'space-between',
		gap: 20,
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
