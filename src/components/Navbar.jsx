import {  NavLink } from "react-router-dom";

// import { useState } from "react";

const Navbar = () => {
 
  // const [showUsername, setShowUsername] = useState(false);
  
  
  const navLink = (
    <div className="flex flex-col gap-5 lg:flex-row  ">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="hover:text-red-500">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="hover:text-red-500">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className="hover:text-red-500">
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/review" className="hover:text-red-500">
          Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:text-red-500">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-red-500">
          Contact Us
        </NavLink>
      </li>
    </div>
  );
  // const toggleUsername = () => {
  //   setShowUsername(!showUsername);
  // };

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow  bg-slate-400  rounded-box w-52 text-slate-950"
            >
              <a className=" normal-case text-xl md:hidden mb-4 text-center ">
                TasteTemple
              </a>

              {navLink}
            </ul>
          </div>

          <div className="flex items-center">
            <img className="w-28" src="src/assets/logo-no-background.png" alt="" />
          <a className="normal-case text-xl hidden md:inline text-slate-900 rounded-md p-1">
          TasteTemple
          </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-3 items-center ">
          <button className="btn btn-ghost">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
