/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowDown2, Eye, EyeSlash } from 'iconsax-react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
    placeholder?: string,
    onPress?: () => void,
    iconVisible?: boolean,
    value?: string,
    onChange?: (name: string, value: string) => void,
    error?: string,
    name: string,
    prefix: number,
    affix: number,
    isPassword?: boolean,
}

const InputComponent = (props: Props) => {
    const { placeholder, onPress, iconVisible = true, value, onChange, error, name, prefix, affix, isPassword } = props;

    const handleChange = (text: string) => {
        if (onChange) {
            if (name) {
                onChange(name, text);
            } else {
                onChange(text);
            }
        }
    };

    const [showPass, setShowPass] = useState(false);

    return (
        <View>
            <RowComponent>
                {prefix && prefix}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={[
                            localStyles.input,
                        ]}
                        placeholder={placeholder}
                        placeholderTextColor={colors.description}
                        value={value}
                        onChangeText={handleChange}
                        secureTextEntry={isPassword ? !showPass : false}
                    />
                    {iconVisible && (
                        <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
                            <ArrowDown2 size={20} color={colors.text} />
                        </TouchableOpacity>
                    )}

                    {isPassword && (
                        <TouchableOpacity onPress={() => setShowPass(!showPass)} >
                            {showPass ?
                                (
                                    <EyeSlash size={20} color={colors.description} />
                                ) :
                                (
                                    <Eye size={20} color={colors.description} />
                                )}
                        </TouchableOpacity>
                    )}
                </View>
                {affix && affix}
            </RowComponent>
            <View style={localStyles.underline} />
            {error ? (
                <TextComponent
                    text={error}
                    color='rgba(255,0,0,0.8)'
                    size={12}
                    styles={{ marginTop: 5 }}
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
        marginTop: 5,
    },
});

export default InputComponent;
