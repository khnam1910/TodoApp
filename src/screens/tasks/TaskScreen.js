import { CloseCircle } from 'iconsax-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import Container from '../../components/Container';
import FileUploadComponent from '../../components/FileUpLoadComponent';
import InputComponent from '../../components/InputComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import colors from '../../utils/constants/colors';
import { fontFamily } from '../../utils/constants/fontFamily';
import globalStyles from '../../utils/styles/globalStyle';

const TaskScreen = ({ onClose, visible }) => {

    return (
        <Container Container >
            <View style={[globalStyles.container, { padding: 16 }]}>
                <RowComponent>
                    <TextComponent
                        text='Create Card'
                        flex={1}
                        font={fontFamily.semiBold}
                        color={colors.title}
                        size={20}
                        marginBottom={10} />
                    <CloseCircle size={20} color='black' onPress={onClose} />
                </RowComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Project' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent
                        required
                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Issue Type' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent
                        required
                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Summary' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent
                        iconVisible={false}
                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Description' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <FileUploadComponent />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Reporter' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent
                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Priority' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent
                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Labels' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent

                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Linked issue' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent

                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Assignee' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent

                    />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
                    <TextComponent text='Sprint' color={colors.title} styles={{ paddingHorizontal: 10 }} />
                    <InputComponent />
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0 }}>
                    <RowComponent justify='flex-end'>
                        <ButtonComponent bgColor={colors.title} >
                            <TextComponent text='Create' color={colors.bgColor} />
                        </ButtonComponent>
                        <ButtonComponent onPress={onClose}>
                            <TextComponent text='Cancel' color={colors.title} />
                        </ButtonComponent>
                    </RowComponent>
                </SectionComponent>
            </View>
        </Container >
    );
}

export default TaskScreen;
