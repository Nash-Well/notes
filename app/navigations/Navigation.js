import { useEffect, useState } from 'react';

import { onAuthStateChanged } from '@firebase/auth';
import { FIREBASE_AUTH } from '../../configs/firebase';

import Login from '../screens/Login/Login';
import UserStack from './UserStack';

export default function Navigation() {
    let [ user, setUser ] = useState()
    
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, [])

    return user ? <UserStack /> : <Login />
}