import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import colors from "./constants/colors";

import DrawerNavigator from "./navigations/DrawerNavigator";

const Drawer = createDrawerNavigator();

const myTheme = {
  colors: {
    primary: colors.primary,
    background: '#fff',
    card: colors.bgLight,
    text: colors.textLight,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
}

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <DrawerNavigator/>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
}