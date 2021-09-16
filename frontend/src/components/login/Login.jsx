import { Cancel, Room } from '@material-ui/icons';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import './login.css';

const Login = ({ setShowLogin, myStorage, setCurrentUser }) => {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    }

    try {
      const res = await axios.post('/users/login', user);
      myStorage.setItem("user", res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
      setError(false);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginLogo">
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
