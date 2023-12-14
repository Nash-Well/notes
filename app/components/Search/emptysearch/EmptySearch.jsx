import { View, Text, Image } from 'react-native'

import styles from './emptysearch.style'
import { images } from '../../../../constants'

export default function EmptySearch() {
    return (
        <View style={ styles.container }>
            <Image
                style={ styles.searchImg }
                source={ images.search }
            />

            <Text style={ styles.searchText }>File not found. Try searching again.</Text>
        </View>
    )
}