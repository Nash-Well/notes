import { useState } from 'react';

import { 
    View, 
    Text, 
    SafeAreaView,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import styles from './login.style'

import { FIREBASE_AUTH } from '../../../configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

export default function Login() {
    let [ hidden, setHidden ] = useState(true);

    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');

    const handleLogin = async () => {
        if(email && password) {
            try {
                await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            } catch(err) { // TODO: remake
                Alert.alert('Error', 'No such user by provided email.', [
                    {
                        text: 'OK',
                    },
                ]);
            }
        }
    }
    
    const handleSignUp = async () => {
        if(email && password) {
            try {
                await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            } catch(err) {
                console.log(err)
            }
        }
    }
    
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.wrapperContainer }>
                <Text style={ styles.headerText }>Sign in/up</Text>
                
                <View style={ styles.inputContainer }>
                    <Entypo 
                        name="email" 
                        size={22} 
                        color="black" 
                    />
                    <TextInput
                        style={ styles.textInput }
                        placeholder='Email'
                        numberOfLines={ 2 }
                        onChangeText={ (text) => setEmail(text) }
                        keyboardType='email-address'
                    />
                </View>
                
                <View style={ styles.inputContainer }>
                    <TouchableOpacity
                        onPress={ () => setHidden(hidden ? false : true) }>
                        {
                            hidden ? 
                                <Ionicons 
                                    name="md-lock-closed-outline" 
                                    size={22} 
                                    color="black" 
                                /> : 
                            <Ionicons 
                                name="ios-lock-open-outline" 
                                size={22} 
                                color="black" 
                            />
                        }
                    </TouchableOpacity>

                    <TextInput
                        style={ styles.textInput }
                        placeholder='Password'
                        numberOfLines={ 2 }
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={ hidden }
                    />
                </View>

                <TouchableOpacity style={ styles.loginBtn() }
                    onPress={ handleLogin }>
                    <Text style={ styles.loginBtnText }>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginBtn(true) }
                    onPress={ handleSignUp }>
                    <Text style={ styles.loginBtnText }>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}