import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen.js';
import colors from './src/utils/constants/colors.js';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/Router'
// import firebase from '@react-native-firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyC7f7IJVXWS2KIFMnPijX-wqs3MxuaU7so",
//   authDomain: "todoapp-demo-a7891.firebaseapp.com",
//   projectId: "todoapp-demo-a7891",
//   storageBucket: "todoapp-demo-a7891.appspot.com",
//   messagingSenderId: "692396988931",
//   appId: "1:692396988931:android:1d14cb1aae7883f9408c36",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const App = () => {
  return (
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