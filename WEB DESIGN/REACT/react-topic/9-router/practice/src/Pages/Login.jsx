import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Login = () => {

    const login = () => {
        localStorage.getItem('login', true)
        Navigate('/')
    }
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate("/")
        }
    });

    return (
        <>
            <div>
                <Navbar />
                <h1>Login Form</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' autoComplete='given-name' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete="new-password" />
                    <button onClick={login}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
