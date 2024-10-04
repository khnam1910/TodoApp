import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import auth from '@react-native-firebase/auth'
import TextComponent from '../../components/TextComponent'
import globalStyles from '../../utils/styles/globalStyle'
import { Logout } from 'iconsax-react-native'
import colors from '../../utils/constants/colors'
const ProfileScreen = () => {
    const user = auth().currentUser;
    return (
        <Container title='Profile'>
            <View style={{ flex: 1 }}>
                <TextComponent size={20} text={`hi, ${user?.email}`} flex={0} />
                <TouchableOpacity onPress={async () => auth().signOut()}>
                    <Logout size={30} color={colors.text} />
                </TouchableOpacity>
            </View>

        </Container>
    )
}

export default ProfileScreen