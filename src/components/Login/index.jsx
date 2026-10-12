
import './index.css'
import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const [show,setHide]=useState(false)

    function nameInput(event){
        setEmail(event.target.value)
    }

    function passwordInput(event){
        setPassword(event.target.value)
    }
    function change(){
        setHide(!show)
    }


    function LoginPage(event){
        event.preventDefault()
        const user_saved=localStorage.getItem('user_details')

        if (user_saved===null){
            setMessage("Please Sigup First")
        }

        const user=JSON.parse(user_saved)
        if (user.email === email && user.password===password){
            setMessage("Login SuccessFull")
        }
        else{
            setMessage("Invaild Login Credential")
        }
    }

    return(
        <>
        <div className="login-page">
            <form className="login-form" onSubmit={LoginPage}>
                <h1 className="login-title">Login</h1>
                
                <label className="login-label">Email</label>
                <input
                    className="login-input"
                    type="email"
                    placeholder="email"
                    onChange={nameInput}
                />

                <label className="login-label">Password</label>
                <input
                    className="login-input"
                    type={show ? 'text': 'password'}
                    placeholder="password"
                    onChange={passwordInput}
                />
                <button onClick={change}>{show ? 'hide': 'show' }</button>

                <button className="login-button">Login</button>
            </form>

            <p className="login-message">{message}</p>

            <p className="login-signup-text">
                If you do not have account{" "}
                <Link className="login-signup-link" to='/SignUp'>
                    SignUp
                </Link>
            </p>
        </div>
        </>
    )
}

export default Login;
