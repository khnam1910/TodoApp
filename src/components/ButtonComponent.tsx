import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import colors from '../utils/constants/colors';
import globalStyles from '../utils/styles/globalStyle';
import TextComponent from './TextComponent';
import { fontFamily } from '../utils/constants/fontFamily';

interface Props {
    bgColor?: string,
    onPress?: () => void
    styles?: StyleProp<ViewStyle>
    isLoading?: boolean,
    text: string,
    color?: string,
}

const ButtonComponent = (props: Props) => {
    const { styles, bgColor, onPress, isLoading, text, color } = props;
    return (
        <TouchableOpacity
            disabled={isLoading}
            style={[
                globalStyles.buttonComponent,
                {
                    backgroundColor: bgColor ? bgColor : isLoading ? colors.description : colors.title,
                }
                , styles
            ]}
            onPress={onPress}
        >
            {isLoading ?
                (
                    <ActivityIndicator />
                ) : (
                    <TextComponent text={text} color={color ? color : colors.text} flex={0} font={fontFamily.semiBold} />
                )}
        </TouchableOpacity>
    )
}

export default ButtonComponent