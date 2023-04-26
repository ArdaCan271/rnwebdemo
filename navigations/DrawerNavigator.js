import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";


import HomeScreen from "../screens/HomeScreen";
import DateCalculator from "../screens/DateCalculator";
import MathCalculator from "../screens/MathCalculator";
import GeometryCalculator from "../screens/GeometryCalculator";
import FinancialCalculator from "../screens/FinancialCalculator";
import HealthCalculator from "../screens/HealthCalculator";
import PasswordGenerator from "../screens/PasswordGenerator";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    initialRouteName="Home" 
    screenOptions={{
      headerShown: false,
      drawerLabelStyle: {marginLeft: -25}
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({color}) => <Ionicons name="home-outline" color={color} size={22}/>}}/>
      <Drawer.Screen name="Date" component={DateCalculator} options={{drawerIcon: ({color}) => <Ionicons name="calendar-outline" color={color} size={22}/>}}/>
      <Drawer.Screen name="Math" component={MathCalculator} options={{drawerIcon: ({color}) => <Ionicons name="calculator-outline" color={color} size={22}/>}}/>
      <Drawer.Screen name="Geometry" component={GeometryCalculator} options={{drawerIcon: ({color}) => <Ionicons name="shapes-outline" color={color} size={22}/>}}/>
      <Drawer.Screen name="Financial" component={FinancialCalculator} options={{drawerIcon: ({color}) => <Ionicons name="logo-usd" color={color} size={22}/>}}/>
      <Drawer.Screen name="Health" component={HealthCalculator} options={{drawerIcon: ({color}) => <Ionicons name="fitness-outline" color={color} size={22}/>}}/>
      <Drawer.Screen name="Password Generator" component={PasswordGenerator} options={{drawerIcon: ({color}) => <Ionicons name="lock-closed-outline" color={color} size={22}/>}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;