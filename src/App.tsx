import React, { forwardRef, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './utils/FirebaseAuthSetup';

interface imageLogin {
  imgSrc: string;
}



function App() {
  const imgLogin = localStorage.getItem('profilePic') as string;

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const clickSignInWithGoogle = () => {
    signInWithGoogle();

  }

  const signoutWithGoogle = () => {
    localStorage.clear();
    forceUpdate();
  }

  return (
    <>
      <div className="App">
        {
          localStorage.getItem("name") === null ? (
            <button className="login-with-google-btn" onClick={clickSignInWithGoogle}>
              Sign in with Google
            </button>
          ) : (
            <>
              <button className="login-with-google-btn" onClick={signoutWithGoogle}>
                SignOut Google
              </button>
              <h1>{localStorage.getItem("name")}</h1>
              <h1>{localStorage.getItem("email")}</h1>
              <img src={
                imgLogin
              } alt="" />
            </>
          )
        }


      </div>
    </>
  );
}

export default App;
