import React from "react";
import data from "../../assets/files/availableBookingTimes.json";

export const InitialTimesContext = React.createContext(undefined);

export const InitialTimesProvider = ({ children }) => {
  const [initialTimes, setInitialTimes] = React.useState(
    new Map(Object.entries(data))
  );

  const getInitialTimes = (date) => {
    !initialTimes.has(date) &&
      setInitialTimes((initialTimes) =>
        initialTimes.set(date, [
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ])
      );

    return initialTimes.get(date);
  };

  const updateInitialTimes = (date, times) => {
    setInitialTimes((initialTimes) => initialTimes.set(date, times));
  };

  return (
    <InitialTimesContext.Provider
      value={{ initialTimes, updateInitialTimes, getInitialTimes }}
    >
      {children}
    </InitialTimesContext.Provider>
  );
};
