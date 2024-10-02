
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

const FileUploadComponent = () => {
    return (
        <View style={{ marginTop: 10 }}>
            <View style={localStyles.uploadBox}>
                <Feather name='upload-cloud' size={50} color={colors.text} />
                <RowComponent styles={localStyles.browseButton} onPress={() => console.log('a')}>
                    <Feather name='folder' size={30} color={colors.webApp} style={{ marginRight: 10 }} />
                    <TextComponent text='BROWSE' flex={0} />
                </RowComponent>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    uploadBox: {
        borderWidth: 1,
        borderColor: colors.webApp,
        borderStyle: 'dashed',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    browseButton: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.webApp,
    },
    browseText: {
        color: colors.text,
        fontSize: 16,
    },
});

export default FileUploadComponent;
