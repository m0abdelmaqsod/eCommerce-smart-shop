import { useState, useEffect, createContext, Children, useContext } from "react";
// import { createContext } from "react";
// import { Children, useContext } from "react";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
// import auth from "../firebase";

const AuthContext = createContext();

const AuthProvider = () => {
    const [currentUser, setCurrentUser] = useState()
    // const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        // createUserWithEmailAndPassword(auth, email, password)
    }

    // useEffect = (() => {
    //     // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);
    //         setLoading(false)
    //     // });
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    return <AuthContext.Provider value={{ currentUser, setCurrentUser, signup }}>
        {/* {!loading && Children} */}
        {Children}
    </AuthContext.Provider>
};

export default AuthProvider;


export const useAuth = () => {
    return useContext(AuthContext)
}