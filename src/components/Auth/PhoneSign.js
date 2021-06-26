import React, { useRef, useState } from 'react';
import { firebase } from '../../firebase';
import { validation } from './Validation';

const PhoneSign = () => {
    const [verifyForm, setVerifyForm] = useState(false);
    const numberRef = useRef(null);
    const verificationRef = useRef(null);

    const verifyRecaptcha = event => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'visible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                formSubmit();
            }
        });
    }

    const formSubmit = (event) => {
        event.preventDefault();
        verifyRecaptcha();

        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(numberRef.current.value, appVerifier)
            .then(confirmationResult => {
                setVerifyForm(true);
                window.confirmationResult = confirmationResult;
                const code = verificationRef.current.value;
                confirmationResult.confirm(code)
                .then(() => alert('success'))
                .catch((error) => alert(error.message));

            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="App">
            <main className="App-header login-background">
                <div className="parent">
                    <form onSubmit={formSubmit} className="login-form">
                        <div className="input-div">
                            <input ref={numberRef} className="border border-primary" type="tel" placeholder="+8801*********" required />
                        </div>
                        {
                            verifyForm &&
                            <div className="input-div">
                                <input ref={verificationRef} className="border border-primary" type="tel" placeholder="Enter Verification code" required />
                            </div>
                        }
                        {
                            verifyForm
                                ? <input className="btn btn-primary" type="submit" value="Verify" />
                                : <input className="btn btn-primary" type="submit" value="Submit" />
                        }
                        <div className="mt-3 rounded" id="recaptcha-container"></div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default PhoneSign;