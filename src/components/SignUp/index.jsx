import './index.css'
import {  useState } from "react"
import { Link } from "react-router-dom"

function SignUp(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMEssage]=useState('')
    const [show,setHide]=useState(false)

    function NameInput(event){
        setName(event.target.value)
    }

    function PasswordInput(event){
        setPassword(event.target.value)
    }

    function emailInput(event){
        setEmail(event.target.value)
    }
    function change(){
        setHide(!show)

    }
    function SignUpPage(event){
        event.preventDefault()

        if (name=='' || email=='' || password==''){
            setMEssage('all the details are required')
            return
        }

        console.log("hello")

        const user={
            email:email,
            password:password
        }

        localStorage.setItem("user_details",
            JSON.stringify(user)
        )

        alert('signUp Succcessfull')
    }

    return(
        <>
        <div className="signup-page">
            <form className="signup-form" onSubmit={SignUpPage}>
                <h1 className="signup-title">SignUp</h1>

                <label className="signup-label">Name</label>
                <input
                    className="signup-input"
                    type="name"
                    placeholder="Name"
                    onChange={NameInput}
                    value={name}
                />

                <label className="signup-label">Email</label>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="email"
                    onChange={emailInput}
                    value={email}
                />

                <label className="signup-label">Password</label>
                <input
                    className="signup-input"
                    type={show ? 'text' :'password'}
                    placeholder="password"
                    onChange={PasswordInput}
                    value={password}
                />
                <button onClick={change}>{show ? 'hide' : 'show'}</button>

                <button className="signup-button">SignUp</button>
                <p  style={{color:'red'}}>{message}</p>
            </form>

            <p className="signup-login-text">
                If you already have account{" "}
                <Link className="signup-login-link" to='/'>
                    Login
                </Link>
            </p>
            
        </div>
        </>
    )
}

export default SignUp
