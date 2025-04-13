import React from "react";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            
            
          </div>
          <a className="btn btn-ghost text-xl">sssMarketd</a>
        </div>
        <div className="navbar-center md:flex md:gap-3 hidden lg:flex">
          <Link className="btn btn-info" to="/">Home</Link>
          <Link className="btn btn-info" to="/about">About</Link>
          <Link className="btn btn-info" to="/contact">Contact</Link>
        </div>
        <div className="navbar-end">
          <a className="btn"><FaShopify /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
