import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const { Navigator, Screen } = createStackNavigator();



const AboutNavigator = ({ navigation }) => (
  <Navigator headerMode="float">
 {/* other options: "float", "screen" */}
    <Screen 
    name="Home"
    component={About}
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
  </Navigator>
);

export const AboutNavigator = () => (
  <NavigationContainer>
    <AboutNavigator />
  </NavigationContainer>
);