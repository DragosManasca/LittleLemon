import * as React from "react";
import RestaurantAImg from "../../assets/images/Mario and Adrian A.jpg";
import RestaurantBImg from "../../assets/images/restaurant chef B.jpg";

export function About() {
  return (
    <section id="about" className="about">
      <div className="headings">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div className="about-images">
        <img src={RestaurantAImg} alt="Mario and Adrian" />
        <img
          src={RestaurantBImg}
          alt="restaurant chef"
          className="overlap-img"
        />
      </div>
    </section>
  );
}
