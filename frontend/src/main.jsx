import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Navbar from "./components/navbar.jsx";
import LoginPage from "./components/login.jsx";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/context.js"; // Now correctly importing 'UserContext'
import NotFound from "./components/NotFound.jsx";

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>
);
