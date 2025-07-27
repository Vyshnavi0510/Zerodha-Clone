import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  function handleLogout() {
    localStorage.removeItem("access_token");
  }
  return (
    <>
      <header>
        <div className="navbar left-navbar">
          <ul className="nav-links">
            <li>
              <a href="#">
                NIFTY 50 <span className="fstspan">25647.74</span>
                <span className="scndspan"> 88.80(0.78%)</span>
              </a>
            </li>
            <li>
              <a href="#">
                SENSEX <span className="fstspan">8565.54</span>
                <span className="scndspan"> 756.80(0.64%)</span>
              </a>
            </li>
          </ul>
        </div>
        <nav className="navbar right-navbar">
          <div className="logo">
            <img
              src="https://kite.zerodha.com/static/images/kite-logo.svg"
              width={50}
            />
          </div>
          <div className="links-container">
            <ul className="nav-links navlinks">
              <li>
                <NavLink to="/DashBoard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/Orders">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/Holdings">Holdings</NavLink>
              </li>
              <li>
                <NavLink to="/Positions">Positions</NavLink>
              </li>
              <li>
                <NavLink to="/Bids">Bids</NavLink>
              </li>
              <li>
                <NavLink to="/Funds">Funds</NavLink>
              </li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
