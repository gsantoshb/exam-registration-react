import React, { useEffect } from "react";
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

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />


      </Routes>
      </BrowserRouter>
  );
}

export default App;
