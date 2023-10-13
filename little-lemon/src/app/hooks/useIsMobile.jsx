import * as React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1024);
  React.useEffect(() => {
    const onWindowResize = (e) => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return isMobile;
}
