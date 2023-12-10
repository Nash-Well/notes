import { useState, useEffect } from 'react';

import { getDocs, query, collection, where } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../configs/firebase';

export default useFetch = (filter) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            let resp;

            if (filter !== 'All') {
                resp = await getDocs(
                    query(
                        collection(FIREBASE_DB, "notes"), 
                        where("email", "==", FIREBASE_AUTH.currentUser.email),
                        where("attached", "==", filter === 'Attached' ? true : false)
                    )
                );
            } else {
                resp = await getDocs(
                    query(
                        collection(FIREBASE_DB, "notes"), 
                        where("email", "==", FIREBASE_AUTH.currentUser.email)
                    )
                );
            }

            setData(resp.docs.map(doc => doc.data()));
        } catch(error) {
            setError(error);
            alert('Error during data fetch')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [ filter ]);

    const reFetch = () => {
        return fetchData();
    }

    return { data, isLoading, error, reFetch };
}