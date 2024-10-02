/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import StatisticScreen from '../screens/statistics/StatisticScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import colors from '../utils/constants/colors';
import TabBarIcon from '../components/TabBarIconComponent';

const Tab = createBottomTabNavigator();

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

const Router = () => (
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

export default Router;
