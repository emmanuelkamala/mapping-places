import { Room } from '@material-ui/icons';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import './register.css';

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    try {
      await axios.post('/users/register', newUser);
      setError(false);
      setSuccess(true);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="registerContainer">
      <div className="logo">
        <Room />
        EjokaPin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" ref={nameRef} />
        <input type="email" placeholder="Enter email" ref={emailRef} />
        <input type="password" placeholder="Enter password" ref={passwordRef} />
        <button className="registerButton" type="submit">Register</button>
        {
          success && (<span className="success">Successful. You can login now!</span>)
        }
        {
          error && (<span className="failure">Sorry, something went wrong, try again!</span>)
        }
    
      </form>
      
    </div>
  )
}

export default Register;
