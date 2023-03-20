import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import ApplicationPage from "./ApplicationPage";
import ReviewPage from "./ReviewPage";
import ConfirmationPage from "./ConfirmationPage";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
