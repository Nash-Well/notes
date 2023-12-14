import useFetch from '../../../hook/useFetch';
import { useState, useEffect, useCallback } from 'react';

import { 
    Text, 
    ScrollView,
    SafeAreaView, 
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import styles from './search.style';
import { filters } from '../Home/Home';
import { COLORS } from '../../../constants';

import Header from '../../components/Search/header/Header';
import EmptySearch from '../../components/Search/emptysearch/EmptySearch';
import NotesList from '../../components/Home/noteslist/NotesList';

export default function Search() {
    let [ copy, setCopy ] = useState([]);
    let [ notes, setNotes ] = useState([]);
    let [ refreshing, setRefreshing ] = useState(false);
    
    const { data, isLoading, error, reFetch } = useFetch(filters[0]);

    useEffect(() => {
        setCopy([ ...data ]);
        setNotes([ ...data ]);
    }, [ data ])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await reFetch();
        setRefreshing(false);
    }, [])

    return (
        <SafeAreaView style={ styles.container }>

            <Header 
                copy={ copy }
                notes={ notes }
                setNotes={ setNotes }
            />

            <ScrollView 
                style={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={ false }
                refreshControl={<RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } />}>
                
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
                            filter={ false }
                        />
                    :   <EmptySearch />
                }

            </ScrollView>
        </SafeAreaView>
    )
}