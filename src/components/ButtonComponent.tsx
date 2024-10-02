import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import colors from '../utils/constants/colors';
import globalStyles from '../utils/styles/globalStyle';

interface Props {
    children: ReactNode,
    bgColor?: string,
    onPress?: () => void
    styles?: StyleProp<ViewStyle>
}

const ButtonComponent = (props: Props) => {
    const { children, styles, bgColor, onPress } = props;
    return (
        <TouchableOpacity
            style={[
                globalStyles.buttonComponent,
                {
                    backgroundColor: bgColor ? bgColor : colors.bgColor
                }
                , styles
            ]}
        >
            {children}
        </TouchableOpacity>
    )
}

export default ButtonComponent