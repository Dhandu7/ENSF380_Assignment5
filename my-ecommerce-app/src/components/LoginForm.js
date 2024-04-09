import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = ({ switchForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { username, password } = formData;

        // Ensure both username and password fields are filled
        if (!username || !password) {
            alert('Please fill in both username and password fields.');
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                // Redirect user to product page upon successful login
                navigate('/Products');
            } else {
                // Display error message if login failed
                alert(data.error || 'Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <button onClick={switchForm}>Switch to Signup</button>
            </form>
        </div>
    );
};

export default LoginForm;
