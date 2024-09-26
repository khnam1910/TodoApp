import React from 'react';
import { Modal, View } from 'react-native';
import globalStyles from '../utils/styles/globalStyle';



const ModalComponent = ({ visible, children }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={globalStyles.modalOverlay}>
                <View style={globalStyles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};



export default ModalComponent;
