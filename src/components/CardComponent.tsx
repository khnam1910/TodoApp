import React, { ReactNode } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

interface Props {
    children?: ReactNode,
    onPress?: () => void,
    styles?: StyleProp<ViewStyle>

}

const CardComponent = (props: Props) => {

    const { children, onPress, styles } = props

    return (
        <View>
            <Text>aaa</Text>
        </View>
    )
}

export default CardComponent