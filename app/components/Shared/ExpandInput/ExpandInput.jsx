import { useState } from 'react'
import { TextInput } from 'react-native'

import styles from './expandinput.style';
import { COLORS } from '../../../../constants';

export default function ExpandInput({ placeholder, value, setValue }) {
    const [height, setHeight] = useState(42);
    
    return (
        <TextInput
            editable
            multiline
            value={ value }
            placeholder={ placeholder }
            placeholderTextColor={ COLORS.nobel }
            onChangeText={ (text) => setValue(text) }
            onContentSizeChange={ (e) => setHeight(e.nativeEvent.contentSize.height) }
            style={[ styles.textInput(placeholder !== 'Title' ?? true), { height: height } ]}
        />
    )
}