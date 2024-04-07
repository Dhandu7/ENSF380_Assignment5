import React from 'react';

const LoginForm = ({ switchForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        
        // Ensure both username and password fields are filled
        if (!username || !password) {
            alert('Please fill in both username and password fields.');
            return;
        }
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className='form-group'>
                    <button type="submit">Login</button>
                </div>
                <button onClick={switchForm}>Switch to Signup</button>
            </form>
        </div>
    );
};

export default LoginForm;
