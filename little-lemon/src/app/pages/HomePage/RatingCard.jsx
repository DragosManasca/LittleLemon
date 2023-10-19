import * as React from "react";
import Star from "../../assets/images/star.png";

export const RatingCard = ({ review }) => {
  return (
    <div className="rt-card">
      <div className="rating-item">
        <h3>Rating: </h3>
        <div className="rating">
          {[...Array(review.rating)].map((it, index) => (
            <img src={Star} alt="star" key={index} />
          ))}
        </div>
      </div>
      <div className="rating-item">
        <img
          src={review.reviewerImg}
          alt="reviewer portrait"
          className="reviewer-img"
        />
        <span className="reviewer-name">
          <h3>Name: </h3>
          <p>{review.reviewerName}</p>
        </span>
      </div>
      <div className="rating-item">
        <h3 className="review">{review.review}</h3>
      </div>
    </div>
  );
};
