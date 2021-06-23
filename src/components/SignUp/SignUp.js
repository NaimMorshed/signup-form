import React from 'react';
import './SignUp.css';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import { google as googleProvider, firebase } from '../../firebase';
import { header, emailInput, passwordInput, submitInput, forgetPassword, haveAccount } from './Elements';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const [authentication, setAuthentication] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/profile" } };

    const formSubmit = event => {
        event.preventDefault();
        alert("Under development")
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
                    <form onSubmit={formSubmit} className="login-form">
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