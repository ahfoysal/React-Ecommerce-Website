import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"

import { auth } from "../firebase";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [contextT, setContextT] = useState("hi");
    function contextTest(email, password ) {

        const unsubscribe =  onAuthStateChanged( (currentUser) => {
             console.log('hi');
        });
        return unsubscribe(email, password)
         
    }

    
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged( (currentUser) => {
             console.log('hi');
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return(  
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>{children}</userAuthContext.Provider>)
    ;

}

export function useUserAuth() {
    return useContext(userAuthContext);
}


