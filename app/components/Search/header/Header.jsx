import { useState } from 'react';

import { 
    View, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';

import styles from './header.style';
import { Entypo } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';

export default function Header({ copy, notes, setNotes }) {
    let [ search, setSearch ] = useState('');

    const handleTextChange = (text) => {
        setSearch(text);

        setNotes(
            copy.filter(
                note => note.title.toLowerCase().includes(text.toLowerCase())
            )
        )
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