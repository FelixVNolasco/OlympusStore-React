import { useEffect } from 'react';
import { onAuthStateChanged, getAuth, confirmPasswordReset } from 'firebase/auth';
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

export function resetPassword(oobCode, newPassword) {
    const auth = getAuth();
    return confirmPasswordReset(auth, oobCode, newPassword)
}