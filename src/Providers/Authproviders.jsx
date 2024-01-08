
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,  updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)

const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)
    const auth = getAuth(app);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
        })

        return () => {
            Unsubscribe()
        }
    },[auth ])

    const authInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

Authproviders.propTypes = {
    children : PropTypes.node
};

export default Authproviders;