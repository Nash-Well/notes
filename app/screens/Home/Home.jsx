import { 
    View, 
    Text, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    ScrollView 
} from 'react-native';

import { COLORS, SIZES } from '../../../constants';
import styles from './home.style';

export default function Home() {
    
    return (
        <ScrollView
            style={ styles.container }
            showsVerticalScrollIndicator={ false }>
            <View>
                <StatusBar
                    backgroundColor={COLORS.nero}
                />
            </View>
        </ScrollView>
    )
}