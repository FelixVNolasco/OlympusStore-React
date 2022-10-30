import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useState } from 'react';

// Use Auth Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState<any>();

    const auth = getAuth();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [auth])

    return currentUser;
}