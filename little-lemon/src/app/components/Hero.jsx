import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { back_nav_icon as BackIcon } from "../widgets/SVGs";

export function Hero({ heroImage, children }) {
  const [isHomePage, setIsHomePage] = React.useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const subtitle = isHomePage ? "Chicago" : "Reserve a Table";

  React.useEffect(
    () => setIsHomePage(location.pathname === "/" ? true : false),
    [location.pathname]
  );

  return (
    <>
      <div className="hero">
        <div className="hero-header">
          {!isHomePage && (
            <span className="back-btn" onClick={() => navigate(-1)}>
              <BackIcon />
            </span>
          )}
          <div>
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">{subtitle}</h2>
          </div>
        </div>
        {isHomePage ? (
          <div className="hero-content">
            <section className="hero-info">
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button
                className="btn btn-primary rounded"
                onClick={() => navigate("/reservation")}
              >
                Reserve a table
              </button>
            </section>
            <img
              src={heroImage}
              alt="restaurant content"
              className="hero-image-home"
            />
          </div>
        ) : (
          <div className="hero-image">
            <img src={heroImage} alt="" />
          </div>
        )}
      </div>
      <>{children}</>
    </>
  );
}
