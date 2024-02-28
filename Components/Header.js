import React, { useState } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "./../Utils/useOnlineStatus";

import LOGO from "./logo2.jpg";

import { useContext } from "react";

import AuthContext from "./AuthContext.js";
import { useSelector } from "react-redux";

console.log(LOGO);

const Header = () => {
  const [isloggedin, setisloggedin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const info = useContext(AuthContext);

  const favItems = useSelector((store) => store.favs.items);

  // console.log(favItems);

  return (
    <div className="flex items-center sticky top-0 z-50 justify-between  p-4 bg-blue-500 shadow-xl">
      <div className="flex items-center text-white">
        <img
          className="w-10 border-2 rounded-xl"
          src={LOGO}
          alt="reloading image"
        />
      </div>

      <nav className="flex text-white">
        <ul className="flex px-4">
          {onlineStatus ? (
            <li className="px-4">Online Status ✅</li>
          ) : (
            <li>Online Status🔴</li>
          )}
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact Us</li>
          </Link>
          <Link to="/fav-recipes">
            <li className="px-4">Favs-{favItems.length}</li>
          </Link>
        </ul>
        {isloggedin === true ? (
          <>
            <button
              className="middle none center rounded-lg m-1 bg-yellow-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setisloggedin(false)}
            >
              Logout
            </button>
            <p className="m-1 border-2 rounded-lg bg-green-400">
              {info.username}
            </p>
          </>
        ) : (
          <button
            className="middle none center rounded-lg m-1 bg-green-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => setisloggedin(true)}
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
