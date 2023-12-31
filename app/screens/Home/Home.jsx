import useFetch from '../../../hook/useFetch';
import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Text,
    StatusBar, 
    ScrollView,
    SafeAreaView, 
    RefreshControl,
    TouchableOpacity, 
    ActivityIndicator,
} from 'react-native';

import styles from './home.style';
import { COLORS } from '../../../constants';

import NoNotes from '../../components/Home/nonotes/NoNotes';
import Filters from '../../components/Home/filters/Filters';
import NotesList from '../../components/Home/noteslist/NotesList';

import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Home/header/Header';

export const filters = [
    'All',
    'Attached',
    'Not attached',
];

export default function Home() {
    const navigation = useNavigation();
    
    let [ notes, setNotes ] = useState([]);
    let [ filter, setFilter ] = useState(filters[0]);
    let [ refreshing, setRefreshing ] = useState(false);
    
    const { data, isLoading, error, reFetch } = useFetch(filter);

    useEffect(() => {
        setNotes([ ...data ])
    }, [ data ])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await reFetch();
        setRefreshing(false);
    }, [])

    return (
        <SafeAreaView style={ styles.container }>
            
            <Header />
            
            <ScrollView 
                style={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } /> }>
                
                <Filters
                    filter={ filter }
                    filters={ filters }
                    setFilter={ setFilter }
                />
                
                {
                    isLoading ? 
                        <ActivityIndicator 
                            size='large'
                            style={{ marginTop: '80%' }}
                            color={ COLORS.white }
                        />
                    : error ?
                        <Text>Something went wrong</Text>
                    : notes.length !== 0 ?
                        <NotesList 
                            notes={ notes }
                            setNotes={ setNotes }
                            filter={ filter !== 'All' }
                        />
                    :   <NoNotes />
                }
            </ScrollView>

            <TouchableOpacity 
                style={ styles.floatingButton }
                onPress={ () => navigation.navigate('editor') }>
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