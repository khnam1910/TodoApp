import React from 'react';
import { View, Text } from 'react-native';

const InProgressScreen = () => {
    console.log('ngu qua di')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'coral', marginTop: 10 }}>
            <Text>In progress</Text>
        </View>
    );
};

export default InProgressScreen;
