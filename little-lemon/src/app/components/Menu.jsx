import * as React from "react";
import { header_logo as Logo } from "../widgets/SVGs/index.jsx";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { burger_menu_icon as MenuIcon } from "../widgets/SVGs/index.jsx";
import { basket_icon as BasketIcon } from "../widgets/SVGs/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Nav } from "./Nav.jsx";
import { smoothScrollToElement } from "../widgets/utils/layoutUtils.js";

export function Menu() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [aboutId, setAboutId] = React.useState("about");

  const headerRef = React.useRef(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu((preValue) => !preValue);

  React.useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (!headerRef.current) {
        return;
      }

      currentScrollPosition > prevScrollPosition
        ? (headerRef.current.style.transform = "translateY(-200px)")
        : (headerRef.current.style.transform = "translateY(0)");

      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(
    () => setAboutId(location.pathname === "/" ? "about-section" : "about"),
    [location.pathname]
  );

  return (
    <header className="navbar-menu" ref={headerRef}>
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
          <a
            href={`#${aboutId}`}
            className="menu-item"
            onClick={() => {
              navigate("/");
              smoothScrollToElement("about");
            }}
          >
            About
          </a>
          <a href="/" className="menu-item">
            Menu
          </a>
          <a href="/reservation" className="menu-item">
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
