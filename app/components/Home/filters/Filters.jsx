import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity 
} from 'react-native'

import styles from './filters.style';
import { COLORS } from '../../../../constants';

export default function Filters({ filter, filters, setFilter }) {    
    return (
        <View style={ styles.container }>
            <FlatList
                horizontal
                data={ filters }
                keyExtractor={ item => item }
                renderItem={ ({ item }) => (
                    <TouchableOpacity style={[ styles.filterContainer, 
                        filter === item && { backgroundColor: COLORS.white }]}
                        onPress={ () => setFilter(item) }>
                        <Text style={ styles.filterText(item === filter) }>{ item }</Text>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={ false }
                contentContainerStyle={{ columnGap: 15 }}
            />
        </View>
    )
}