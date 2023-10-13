import * as React from "react";

export function Hero({ heroImage }) {
  return (
    <div className="hero">
      <section>
        <h1 className="title">Little Lemon</h1>
      </section>
      <img src={heroImage} alt="restaurant content" />
    </div>
  );
}
