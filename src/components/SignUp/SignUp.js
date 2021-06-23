import React, { useRef } from 'react';
import './SignUp.css';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import email from '../../assets/email.png';
import key from '../../assets/key.png';
import { google as googleProvider, firebase } from '../../firebase';
import { header, submitInput, forgetPassword, haveAccount, } from './Elements';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const [authentication, setAuthentication] = useContext(UserContext);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/profile" } };

    const emailInput =
        <>
            <div className="input-div">
                <img src={email} alt="" />
                <input ref={emailRef} className="left-padding" type="email" placeholder="Email" required />
            </div>
        </>

    const passwordInput =
        <>
            <div className="input-div">
                <img src={key} alt="" />
                <input ref={passRef} className="left-padding" type="password" placeholder="Password" required />
            </div>
        </>


    const emailSignIn = event => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then(userCredential => {
                const user = userCredential.user;
                setAuthentication({
                    loggedIn: true,
                    email: user.email,
                    displayName: "Not set",
                    photoUrl: user.photoURL,
                });
                history.replace(from);
            })
            .catch(error => alert(error.message));
    }

    const googleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const user = result.user;
                setAuthentication({
                    loggedIn: true,
                    email: user.email,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                });
                history.replace(from);
            })
            .catch(error => alert(error.message));
    }

    const facebookSignIn = () => {
        alert("Facebook signup not working at this moment");
    }

    return (
        <div className="App">
            <main className="App-header login-background">
                <div className="parent">
                    {header}
                    <form onSubmit={emailSignIn} className="login-form">
                        {emailInput}
                        {passwordInput}
                        {submitInput}
                        {forgetPassword}
                    </form>
                    {haveAccount}
                    <div className="social-media mt-3">
                        <img onClick={googleSignIn} className="logo" src={google} alt="" />
                        <img onClick={facebookSignIn} className="logo" src={facebook} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;

//43.6 Module