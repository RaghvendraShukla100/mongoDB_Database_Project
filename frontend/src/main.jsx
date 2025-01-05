import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Navbar from "./components/navbar.jsx";
import Login from "./components/Login.jsx";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/context.js"; // Now correctly importing 'UserContext'

// Assuming 'user' is imported or defined
const user = {
  // user details
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>
);
