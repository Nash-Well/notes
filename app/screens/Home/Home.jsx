import { View, Text, TouchableOpacity } from 'react-native'

import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../../configs/firebase';

export default function Home() {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <TouchableOpacity onPress={ () => FIREBASE_AUTH.signOut() }>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}