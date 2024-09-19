/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { useWindowDimensions, Text, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import InProgressScreen from '../screens/InProgressScreen';
import InReviewScreen from '../screens/InReviewScreen';
import TodoScreen from '../screens/TodoScreen';
import colors from '../utils/constants/colors';
import TextComponent from './TextComponent';
import { fontFamily } from '../utils/constants/fontFamily';
import Container from './Container';
import globalStyles from '../utils/styles/globalStyle';



const renderScene = ({ route }: any) => {
    switch (route.key) {
        case 'todo':
            return <TodoScreen />;
        case 'inProgress':
            return <InProgressScreen />;
        case 'inReview':
            return <InReviewScreen />;
        default:
            return null;
    }
};


export default function TabViewComponent() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const routes = useMemo(() => [
        { key: 'todo', title: 'To do' },
        { key: 'inProgress', title: 'In progress' },
        { key: 'inReview', title: 'In review' },
    ], []);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            lazy={true}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ display: 'none' }}
                    style={globalStyles.tabBarStyle}
                    renderLabel={({ route, focused }) => (
                        <View style=
                            {[
                                globalStyles.labelContainer,
                                {
                                    borderRadius: focused ? 100 : 0,
                                    borderWidth: focused ? 1 : 0,
                                    marginHorizontal: route.title === 'In review' ? -53 : -55,
                                }]}>
                            <TextComponent
                                text={route.title}
                                flex={0}
                                color={focused ? colors.text : colors.description}
                                font={fontFamily.semiBold} />
                        </View>
                    )}
                    tabStyle={{ marginVertical: -4 }}
                />
            )}
        />
    );
}
