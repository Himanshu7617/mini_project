import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


export const useFirebase = createContext();


//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDD_n0qhvKuorl6YwJyIy9ObgfcUX3x6bE",
    authDomain: "fluentify-7a78a.firebaseapp.com",
    projectId: "fluentify-7a78a",
    storageBucket: "fluentify-7a78a.firebasestorage.app",
    messagingSenderId: "1096214608573",
    appId: "1:1096214608573:web:e947b22b3542da8ba695d4"
};

//initializing the firebase app -- that's the very first step !!
const app = initializeApp(firebaseConfig);

//initializing the authentication 
const auth = getAuth(app);

const FirebaseContext = (props) => {

    //user's info initialization
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    //navigation
    const navigate = useNavigate();


    //creating a user in the database
    const createUser = (email, password) => {
        let errorCreatingUser = undefined;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;

                return updateProfile(user, {
                    displayName: name
                })
            })
            .catch((error) => {
                errorCreatingUser = error.message;

                throw error
            })

        if (errorCreatingUser) {
            return errorCreatingUser;
        } else {
            return null;
        }
    }


    //authenticating the user in the database - email/password method
    const signInUser = (email, password) => {
        let errorSigningUser = undefined;

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                if (user) {
                    console.log("login successful")
                }
            })
            .catch((error) => {
                errorSigningUser = error.message;

                throw error
            })

        if (errorSigningUser) {
            return errorSigningUser;
        } else {
            return null;
        }
    }

    //checking where the user has logged in b4 or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoggedIn(true);
            } else {
                setUser(null);
            }
        })
    }, [])

    

    //logging out the user
    const logOut = () => {
        if ( user ) {
            signOut(auth).then(() => { 

                console.log('logged out')
                navigate('/fluentify/');
                setIsLoggedIn(false);
                
            })

        }
    }


    return (
        <useFirebase.Provider value={{ createUser, signInUser, name, setName, email, setEmail, password, setPassword, isLoggedIn, logOut, user }}>
            {props.children}
        </useFirebase.Provider>
    )
}

export default FirebaseContext