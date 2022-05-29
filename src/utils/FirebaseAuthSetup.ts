// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS-VEcrniTALg50NvXRcNxSP_GCRdESlE",
  authDomain: "l-auth-reactjs-b01.firebaseapp.com",
  projectId: "l-auth-reactjs-b01",
  storageBucket: "l-auth-reactjs-b01.appspot.com",
  messagingSenderId: "809060496095",
  appId: "1:809060496095:web:e323dd052472b0e9d3ef6a",
};

/**
 * Initialize Firebase
 */
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// let name : string = "";

export const signInWithGoogle =() => {
    signInWithPopup(auth, provider)
        .then((result : any) => {
            console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        
}