import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowDown2 } from 'iconsax-react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
    placeholder?: string,
    onPress?: () => void,
    iconVisible?: boolean,
    required?: boolean,
}


const InputComponent = (props: Props) => {

    const { placeholder, onPress, iconVisible = true, required } = props;
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const validateInput = (text: string) => {
        setInputValue(text);

        if (required && text.trim() === '') {
            setError("This field isn't empty");
        }
        else {
            setError('');
        }
    }

    return (
        <View>
            <RowComponent >
                <TextInput
                    style={localStyles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colors.description}
                    onChangeText={validateInput}
                    value={inputValue}
                />
                {iconVisible && (
                    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
                        <ArrowDown2 size={20} color={colors.text} />
                    </TouchableOpacity>
                )}
            </RowComponent>
            <View style={localStyles.underline} />
            {error ? (
                <TextComponent
                    text={error}
                    color='rgba(255,0,0,0.8)'
                    marginBottom={5}
                    size={12}
                />
            ) : null}
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
