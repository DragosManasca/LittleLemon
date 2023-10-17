import * as React from "react";
import { header_logo as Logo } from "../widgets/SVGs/index.jsx";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { burger_menu_icon as MenuIcon } from "../widgets/SVGs/index.jsx";
import { basket_icon as BasketIcon } from "../widgets/SVGs/index.jsx";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav.jsx";

export function Menu() {
  const [showMenu, setShowMenu] = React.useState(false);

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu((preValue) => !preValue);

  return (
    <header className="navbar-menu">
      {isMobile && (
        <>
          <button className="nav-button" onClick={toggleMenu}>
            <MenuIcon />
          </button>
          <div
            style={{
              display: showMenu ? "inline" : "none",
            }}
          >
            <Nav setShowMenu={setShowMenu} />
          </div>
        </>
      )}
      <span className="logo" onClick={() => navigate("/")}>
        <Logo />
      </span>

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
