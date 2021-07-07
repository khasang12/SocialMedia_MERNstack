import './login.css'
export default function Login(){
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginLeft">
                    <h3 className="loginLogo">fakebook</h3>
                    <span className="loginDesc">Facebook helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <form className="loginFormContainer">
                        <input type="text" className="emailInput" placeholder="Email address or phone number"></input>
                        <input type="password" className="passwordInput" placeholder="Password"></input>
                        <button type="submit" className="loginButton">Log In</button>
                        <hr className="solid"></hr>
                        <button type="submit" className="createButton">Create New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}