import React from "react";
import { NavLink } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginPage from "./login";

function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 w-full text-gray-100 h-16 flex justify-center items-center bg-gray-900"
      style={{ zIndex: 9999 }}
    >
      <ul className="flex justify-center text-xl gap-5 font-semibold uppercase w-fit ">
        <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              `hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              `hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dummy"
            className={({ isActive }) =>
              `hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`
            }
          >
            dummy
          </NavLink>
        </li>
      </ul>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
