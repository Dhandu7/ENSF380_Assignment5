import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';

const Signuppage = () => {
  const history = useHistory(); 

  const switchToLogin = () => {
      history.push("./Loginpage"); 
  }
    return (
      <div>
        <Header />
        <div className="login-form">
          <h1>Login</h1>
          <form>
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
            <button onClick={switchToLogin}>Switch to Login</button>
          </form>

          
          </div>
        <Footer />
      </div>
      
    );
  }
  
  export default Signuppage;