import { View, Text, Image } from 'react-native'

import styles from './nonotes.style'

export default function NoNotes() {
    return (
        <View style={ styles.container }>
            <Image
                source={{ 
                    uri: 'https://s3-alpha-sig.figma.com/img/7d2e/769a/22159fa2c844130223b259fdf5067e86?Expires=1702857600&Signature=k8nKKwH0hWO0~eiQRxZARLXJ43X7NM0YwLrXGpC4MP5~ZND4jYKcd0yvu0mMFpUrnhcon4kU-t9RyosR81Bo8jbnlTNSqJOQUAYuxqKtnz55OB66YyVsjRC8vr3MmyCxn8ihdyDJTowUcFsd5LMfE7ZY~OG5a748rBf9jotOsRH-JkXyi5Cl3RKE8BTkw8YStkulLmfLL0AwN9QscULmn1sXm-hRl-AGsj8z4I8fRc1t2th1FM6xvlKRM-bpHP5XaLqrh9rT7GaE1qNmM1DkYhPESns5pnqwVqpGn-eerDn41jb6HtdxeF5alahQNy1GS2eq3rROvS8Y4cxK-ODQSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' 
                }}
                style={ styles.notesImg }
                resizeMode='cover'
            />
            <Text style={ styles.notesText }>Create your first note !</Text>
        </View>
    )
}