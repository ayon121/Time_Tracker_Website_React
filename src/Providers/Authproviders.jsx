
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,  updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)

const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)
    const auth = getAuth(app);

  

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
        })

        return () => {
            Unsubscribe()
        }
    },[auth ])

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logout = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        createUser,
        loginUser,
        logout
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