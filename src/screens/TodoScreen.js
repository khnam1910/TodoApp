import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import globalStyles from '../utils/styles/globalStyle';
import SectionComponent from '../components/SectionComponent';
import RowComponent from '../components/RowComponent';
import Container from '../components/Container';
import TextComponent from '../components/TextComponent';

// const TodoScreen = () => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
//             <Text>To do</Text>
//         </View>
//     );
// };

const TodoScreen = () => {
    console.log("TodoScreen rendered");
    return (
        <>
            <>
                <View style={
                    [
                        globalStyles.container,
                        { backgroundColor: 'red', marginTop: 10 }
                    ]}>
                    <TextComponent text='aaaaa' />
                </View >
            </ >
        </>
    );
};
export default TodoScreen;
