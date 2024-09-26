import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RouteNames = 'Home' | 'Profile' | 'Statistics' | 'Notification';

const getIconName = (routeName: RouteNames, focused: boolean) => {
    const icons = {
        Home: focused ? 'home-sharp' : 'home-outline',
        Profile: focused ? 'person-sharp' : 'person-outline',
        Statistics: focused ? 'pie-chart-sharp' : 'pie-chart-outline',
        Notification: focused ? 'chatbox-ellipses-sharp' : 'chatbox-ellipses-outline',
    };
    return icons[routeName];
};

const TabBarIconComponent = ({ route, focused, color }: any) => {
    const iconName = getIconName(route.name, focused);
    return (
        <View style={localStyles.containerIcon}>
            {focused ? (
                <LinearGradient
                    colors={['rgba(79, 174, 90, 0.7)', 'rgba(255, 255, 255, 0.1)']}
                    style={localStyles.containerGradient}
                >
                    <Ionicons name={iconName} size={20} color={color} />
                </LinearGradient>
            ) : (
                <Ionicons name={iconName} size={20} color={color} />
            )}
        </View>
    );
};

const localStyles = StyleSheet.create({
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    containerGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderTopColor: '#4FAE5A',
        borderTopWidth: 2,
    },
});

export default TabBarIconComponent;
