import * as React from "react";
import { RatingCard } from "./RatingCard";
import { getReniews } from "../../widgets/utils/homePageUtils";

export function Testimonials() {
  const reviews = getReniews();

  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="ratings">
        {reviews.map((item) => (
          <RatingCard review={item} key={item.reviewerName} />
        ))}
      </div>
    </section>
  );
}
