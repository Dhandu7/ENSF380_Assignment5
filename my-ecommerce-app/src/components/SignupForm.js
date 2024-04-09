import React, { useState } from 'react';


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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password || !confirmPassword || !email) {
      alert('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password, email })
      });
      const data = await response.json();
      if (response.ok) {
          // Reset form fields after successful signup
          setFormData({
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
          });
          alert('Signup successful! Please login to continue.');
      } else {
          // Display error message if signup failed
          alert(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <button onClick={switchForm}>Switch to Login</button>
      </form>
    </div>
  );
}

export default SignupForm;
