import { Cancel, Room } from '@material-ui/icons';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import './login.css';

const Login = ({ setShowLogin }) => {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    }

    try {
      await axios.post('/users/register', newUser);
      setError(false);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="loginContainer">
      <div className="logo">
        <Room />
        EjokaPin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" ref={nameRef} />
        <input type="password" placeholder="Enter password" ref={passwordRef} />
        <button className="loginButton" type="submit">Login</button>
        {
          error && (<span className="failure">Sorry, something went wrong, try again!</span>)
        }
    
      </form> 
      <Cancel className="loginCancel" onClick={() => setShowLogin(false)} />
    </div>
  )
}

export default Login;
