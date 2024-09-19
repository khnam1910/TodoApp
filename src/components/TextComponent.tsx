import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import colors from '../utils/constants/colors';
import { fontFamily } from '../utils/constants/fontFamily';
import globalStyles from '../utils/styles/globalStyle';

interface Props {
    text: string,
    size?: number,
    color?: string,
    font?: string,
    flex?: number,
    marginBottom?: number,
    styles?: StyleProp<TextStyle>
}

const TextComponent = (props: Props) => {

    const { text, size, color, font, flex, marginBottom } = props;

    return (
        <Text style={[
            globalStyles.text,
            {
                marginBottom: marginBottom ?? 0,
                flex: flex ?? 1,
                fontSize: size ?? 14,
                color: color ?? colors.text,
                fontFamily: font ?? fontFamily.regular,
            }
        ]}>
            {text}
        </Text>
    )
}

export default TextComponent