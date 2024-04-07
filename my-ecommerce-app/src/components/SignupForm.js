import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SignupForm = ({ switchForm }) => { 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });

  const { username, password, confirmPassword, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword || !email) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }

    <Navigate to="./LoginForm" replace />;
  };

  return (
    <div className="login-form">
      <h1>Signup</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" value={username} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <button onClick={switchForm}>Switch to Login</button>
      </form>
    </div>
  );
}

export default SignupForm;
