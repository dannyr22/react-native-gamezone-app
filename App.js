import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import { AppNavigator } from "./routes/AppNavigator";

const getFonts = () => 
  Font.loadAsync({
    'nunito-sans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
})


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded) {
    return (
      <AppNavigator />
      // <View />
    );
  } else {
    return (
  <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => console.log('error')}
    />
    )
  
  }

}


