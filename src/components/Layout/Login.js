import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPEgWiWzichW_XH_xZCBaECXkZOTBqyxc';


    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);

        localStorage.setItem('token', data.idToken);
        localStorage.setItem('expirationTime', expirationTime.toISOString());
        localStorage.setItem('user-email',enteredEmail);

        authCtx.login(data.idToken, expirationTime.toISOString());
        console.log('not-working');
        // Redirect to the '/store' route
        navigate('/store');
        console.log('working');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container-auth">
      <section className="auth">
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="actions">
            {!isLoading && <button>Login</button>}
            {isLoading && <p>Sending request...</p>}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
