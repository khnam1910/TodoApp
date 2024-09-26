import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen.js';
import colors from './src/utils/constants/colors.js';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/Router'
const App = () => {
  return (
    // <>
    //   <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
    //   <HomeScreen />
    // </>
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }} >
        <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default App