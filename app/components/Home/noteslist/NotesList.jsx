import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { Text, TouchableOpacity, View } from 'react-native';

import styles from './noteslist.style'
import { COLORS, SIZES } from '../../../../constants';

import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { FIREBASE_DB } from '../../../../configs/firebase';
import { updateDoc, deleteDoc, query, where, getDocs, doc, collection  } from 'firebase/firestore';

export default function NotesList({ notes, setNotes, filter }) {    
    let [ pressed, setPressed ] = useState('');
    const navigation = useNavigation();
    
    const handleDelete = async () => {
        try {
            const qs = await getDocs(
                query(collection(FIREBASE_DB, "notes"), where("id", "==", pressed))
            );
            
            if (!qs.empty) {
                await deleteDoc(doc(FIREBASE_DB, "notes", qs.docs[0].id));
            }

            setNotes(notes.filter(note => note.id !== pressed))
        } catch(err) { // TODO remake
            console.log(err)
        }
    }

    const handleAttachment = async (note) => {        
        try {
            const qs = await getDocs(
                query(collection(FIREBASE_DB, "notes"), where("id", "==", pressed))
            );
        
            if (!qs.empty) {
                await updateDoc(doc(FIREBASE_DB, "notes", qs.docs[0].id), {
                    ...note,
                    attached: !note.attached,
                });
        
                setNotes((pNotes) =>
                    pNotes.map((n) =>
                        n.id !== pressed ? n : { 
                            ...n, attached: !n.attached 
                        }
                    )
                );

                filter && setNotes(notes.filter(n => n.id !== note.id))
            }
        } catch (err) { // TODO remake
            console.error(err);
        }
    };   

    return (
        <>
            {
                notes?.map(note => (
                    <TouchableOpacity 
                        key={ note.id } 
                        delayLongPress={ 500 }
                        style={[ styles.noteContainer(note.id !== pressed, note.color), pressed === note.id ? styles.deleteNote : {} ]}
                        onLongPress={ () => { pressed === note.id ? setPressed('') : setPressed(note.id) } }
                        onPress={ () => navigation.navigate('editor', { note: note}) }>
                        {
                            pressed !== note.id ?
                                <View>
                                    { note.attached && 
                                        <View style={ styles.attachedIcon }>
                                            <SimpleLineIcons 
                                                name="pin" 
                                                size={ SIZES.large } 
                                                color={ COLORS.white } 
                                            />
                                        </View>
                                    }

                                    <Text numberOfLines={ 3 } style={ styles.notesText }>
                                        { note.title }
                                    </Text>
                                </View>
                            : (
                                <View style={ styles.iconsContainer }>
                                    <TouchableOpacity style={ styles.deleteBtn }
                                        onPress={ handleDelete }>
                                        <MaterialIcons 
                                            name="delete" 
                                            size={ SIZES.xLarge } 
                                            color={ COLORS.white } 
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[ styles.atchBtn(note.attached) ]}
                                        onPress={ () => handleAttachment(note) }>
                                        <SimpleLineIcons 
                                            name="pin" 
                                            size={ SIZES.xLarge } 
                                            color={ COLORS.gold } 
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) 
                        }
                    </TouchableOpacity>
                ))
            }
        </>
    )
}