// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyDSL5guixKWDTtbdnwxKd9MzOOWgKcNpmo",
    authDomain: "net-clone-94ce3.firebaseapp.com",
    projectId: "net-clone-94ce3",
    storageBucket: "net-clone-94ce3.firebasestorage.app",
    messagingSenderId: "41729928244",
    appId: "1:41729928244:web:d751b3960490308831ee61",
    measurementId: "G-K2L26LFJZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code)

    }
}

const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        toast.error(error.code)
        console.log(error)

    }
}

const logout = async () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }