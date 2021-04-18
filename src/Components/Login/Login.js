import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleImg from '../../image/Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { ServiceContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const { value, value2 } = useContext(ServiceContext)
    const [loggedInUser, setLoggedInUser] = value2;
    console.log(loggedInUser)


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user
                const signInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signInUser)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    return (
        <div className="login text-center">
            <div className="login-logo logo">
                <Link to="/">
                    <h2>ReFit<span>.</span></h2>
                </Link>
            </div>
            <div className="login-area">
                <div className="login-title">
                    <h3>Login With</h3>
                </div>
                <div className="google-login">
                    <button onClick={handleGoogleSignIn}><img src={googleImg} alt="" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};
export default Login;