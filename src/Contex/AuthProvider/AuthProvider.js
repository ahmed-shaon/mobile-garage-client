import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin user with email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user 
    const userLogout = () => {
        return signOut(auth);
    }

    //get Auth user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    const authInfo = {
        user,
        createUser,
        userLogin,
        userLogout,
        loading
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;