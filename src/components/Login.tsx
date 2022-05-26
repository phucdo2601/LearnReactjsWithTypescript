import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem("user", "true")
        navigate("/dashboard")
    }

    return (
        <>
            <div className="login">
                <h2>Welcome to Login Page</h2>
                <p>Please login continue.</p>
                <button className="" onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login