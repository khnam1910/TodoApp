import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

const FileUploadComponent = () => {
    const handleFilePick = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log(JSON.stringify(result, null, 2)); // In ra toàn bộ cấu trúc của result
            if (result.length > 0) {
                Alert.alert('File Selected', `You selected: ${result[0].name}`);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                throw err;
            }
        }
    };


    return (
        <View style={{ marginTop: 10 }}>
            <View style={localStyles.uploadBox}>
                <Feather name='upload-cloud' size={50} color={colors.text} />
                <RowComponent styles={localStyles.browseButton} onPress={handleFilePick}>
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
