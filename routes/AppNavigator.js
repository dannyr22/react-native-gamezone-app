import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();



const HomeNavigator = ({ navigation }) => (
  <Navigator headerMode="float">
 {/* other options: "float", "screen" */}
    <Screen 
    name="Home"
    component={Home}
    options={{ 
    title: 'GameZone',
    headerStyle: {
            backgroundColor: '#f4511e',
            height: 80,
     },
     headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }} />
    <Screen 
    name="Details" 
    component={ReviewDetails} 
    options={{ 
    title: 'Review Details',
     }} 
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);