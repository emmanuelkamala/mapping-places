import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="logo"></div>
      <form>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <button>Register</button>
      </form>
      
    </div>
  )
}

export default Register;
