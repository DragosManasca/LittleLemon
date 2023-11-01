import React from "react";

export const FormContext = React.createContext(undefined);

export const FormProvider = ({ children }) => {
  const [state, setState] = React.useState([]);

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  );
};
