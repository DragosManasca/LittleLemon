import * as React from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

export function MenuAndContent(props) {
  return (
    <div id="app-layout" className="container">
      <section>
        <Menu />
        <main className="body">{props.children}</main>
        <Footer />
      </section>
    </div>
  );
}
