import React, { useRef } from 'react';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import email from '../../assets/email.png';
import key from '../../assets/key.png';
import { google as googleProvider, firebase } from '../../firebase';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    // eslint-disable-next-line no-unused-vars
    const [authentication, setAuthentication] = useContext(UserContext);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/profile" } };

    const emailSignIn = event => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
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
                    <h4>SIGN IN</h4>
                    <p><small className="blur-text mb-5">Get access to the website by signing in</small></p>
                    <form onSubmit={emailSignIn} className="login-form">
                        <div className="input-div">
                            <img src={email} alt="" />
                            <input ref={emailRef} className="left-padding" type="email" placeholder="Email" required />
                        </div>
                        <div className="input-div">
                            <img src={key} alt="" />
                            <input ref={passRef} className="left-padding" type="password" placeholder="Password" required />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Sign In" />
                        <span className="forget-password">Forget password?</span>
                    </form>
                    <p><small onClick={() => history.goBack(1)} className="account-text">I don't have an account</small></p>
                    <div className="social-media mt-3">
                        <img onClick={googleSignIn} className="logo" src={google} alt="" />
                        <img onClick={facebookSignIn} className="logo" src={facebook} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignIn;