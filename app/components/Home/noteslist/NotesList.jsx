import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './noteslist.style'

import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';

import { FIREBASE_DB } from '../../../../configs/firebase';
import { deleteDoc, query, where, getDocs, doc, collection  } from 'firebase/firestore';

export default function NotesList({ notes, setNotes }) {    
    let [ pressed, setPressed ] = useState('')
    
    const handlePress = async () => {
        if(pressed !== '') {
            try {
                const q = query(collection(FIREBASE_DB, "notes"), where("id", "==", pressed));
                const qs = await getDocs(q);
                
                if (!qs.empty) {
                    const document = qs.docs[0];
                    const dr = doc(FIREBASE_DB, "notes", document.id);
                    await deleteDoc(dr);
                }
            } catch(err) {
                console.log(err)
            } finally {
                setNotes(notes.filter(note => note.id !== pressed))
            }
        }
    }

    return (
        <>
            {
                notes?.map(note => (
                    <TouchableOpacity 
                        key={ note.id } 
                        style={[ styles.noteContainer(note.id !== pressed, note.color), pressed === note.id ? styles.deleteNote : {} ]}
                        onLongPress={ () => { pressed === note.id ? setPressed('') : setPressed(note.id) } }
                        delayLongPress={ 500 }
                        onPress={ handlePress }>
                        {
                            pressed !== note.id ?
                                <Text style={ styles.notesText }>
                                    { note.title }
                                </Text>
                            : <MaterialIcons name="delete" size={ SIZES.xxLarge } color={ COLORS.white } /> 
                        }
                    </TouchableOpacity>
                ))
            }
        </>
    )
}