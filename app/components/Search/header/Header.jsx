import { useState } from 'react';

import { 
    View, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';

import styles from './header.style';
import { Entypo } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';

export default function Header({ notes, refetch, setNotes }) {
    let [ search, setSearch ] = useState('');

    const handleTextChange = async (text) => {
        setSearch(text);

        if(text.length < search.length) {
            await refetch()
        } else {
            setNotes(
                notes.filter(
                    note => note.title.toLowerCase().includes(text.toLowerCase())
                )
            )
        }
    }

    const handleClear = async () => {
        setSearch(''); 
        await refetch();
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.inputContainer }>
                <TextInput
                    value={ search }
                    style={ styles.searchInput }
                    placeholder='Search by the keyword...'
                    onChangeText={ (text) => handleTextChange(text) }
                    placeholderTextColor={ COLORS.grayEighty }
                />

                <TouchableOpacity onPress={ handleClear }>
                    <Entypo 
                        name="cross" 
                        size={ SIZES.xLarge } 
                        color={ COLORS.grayEighty } 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}