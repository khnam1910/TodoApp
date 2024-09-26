import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowDown2 } from 'iconsax-react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';

interface Props {
    placeholder?: string,
    onPress?: () => void,
    iconVisible?: boolean,
}


const InputComponent = (props: Props) => {

    const { placeholder, onPress, iconVisible = true } = props;
    return (
        <View>
            <RowComponent >
                <TextInput
                    style={localStyles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colors.description}
                />
                {iconVisible && (
                    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
                        <ArrowDown2 size={20} color={colors.text} />
                    </TouchableOpacity>
                )}
            </RowComponent>
            <View style={localStyles.underline} />
        </View>

    );
};

const localStyles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        flex: 1,
        fontSize: 16,
        color: colors.text,
    },
    underline: {
        height: 1,
        backgroundColor: colors.title,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});

export default InputComponent;
