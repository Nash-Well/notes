import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

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

import Toast from 'react-native-toast-message';
import Header from '../../components/Editor/header/Header';
import ExpandInput from '../../components/Shared/ExpandInput/ExpandInput';

import uuid from 'react-native-uuid';
import { Ionicons } from '@expo/vector-icons';

import { FIREBASE_AUTH, FIREBASE_DB } from '../../../configs/firebase';
import { addDoc, collection, query, where, updateDoc, getDocs, doc } from 'firebase/firestore';

const defaultValue = {
    id: '',
    title: '',
    description: '',
    color: '',
    attached: false,
}

export default function Editor() {
    const params = useRoute().params;
    const navigation = useNavigation();
    
    let [ visible, setVisible ] = useState(false);
    let [ editable, setEditable ] = useState(params?.note ? false : true);
    let [ values, setValues ] = useState(params?.note ? params.note : defaultValue);

    const handleSave = async () => {
        try {
            
            if (params?.note) {
                const qs = await getDocs(
                    query(collection(FIREBASE_DB, "notes"), where("id", "==", values.id))
                );
            
                if (!qs.empty) {
                    await updateDoc(doc(FIREBASE_DB, "notes", qs.docs[0].id), { ...values });
                }
            } else {
                await addDoc(collection(FIREBASE_DB, "notes"), {
                    id: uuid.v4(),
                    title: values.title,
                    attached: values.attached,
                    description: values.description,
                    email: FIREBASE_AUTH.currentUser.email,
                    color: NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)],
                })
            }

            setVisible(false);
            navigation.navigate('home');
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <Header 
                editable={ editable }
                setVisible={ setVisible } 
                setEditable={ setEditable }
                edit={ params?.note ? true : false }
                attached={ values.attached }
                setAttached={ () => setValues({ ...values, attached: !values.attached }) }
            />

            <ScrollView style={ styles.inputContainer } showsVerticalScrollIndicator={ false }>
                <ExpandInput
                    placeholder='Title'
                    editable={ editable }
                    value={ values.title }
                    setValue={ (val) => setValues({ ...values, title: val }) }
                />

                <ExpandInput
                    placeholder='Type something...'
                    editable={ editable }
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
            <Toast position='bottom' />
        </SafeAreaView>
    )
}