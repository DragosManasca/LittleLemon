import * as React from "react";
import { close_icon as MenuIcon } from "../widgets/SVGs/index.jsx";

export function Nav({ setShowMenu }) {
  const toggleMenu = () => setShowMenu((preValue) => !preValue);
  return (
    <>
      <nav className="nav-component">
        <button className="nav-button-close" onClick={toggleMenu}>
          <MenuIcon />
        </button>

        <ul>
          <li>
            <a href="/" className="menu-item-mobile">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="menu-item-mobile">
              About
            </a>
          </li>
          <li>
            <a href="/" className="menu-item-mobile">
              Menu
            </a>
          </li>
          <li>
            <a href="/" className="menu-item-mobile">
              Reservation
            </a>
          </li>
          <li>
            <a href="/" className="menu-item-mobile">
              Order Online
            </a>
          </li>
          <li>
            <a href="/" className="menu-item-mobile">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
