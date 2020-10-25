import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import glogo from '../../logos/google.png';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.getItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            setUserToken();
            history.replace(from);


        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });
    }
    return (
        <div>
            <div className="container">
                <figure className=" d-flex justify-content-center my-5">
                    <img className="logo" src={logo} alt="" />
                </figure>
                <div className="parentForms">
                    <h3 className="text-center my-4">Login</h3>
                    <div className="btnStyle bg-primary d-flex justify-content-center">
                        <button onClick={handleGoogleSignIn}> <img src={glogo} alt="" />Continue With Google</button>
                    </div>
                    <h6 className="text-center">Don't have an account? <a href="http://">Create a new account</a></h6>

                </div>
            </div>
        </div>


    );
};

export default Login;