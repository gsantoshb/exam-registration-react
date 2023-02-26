import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
