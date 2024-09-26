/* eslint-disable react-native/no-inline-styles */
import { Add } from 'iconsax-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import ModalComponent from '../../components/ModalComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import colors from '../../utils/constants/colors';
import { fontFamily } from '../../utils/constants/fontFamily';
import globalStyles from '../../utils/styles/globalStyle';
import TaskScreen from '../tasks/TaskScreen';
const TodoScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View style={
                [
                    globalStyles.container,
                    { marginTop: 30 }
                ]}>
                <SectionComponent>
                    <RowComponent
                        onPress={() => setModalVisible(true)}
                        styles={[{
                            backgroundColor: colors.description,
                            borderRadius: 10,
                            padding: 10
                        }]}>
                        <Add size={20} color='rgba(64,64,64,0.6)' />
                        <TextComponent font={fontFamily.semiBold} flex={0} text='Card' color='rgba(64,64,64,0.6)' />
                    </RowComponent>
                </SectionComponent>
                <SectionComponent>
                    <RowComponent styles={{ marginTop: 20 }} onPress={() => console.log('')}>
                        <View style={{ flex: 1, borderLeftColor: colors.webApp, borderLeftWidth: 3, paddingHorizontal: 15 }}>
                            <TextComponent text='CORE-256' flex={0} color={colors.description} font={fontFamily.semiBold} />
                            <TextComponent text='Redesign Side Nav' flex={0} size={16} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 100, borderWidth: 1, padding: 5, borderColor: colors.description }}>
                            <View style={{
                                backgroundColor: colors.webApp,
                                borderRadius: 5,
                                width: 6,
                                height: 6,
                                marginRight: 10
                            }} />
                            <View>
                                <TextComponent text='Web app' flex={0} color={colors.description} />
                            </View>
                        </View>
                    </RowComponent>
                    <RowComponent styles={{ marginTop: 20 }} onPress={() => console.log('')}>
                        <View style={{ flex: 1, borderLeftColor: colors.bug, borderLeftWidth: 3, paddingHorizontal: 15 }}>
                            <TextComponent text='CORE-239' flex={0} color={colors.description} font={fontFamily.semiBold} />
                            <TextComponent text='Backup Production DB' flex={0} size={16} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 100, borderWidth: 1, padding: 5, borderColor: colors.description }}>
                            <View style={{
                                backgroundColor: colors.bug,
                                borderRadius: 5,
                                width: 6,
                                height: 6,
                                marginRight: 10
                            }} />
                            <View>
                                <TextComponent text='Bug' flex={0} color={colors.description} />
                            </View>
                        </View>
                    </RowComponent>
                    <RowComponent styles={{ marginTop: 20 }} onPress={() => console.log('')}>
                        <View style={{ flex: 1, borderLeftColor: colors.iosApp, borderLeftWidth: 3, paddingHorizontal: 15 }}>
                            <TextComponent text='CORE-256' flex={0} color={colors.description} font={fontFamily.semiBold} />
                            <TextComponent text='Redesign Side Nav' flex={0} size={16} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 100, borderWidth: 1, padding: 5, borderColor: colors.description }}>
                            <View style={{
                                backgroundColor: colors.iosApp,
                                borderRadius: 5,
                                width: 6,
                                height: 6,
                                marginRight: 10
                            }} />
                            <View>
                                <TextComponent text='Ios App' flex={0} color={colors.description} />
                            </View>
                        </View>
                    </RowComponent>
                </SectionComponent>
                <ModalComponent visible={modalVisible}  >
                    <TaskScreen onClose={() => setModalVisible(false)} />
                </ModalComponent>
            </View >
        </>
    );
};
export default TodoScreen;
