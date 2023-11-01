import React from "react";
import { InitialTimesProvider } from "./InitialTimesContext";
import { FormProvider } from "./formContext";

export const ReactContextContainer = ({ children }) => {
  return (
    <InitialTimesProvider>
      <FormProvider>{children}</FormProvider>
    </InitialTimesProvider>
  );
};
