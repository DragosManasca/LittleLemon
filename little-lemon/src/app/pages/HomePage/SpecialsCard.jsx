import * as React from "react";
import DeliveryIcon from "../../assets/images/food-delivery.png";

export const SpecialsCard = ({ dish }) => {
  return (
    <div className="card">
      <img
        src={dish.image}
        alt={dish.name.toLowerCase()}
        className="card-img"
      />
      <section className="card-info">
        <div className="card-headings">
          <h2>{dish.name}</h2>
          <span className="price">{dish.price}</span>
        </div>
        <p>{dish.description}</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="card-link">
          <span className="link-content">
            <span>Order a delivery</span>
            <img
              src={DeliveryIcon}
              alt="delivery scooter"
              className="link-icon"
            />
          </span>
        </a>
      </section>
    </div>
  );
};
