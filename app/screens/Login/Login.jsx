import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    View, 
    Text, 
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import styles from './login.style'

export default function Login() {
    const navigation = useNavigation();
    let [ hidden, setHidden ] = useState(true);
    
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.wrapperContainer }>
                <Text style={ styles.headerText }>SIGN IN</Text>
                
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
                                    size={24} 
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
                        secureTextEntry={ hidden }
                    />
                </View>

                <View style={ styles.registerContainer }>
                    <Text style={ styles.accountText }>Don't have an account yet? </Text>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('register') }>
                        <Text style={ styles.registerText }>Register here</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={ styles.loginBtn }>
                    <Text style={ styles.loginBtnText }>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}