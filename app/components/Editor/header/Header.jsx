import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';

import headerStyles from './header.style';
import { COLORS, SIZES } from '../../../../constants';
import styles from '../../../navigations/UserStack/userstack.style';

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Toast from 'react-native-toast-message';

export default function Header({ 
    edit,
    setVisible,  
    editable, 
    setEditable,
    attached,
    setAttached 
}) {
    const navigation = useNavigation();
    
    const handleAttachment = () => {
        setAttached();

        Toast.show({
            type: !attached ? 'info' : 'error',
            text1: !attached ? 'Attached' : 'Disattched',
            text2: !attached ? 'This note has been attached.' : 'You disattached this note.',
            text1Style: headerStyles.toastText(true),
            text2Style: headerStyles.toastText()
        })
    }

    return (
        <View style={ headerStyles.container }>
            <TouchableOpacity style={ headerStyles.backBtn } onPress={ () => navigation.goBack() }>
                <Ionicons 
                    name="chevron-back-sharp" 
                    size={ SIZES.xLarge } 
                    color={ COLORS.white } 
                />
            </TouchableOpacity>

            <View style={ headerStyles.headerContainer }>
                {
                    !edit || editable ? (
                        <>
                            <TouchableOpacity style={ styles.iconBtn }
                                onPress={ handleAttachment }>
                                <SimpleLineIcons 
                                    name="pin" 
                                    size={ SIZES.xLarge } 
                                    color={ COLORS.white } 
                                />
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={ styles.iconBtn }
                                onPress={ () => setVisible(true) }>
                                <MaterialCommunityIcons 
                                    name="content-save-outline" 
                                    size={ SIZES.xLarge } 
                                    color={ COLORS.white }
                                />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity style={ styles.iconBtn }
                            onPress={ () => setEditable(true) }>
                            <MaterialCommunityIcons 
                                name="pencil-outline" 
                                size={ SIZES.xLarge } 
                                color={ COLORS.white }
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}