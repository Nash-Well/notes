import { useState } from 'react';

import { 
    View, 
    Text, 
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import styles from '../Login/login.style';
import { COLORS } from '../../../constants';
import registerStyles from './register.style';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
    const [ hidden, setHidden ] = useState(false);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: COLORS.white } ]}>
            <View style={ styles.wrapperContainer }>
                <Text style={ styles.headerText }>SIGN UP</Text>

                <View style={ styles.inputContainer }>
                    <Feather 
                        name="user" 
                        size={22} 
                        color="black" 
                    />
                    
                    <TextInput
                        style={ styles.textInput }
                        placeholder='Name'
                        numberOfLines={ 2 }
                    />
                </View>

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
                        secureTextEntry={ hidden }
                    />
                </View>

                <TouchableOpacity style={ registerStyles.registerBtn }>
                    <Text style={ styles.loginBtnText }>
                        REGISTER
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}