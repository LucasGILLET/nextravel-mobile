import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DestinationsScreen from "./screens/DestinationsScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatingScreen from "./screens/ChatingScreen";
import InformationsScreen from "./screens/InformationsScreen";
import DrawerProfile from "./components/DrawerProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Third Level Function : return screens from auth stack
function AuthStack() {
	return (
		<Stack.Navigator defaultScreenOptions={LoginScreen} screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
			<Stack.Screen name="Destinations" component={DestinationsScreen} />
			{/* <Stack.Screen name="Home" component={HomeScreen} /> */}
			<Stack.Screen name="Home" component={DrawerNavigator} />
			<Stack.Screen name="Chating" component={ChatingScreen} />
		</Stack.Navigator>
	);
}

import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function BottomTabNavigator() {
	return (
		<Tab.Navigator
			defaultScreenOptions={HomeScreen}
			screenOptions={{ headerShown: false, tabBarShowLabel: false }}
			initialRouteName="Accueil"
		>
			{/* <Tab.Screen name="Home" component={HomeScreen} /> */}
			<Tab.Screen
				name="Chat"
				component={ChatScreen}
				options={{ tabBarIcon: ({ color, size }) => <Entypo name="chat" size={24} color="black" /> }}
			/>
			<Stack.Screen
				name="Accueil"
				component={HomeScreen}
				options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={24} color="black" /> }}
			/>
			<Tab.Screen
				name="Informations"
				component={InformationsScreen}
				options={{ tabBarIcon: ({ color, size }) => <Entypo name="info-with-circle" size={24} color="black" /> }}
			/>
		</Tab.Navigator>
	);
}

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerPosition: "right",
				drawerType: "front",
				drawerHideStatusBarOnOpen: false,
			}}
			drawerContent={DrawerProfile}
			defaultStatus="closed"
		>
			<Stack.Screen name="Profile" component={BottomTabNavigator} />
		</Drawer.Navigator>
	);
}

// Second Level Function : return authStack or classicStack
function RootNavigator() {
	// const { user, setUser } = useContext(AuthenticatedUserContext);
	const [loading, setLoading] = React.useState(false);

	// useEffect(() => {
	//   const unsubscribe = onAuthStateChanged(auth,
	//     async authenticatedUser => {
	//       authenticatedUser ? setUser(authenticatedUser) : setUser(null);
	//       setLoading(false);
	//     }
	//   );
	//   return () => unsubscribe();
	// }, [user]);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<NavigationContainer>
			<View style={{ flex: 1, flexDirection: "column" }}>
				<AuthStack />
				{/* <BottomTabNavigator /> */}
			</View>
			{/* { user ? <ClassicStack /> : <AuthStack />} */}
		</NavigationContainer>
	);
}

// Function to export
export default function App() {
	return (
		// <AuthenticatedUserProvider>
		<RootNavigator />
		// </AuthenticatedUserProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
