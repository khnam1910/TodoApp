/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import SectionComponent from '../../components/SectionComponent'
import TextComponent from '../../components/TextComponent'
import { fontFamily } from '../../utils/constants/fontFamily'
import InputComponent from '../../components/InputComponent'
import { Lock, Sms } from 'iconsax-react-native'
import colors from '../../utils/constants/colors'
import ButtonComponent from '../../components/ButtonComponent'
import RowComponent from '../../components/RowComponent'
import SpaceComponent from '../../components/SpaceComponent'
import globalStyles from '../../utils/styles/globalStyle'
import auth from '@react-native-firebase/auth'
const LoginScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleLoginWithEmail = async () => {

        if (!email || !password) {
            setErrorText('Please enter your email and password')
        }
        else {
            setErrorText('')
            setIsLoading(true);

            await auth().signInWithEmailAndPassword(email, password).then(userCredential => {
                const user = userCredential.user
                console.log(user);
                setIsLoading(false)
            }).catch((error) => {
                setIsLoading(false);
                setErrorText(error.message);
            })
        }
    };

    return (
        <Container>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    flex: 1
                }}>
                <TextComponent
                    flex={0}
                    text='Login'
                    font={fontFamily.bold}
                    size={32}
                    styles={{ textTransform: 'uppercase', textAlign: 'center' }} />
                <View style={{ marginVertical: 20, }}>
                    <InputComponent
                        bgcolor={colors.description}
                        value={email}
                        onChange={val => setEmail(val)}
                        iconVisible={false}
                        placeholder='Email'
                        prefix={<Sms size={20} color={colors.text} />}
                    />
                    <InputComponent
                        bgcolor={colors.description}
                        value={password}
                        onChange={val => setPassword(val)}
                        iconVisible={false}
                        placeholder='Password'
                        prefix={<Lock size={20} color={colors.text} />}
                        isPassword
                    />
                </View>
                {errorText && <TextComponent text={errorText} color='red' flex={0} marginBottom={10} />}
                <RowComponent justify='center'>
                    <ButtonComponent
                        isLoading={isLoading}
                        text='LOGIN'
                        color={colors.bgColor}
                        styles={{
                            alignItems: 'center',
                            padding: 20,
                            marginTop: 10,
                            width: '100%'
                        }}
                        onPress={handleLoginWithEmail} />
                </RowComponent>
                <SpaceComponent height={20} />
                <Text style={[globalStyles.text, { textAlign: 'center' }]}>
                    You dont't have an account?{''}
                    <Text style={{ color: 'red' }} onPress={() => navigation.navigate('SigninScreen')}> Create an account</Text>
                </Text>
            </SectionComponent >
        </Container >
    )
}

export default LoginScreen;