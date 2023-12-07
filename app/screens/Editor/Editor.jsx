import { useState } from 'react';

import { 
    View,
    Text,
    Modal,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import styles from './editor.style'
import { COLORS } from '../../../constants';

import Header from '../../components/Editor/header/Header';
import ExpandInput from '../../components/Shared/ExpandInput/ExpandInput';

import { Ionicons } from '@expo/vector-icons';

export default function Editor() {
    let [ visible, setVisible ] = useState(false);
    let [ values, setValues ] = useState({
        title: '',
        description: ''
    })

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

                                <TouchableOpacity style={ styles.actionBtn(true) }>
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