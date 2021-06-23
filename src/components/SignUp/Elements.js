import email from '../../assets/email.png';
import key from '../../assets/key.png';

const header =
    <>
        <h4>SIGN UP</h4>
        <p><small className="blur-text mb-5">Get access to the website by signing up</small></p>
    </>

const emailInput =
    <>
        <div className="input-div">
            <img src={email} alt="" />
            <input className="left-padding" type="email" placeholder="Email" required />
        </div>
    </>

const passwordInput =
    <>
        <div className="input-div">
            <img src={key} alt="" />
            <input className="left-padding" type="password" placeholder="Password" required />
        </div>
    </>

const submitInput =
    <>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
    </>

const forgetPassword =
    <>
        <span className="forget-password">Forget password?</span>
    </>

const haveAccount =
    <>
        <p><small className="account-text">I have an account</small></p>
    </>

export { header, emailInput, passwordInput, submitInput, forgetPassword, haveAccount, };