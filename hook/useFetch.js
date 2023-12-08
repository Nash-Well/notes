import { useState, useEffect } from 'react';

import { getDocs, query, collection, where } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../configs/firebase';

export default useFetch = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const resp = await getDocs(
                query(
                    collection(FIREBASE_DB, "notes"), 
                    where("email", "==", FIREBASE_AUTH.currentUser.email)
                )
            );

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
    }, []);

    const reFetch = () => {
        return fetchData();
    }

    return { data, isLoading, error, reFetch };
}