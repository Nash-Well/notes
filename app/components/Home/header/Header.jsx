import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';
import styles from '../../../navigations/UserStack/userstack.style';

import { FIREBASE_AUTH } from '../../../../configs/firebase';

import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={ styles.container }>

            <Text style={ styles.headerTitle }>Notes</Text>

            <View style={ styles.headerContainer }>
                <TouchableOpacity style={ styles.iconBtn }
                    onPress={ () => navigation.navigate('search') }>
                    <Ionicons 
                        name="search" 
                        size={ SIZES.xLarge } 
                        color={ COLORS.white }
                    />
                </TouchableOpacity>

                <TouchableOpacity style={ styles.iconBtn }
                    onPress={ () => FIREBASE_AUTH.signOut() }>
                    <MaterialIcons 
                        name="logout" 
                        size={ SIZES.xLarge } 
                        color={ COLORS.white }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}