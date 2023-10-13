import * as React from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

export function MenuAndContent(props) {
  return (
    <div className="container">
      <div></div>
      <section>
        <Menu />
        <main>{props.children}</main>
        <Footer />
      </section>
      <div></div>
    </div>
  );
}
