import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';

import headerStyles from './header.style';
import { COLORS } from '../../../../constants';
import styles from '../../../navigations/UserStack/userstack.style';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({ setVisible }) {
    const navigation = useNavigation();
    
    return (
        <View style={ headerStyles.container }>
            <TouchableOpacity style={ headerStyles.backBtn } onPress={ () => navigation.goBack() }>
                <Ionicons 
                    name="chevron-back-sharp" 
                    size={24} 
                    color={ COLORS.white } 
                />
            </TouchableOpacity>

            <View style={ headerStyles.headerContainer }>
                <TouchableOpacity style={ styles.iconBtn }>
                    <Ionicons 
                        name="md-eye-outline" 
                        size={24} 
                        color={ COLORS.white } 
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.iconBtn }
                    onPress={ () => setVisible(true) }>
                    <MaterialCommunityIcons 
                        name="content-save-outline" 
                        size={24} 
                        color={ COLORS.white }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}