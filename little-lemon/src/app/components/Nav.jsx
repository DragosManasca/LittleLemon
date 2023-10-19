import * as React from "react";
import { close_icon as MenuIcon } from "../widgets/SVGs/index.jsx";
import { smoothScrollToElement } from "../widgets/utils/layoutUtils.js";
import { useLocation, useNavigate } from "react-router-dom";

export function Nav({ setShowMenu }) {
  const [aboutId, setAboutId] = React.useState("about");

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu((preValue) => !preValue);

  React.useEffect(
    () => setAboutId(location.pathname === "/" ? "about-section" : "about"),
    [location.pathname]
  );

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
            <a
              href={`#${aboutId}`}
              className="menu-item-mobile"
              onClick={() => {
                toggleMenu();
                navigate("/");
                smoothScrollToElement("about");
              }}
            >
              About
            </a>
          </li>

          <li>
            <a href="/" className="menu-item-mobile">
              Menu
            </a>
          </li>

          <li>
            <a href="/reservation" className="menu-item-mobile">
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
