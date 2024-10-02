/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, ScrollView, StyleProp, TouchableOpacity } from 'react-native'
import React, { Children, ReactNode } from 'react'
import globalStyles from "../utils/styles/globalStyle";
import { useNavigation } from '@react-navigation/native';
import RowComponent from '../components/RowComponent'
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import TextComponent from '../components/TextComponent'
import { fontFamily } from '../utils/constants/fontFamily';
import colors from '../utils/constants/colors';

interface Props {
    title?: string,
    back?: boolean,
    right?: ReactNode,
    children: ReactNode,
    style?: StyleProp<ScrollView>
}

const Container = (props: Props) => {

    const { title, back, right, children } = props
    const navigation: any = useNavigation();
    return (
        <View style={[globalStyles.container]}>
            {/*Header container */}
            <RowComponent
                styles={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {back && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowCircleLeft2 size={24} color={colors.text} />
                    </TouchableOpacity>
                )}
                <View style={{ flex: 1, zIndex: -1 }}>
                    {title && (
                        <TextComponent
                            flex={0}
                            font={fontFamily.bold}
                            size={16}
                            text={title}
                            styles={{ textAlign: 'center', marginLeft: back ? -24 : 0 }}
                        />
                    )}
                </View>
            </RowComponent>
            <ScrollView style={[globalStyles.container]}>
                {children}
            </ScrollView>
        </View>

    );
}

export default Container;