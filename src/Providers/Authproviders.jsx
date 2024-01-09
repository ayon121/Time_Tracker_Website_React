
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)

const Authproviders = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading , setloading] = useState(true)
    const auth = getAuth(app);



    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in auth state changes', currentUser)
            setuser(currentUser)
            setloading(false)

        })

        return () => {
            Unsubscribe()
        }
    }, [auth])

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    const UpdateProfile = (name, imgurl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgurl
        })

    }

    // google login
    // Login USer with Google
    const googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        // setloading(true)
        return signInWithPopup(auth, googleprovider)
    }


    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        UpdateProfile,
        GoogleLogin ,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

Authproviders.propTypes = {
    children: PropTypes.node
};

export default Authproviders;