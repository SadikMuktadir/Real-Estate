import { Link, NavLink } from "react-router-dom";
import imageLogo from "../../assets/Vector.png";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={imageLogo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className="px-6 py-3 mr-3"
                to="/"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#1C3988" : "#FFF",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-6 py-3"
                to="/searchInOffers"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#1C3988" : "#FFF",
                  };
                }}
              >
                Search in offers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <div className="mr-3 px-6 py-3 btn btn-outline bg-[#1C3988] text-white font-bold">
                <button onClick={handleLogout}>Logout</button>
              </div>
              <div>{user.displayName}</div>
            </div>
          ) : (
            <div>
              <div className="mr-3 px-6 py-3 btn btn-outline bg-[#1C3988] text-white font-bold">
                <Link to="/login">Login</Link>
              </div>
              <div className="px-6 py-3 btn btn-outline bg-[#1C3988] text-white font-bold">
                <Link to="/registration">Registration</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
