import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const Loginpage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      <Header />
      {/* Display LoginForm if isLoginFormVisible is true, otherwise display SignupForm */}
      {isLoginFormVisible ? (
        <LoginForm switchForm={toggleForm} />
      ) : (
        <SignupForm switchForm={toggleForm} />
      )}
      <Footer />
    </div>
  );
}

export default Loginpage;
