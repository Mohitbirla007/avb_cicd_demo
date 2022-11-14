import React from 'react';
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import UserList from '../constants'

const Login = React.memo(() => {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = () => {
        const userLogin = UserList.find(findUser);
        if (userLogin) {
            navigate("/Home");
        } else {
            alert("Invalid email address or password");
        }
    }
    const findUser = (userData) => {
        return userData.email === emailAddress && userData.password === password;
    }
    return (
        <div className="loginFrame1">
            <div className="loginFrame2">
                <p>Some change in login</p>
                <input className="inputStyle" type='text' required placeholder="Email" onChange={(e) => setEmailAddress(e.target.value)} /><br />
                <input className="inputStyle" type='password' required placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <button className="submitButton" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
});

export default Login;