import * as React from "react";

export function Hero({ heroImage }) {
  return (
    <div className="hero">
      <div className="hero-header">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
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
    </div>
  );
}
