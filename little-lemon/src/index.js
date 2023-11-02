import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/root.less";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { ReactContextContainer } from "./app/components/reactContexts/reactContextContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactContextContainer>
      <App />
    </ReactContextContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
