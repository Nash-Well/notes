import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    View,
    Text,
    Modal,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import styles from './editor.style'
import { COLORS, NOTE_COLORS } from '../../../constants';

import Header from '../../components/Editor/header/Header';
import ExpandInput from '../../components/Shared/ExpandInput/ExpandInput';

import uuid from 'react-native-uuid';
import { Ionicons } from '@expo/vector-icons';

import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../configs/firebase';

export default function Editor() {
    const navigation = useNavigation();
    
    let [ visible, setVisible ] = useState(false);
    let [ values, setValues ] = useState({
        id: '',
        title: '',
        description: '',
        color: ''
    })

    const handleSave = async () => {
        try {
            await addDoc(collection(FIREBASE_DB, "notes"), {
                id: uuid.v4(),
                title: values.title,
                description: values.description,
                email: FIREBASE_AUTH.currentUser.email,
                color: NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)],
            })

            setVisible(false);
            navigation.navigate('home');
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <Header setVisible={ setVisible } />

            <ScrollView style={ styles.inputContainer } showsVerticalScrollIndicator={ false }>
                <ExpandInput
                    placeholder='Title'
                    value={ values.title }
                    setValue={ (val) => setValues({ ...values, title: val }) }
                />

                <ExpandInput
                    placeholder='Type something...'
                    value={ values.description }
                    setValue={ (val) => setValues({ ...values, description: val }) }
                />

                <Modal
                    transparent
                    visible={ visible }
                    animationType='fade'
                    onRequestClose={ () => setVisible(!visible) }>
                    <View style={ styles.modalContainer }>
                        <View style={ styles.contentContainer }>

                            <Ionicons 
                                size={ 36 } 
                                name="information-circle" 
                                style={{ marginBottom: 10 }}
                                color={ COLORS.zambezi }
                            />

                            <Text style={ styles.changesText }>Save Changes ?</Text>
                        
                            <View style={ styles.btnsContainer }>
                                <TouchableOpacity style={ styles.actionBtn() } 
                                    onPress={ () => setVisible(false) }>
                                    <Text style={ styles.actionBtnText }>Discard</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={ styles.actionBtn(true) }
                                    onPress={ handleSave }>
                                    <Text style={ styles.actionBtnText }>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}