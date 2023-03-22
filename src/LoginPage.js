import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { useStateValue } from "./StateProvider";

function LoginPage() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    if(user){
      console.log('Going to dashboard from login...')
      navigate('/dashboard');
    }
  
  }, [user]);

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithPopup(googleProvider)
    .then((auth) => {
      navigate("/dashboard");
    })
    .catch((error) => alert(error.message));
    
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in with Google</h1>
        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={signIn}>
          Sign in with Google
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
      </form>
    </main>
  );
}

export default LoginPage;
