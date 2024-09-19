import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RowComponent from '../components/RowComponent';
import SpaceComponent from '../components/SpaceComponent';
import TabViewExample from '../components/TabViewComponent';
import Container from '../components/Container';
import SectionComponent from '../components/SectionComponent';
import TitleComponent from '../components/TitleComponent';
import TextComponent from '../components/TextComponent';
import colors from '../utils/constants/colors';
import globalStyles from '../utils/styles/globalStyle';

const HomeScreen = () => {
    return (
        <View style={globalStyles.container}>
            <SectionComponent>
                <RowComponent>
                    <TitleComponent text='Project Manager' color={colors.title} marginBottom={10} />
                    <RowComponent onPress={() => console.log('aaa')}>
                        <View style={{ borderRadius: 100, borderColor: colors.description, borderWidth: 1, padding: 6 }}>
                            <Ionicons name='search-sharp' size={20} color={colors.text} />
                        </View>
                    </RowComponent>
                </RowComponent>
                <TextComponent text='Monday, 09/09/2024' size={12} color={colors.description} flex={0} marginBottom={10} />
            </SectionComponent>
            <TabViewExample />
        </View>
    );
}

export default HomeScreen;
