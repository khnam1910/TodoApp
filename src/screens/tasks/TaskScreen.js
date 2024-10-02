/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import { CloseCircle } from 'iconsax-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import Container from '../../components/Container';
import InputComponent from '../../components/InputComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import colors from '../../utils/constants/colors';
import { fontFamily } from '../../utils/constants/fontFamily';
import globalStyles from '../../utils/styles/globalStyle';
import { validateForm } from './Validation'; // Import hàm validate
import FileUploadComponent from '../../components/FileUpLoadComponent';

const TaskScreen = ({ onClose, visible }) => {
    const [formState, setFormState] = useState({
        values: {
            project: '',
            issueType: '',
            summary: '',
            description: '',
            reporter: '',
            priority: '',
            labels: '',
            linkedIssue: '',
            assignee: '',
            sprint: ''
        },
        errors: {}
    });

    const handleInputChange = (name, value, label) => {
        setFormState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value
            },
            errors: {
                ...prevState.errors,
                [name]: value ? '' : `${label} is required`
            }
        }));
    };

    const handleCreate = () => {
        const newErrors = validateForm(formState.values);

        setFormState({
            ...formState,
            errors: newErrors
        });

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        return true;
    };

    const renderComponent = (name, label, Component, iconVisible = true) => (
        <SectionComponent styles={{ paddingHorizontal: 0, marginBottom: 10 }}>
            <TextComponent text={label} color={colors.title} styles={{ paddingHorizontal: 10 }} />
            <Component
                name={name}
                value={formState.values[name]}
                onChange={(name, value) => handleInputChange(name, value, label)}
                error={formState.errors[name]}
                iconVisible={iconVisible}
            />
            {console.log(formState.values.project)}
        </SectionComponent>
    );

    return (
        <Container>
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
                {renderComponent('project', 'Project', InputComponent)}
                {renderComponent('issueType', 'Issue Type', InputComponent)}
                {renderComponent('summary', 'Summary', InputComponent, false)}
                {renderComponent('description', 'Description', FileUploadComponent)}
                {renderComponent('reporter', 'Reporter', InputComponent)}
                {renderComponent('priority', 'Priority', InputComponent)}
                {renderComponent('labels', 'Labels', InputComponent)}
                {renderComponent('linkedIssue', 'Linked issue', InputComponent)}
                {renderComponent('assignee', 'Assignee', InputComponent)}
                {renderComponent('sprint', 'Sprint', InputComponent)}
                <SectionComponent styles={{ paddingHorizontal: 0 }}>
                    <RowComponent justify='flex-end'>
                        <ButtonComponent bgColor={colors.title} onPress={handleCreate}>
                            <TextComponent text='Create' color={colors.bgColor} />
                        </ButtonComponent>
                        <ButtonComponent onPress={onClose}>
                            <TextComponent text='Cancel' color={colors.title} />
                        </ButtonComponent>
                    </RowComponent>
                </SectionComponent>
            </View>
        </Container>
    );
}

export default TaskScreen;
