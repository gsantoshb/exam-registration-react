import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import ApplicationPage from "./ApplicationPage";
import ReviewPage from "./ReviewPage";
import ConfirmationPage from "./ConfirmationPage";
import { useStateValue } from "./StateProvider";
import PrivateRoute from "./PrivateRoute";
import { auth } from "./firebase";
import LogoutPage from "./LogoutPage";

function App() {

  const [{}, dispatch] = useStateValue();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        setIsAuth(true);
      } 
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element ={<PrivateRoute isAuth = {isAuth}/>} >
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route element ={<PrivateRoute isAuth = {isAuth} />} >
            <Route path="/application" element={<ApplicationPage />} />
          </Route>
          <Route element ={<PrivateRoute isAuth = {isAuth} />} >
            <Route path="/review" element={<ReviewPage />} />
          </Route>
          <Route element ={<PrivateRoute isAuth = {isAuth} />} >
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />


      </Routes>
      </BrowserRouter>
  );
}

export default App;
