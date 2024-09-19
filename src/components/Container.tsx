/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, ScrollView, StyleProp } from 'react-native'
import React, { Children, ReactNode } from 'react'
import globalStyles from "../utils/styles/globalStyle";

interface Props {
    title?: string,
    back?: boolean,
    right?: ReactNode,
    children: ReactNode,
    style?: StyleProp<ScrollView>
}

const Container = (props: Props) => {

    const { title, back, right, children } = props

    return (
        <ScrollView style={globalStyles.container}>
            {children}
        </ScrollView>
    )
}

export default Container;