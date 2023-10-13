import * as React from "react";
import { header_logo as Logo } from "../widgets/SVGs/index.jsx";

export function Menu() {
  return (
    <header className="navbar-menu">
      <Logo />
      <nav>
        <a href="/" className="menu-item">
          Home
        </a>
        <a href="/" className="menu-item">
          About
        </a>
        <a href="/" className="menu-item">
          Menu
        </a>
        <a href="/" className="menu-item">
          Reservation
        </a>
        <a href="/" className="menu-item">
          Order Online
        </a>
        <a href="/" className="menu-item">
          Login
        </a>
      </nav>
    </header>
  );
}
