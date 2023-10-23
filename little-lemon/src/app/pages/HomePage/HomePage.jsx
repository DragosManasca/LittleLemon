import * as React from "react";
import { Highlights } from "./Highlights";
import { Testimonials } from "./Testimonials";
import { About } from "./About";

export function HomePage() {
  return (
    <>
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}
