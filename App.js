import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen.js';
import colors from './src/utils/constants/colors.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <HomeScreen />
    </>
  )
}

export default App