import { TouchableOpacity, View } from 'react-native';

import Home from '../../screens/Home/Home';
import Editor from '../../screens/Editor/Editor';

import styles from './userstack.style';
import { COLORS } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';

import { FIREBASE_AUTH } from '../../../configs/firebase';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function UserStack() {    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home" 
                component={ Home } 
                options={{ 
                    title: 'Notes',
                    headerTitleStyle: styles.headerTitle,

                    headerStyle: {
                        backgroundColor: COLORS.nero,
                    },

                    headerShadowVisible: false,

                    headerRight: () => (
                        <View style={ styles.headerContainer }>
                            <TouchableOpacity style={ styles.iconBtn }>
                                <Ionicons 
                                    name="search" 
                                    size={24} 
                                    color={ COLORS.white }
                                />
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={ styles.iconBtn }
                                onPress={ () => FIREBASE_AUTH.signOut() }>
                                <Ionicons 
                                    name="ios-information-circle-outline" 
                                    size={24} 
                                    color={ COLORS.white }
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />

            <Stack.Screen
                name='editor'
                component={ Editor }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}