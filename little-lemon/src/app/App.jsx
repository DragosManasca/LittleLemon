import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuAndContent } from "./components/layout/MenuAndContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuAndContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
