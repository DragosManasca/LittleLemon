import * as React from "react";
import { header_logo as Logo } from "../widgets/SVGs/index.jsx";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { burger_menu_icon as MenuIcon } from "../widgets/SVGs/index.jsx";
import { basket_icon as BasketIcon } from "../widgets/SVGs/index.jsx";

export function Menu() {
  const isMobile = useIsMobile();

  return (
    <header className="navbar-menu">
      {isMobile && (
        <button className="nav-button" onClick={() => console.log("open menu")}>
          <MenuIcon />
        </button>
      )}
      <Logo />
      {!isMobile && (
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
      )}
      {isMobile && (
        <button
          className="nav-button"
          onClick={() => console.log("to implement see shopping cart")}
        >
          <BasketIcon />
        </button>
      )}
    </header>
  );
}
