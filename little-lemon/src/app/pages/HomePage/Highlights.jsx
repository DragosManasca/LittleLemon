import * as React from "react";
import { SpecialsCard } from "./SpecialsCard";
import { getWeeksSpecials } from "../../widgets/utils/homePageUtils";

export function Highlights() {
  const weekSpecials = getWeeksSpecials();

  return (
    <section className="highlights">
      <div className="headings">
        <h1>This weeks specials!</h1>
        <button className="btn btn-primary btn-short">Order Online</button>
      </div>
      <section className="presentation">
        {weekSpecials.map((item) => (
          <SpecialsCard dish={item} key={item.name} />
        ))}
      </section>
    </section>
  );
}
