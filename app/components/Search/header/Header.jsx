import { useState } from 'react';

import { 
    View, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';

import styles from './header.style';
import { Entypo } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';

export default function Header({ copy, refetch, setNotes }) {
    let [ search, setSearch ] = useState('');

    const handleTextChange = async (text) => {
        setSearch(text);

        if(text.length < search.length) {
            await refetch()
        } else {
            setNotes(
                copy.filter(
                    note => note.title.toLowerCase().includes(text.toLowerCase())
                )
            )
        }
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

                <TouchableOpacity onPress={ () => { setSearch(''); setNotes(copy) } }>
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