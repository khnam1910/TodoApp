/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import StatisticScreen from '../screens/statistics/StatisticScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import colors from '../utils/constants/colors';
import TabBarIcon from '../components/TabBarIconComponent';
import auth from '@react-native-firebase/auth'
import LoginScreen from '../screens/auth/LoginScreen';
import SigninScreen from '../screens/auth/SigninScreen';


const screenOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: colors.text,
    tabBarInactiveTintColor: colors.description,
    headerShown: false,
    tabBarStyle: {
        height: 60,
        backgroundColor: colors.bgColor,
        borderTopWidth: 0,
        elevation: 5,
    },
};


const Router = () => {

    const Tab = createBottomTabNavigator();

    const Stack = createNativeStackNavigator();

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    }, []);


    const MainRouter = (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                ...screenOptions,
                tabBarIcon: ({ focused, color }) => (
                    <TabBarIcon route={route} focused={focused} color={color} />
                ),
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Statistics" component={StatisticScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );

    const AuthRouter = (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SigninScreen' component={SigninScreen} />
        </Stack.Navigator>
    )

    return isLogin ? MainRouter : AuthRouter;
};
export default Router;
