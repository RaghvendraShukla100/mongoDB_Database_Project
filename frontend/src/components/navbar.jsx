import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";
function Navbar() {
  const { user } = useContext(UserContext);
  user && console.log("from nav bar component : ", user[0].name);

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
      {/* user image in the navbar */}
      <div className="ml-20 w-12 h-12  overflow-clip rounded-full">
        {user ? (
          <img src={user[0].img} alt={user[0].name} className="w-full h-full" />
        ) : (
          <img
            src="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
