import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./LogoutPage.css";

function LogoutPage() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    if(user){
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  
  }, [user]);

  const gotoLoginPage = (e) => {
    e.preventDefault();

    if(!user){
      navigate('/login');
    }
    
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Logout Success!!</h1>
        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={gotoLoginPage}>
          Go to Login screen!!
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
      </form>
    </main>
  );
}

export default LogoutPage;
