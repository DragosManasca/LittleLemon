import * as React from "react";
import { Highlights } from "./Highlights";
import { Testimonials } from "./Testimonials";
import { About } from "./About";

export function Home() {
  return (
    <>
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}
