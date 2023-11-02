import * as React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const element = document.getElementsByTagName("html")[0];
    console.log(element);
    element && element.scroll(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
