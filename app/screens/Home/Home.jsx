import { 
    View, 
    Text, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    ScrollView,
} from 'react-native';

import { COLORS } from '../../../constants';
import styles from './home.style';

import NoNotes from '../../components/Home/nonotes/NoNotes';

import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <NoNotes />
            </ScrollView>

            <TouchableOpacity style={ styles.floatingButton }>
                <AntDesign 
                    name="plus" 
                    size={ 32 } 
                    color={ COLORS.white } 
                />
            </TouchableOpacity>

            <StatusBar
                backgroundColor={COLORS.nero}
            />
        </SafeAreaView>
    )
}