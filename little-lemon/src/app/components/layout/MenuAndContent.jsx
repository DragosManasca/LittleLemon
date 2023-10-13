import * as React from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

export function MenuAndContent(props) {
  return (
    <>
      <Menu />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
