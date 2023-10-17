import * as React from "react";
import { useLocation } from "react-router-dom";
import { back_nav_icon as BackIcon } from "../widgets/SVGs";

export function Hero({ heroImage, children }) {
  const location = useLocation();

  return (
    <div className="hero">
      <div className="hero-header">
        {!location.pathname === "/" && (
          <span
            className="back-btn"
            onClick={() => console.log("to be implemented")}
          >
            <BackIcon />
          </span>
        )}
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
        </div>
      </div>
      <div className="hero-content">
        <section className="hero-info">
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn btn-primary rounded">Reserve a table</button>
        </section>
        <img src={heroImage} alt="restaurant content" className="hero-image" />
      </div>
      <>{children}</>
    </div>
  );
}
