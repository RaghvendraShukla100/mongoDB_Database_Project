import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Navbar from "./components/navbar.jsx";
import LoginPage from "./components/login.jsx";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import { UserProvider } from "./context/userContext.jsx"; // Import UserProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      {" "}
      {/* Wrap the application with UserProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
