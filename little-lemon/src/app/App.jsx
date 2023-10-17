import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuAndContent } from "./components/layout/MenuAndContent";
import { Hero } from "./components/Hero";
import { Home } from "./pages/HomePage/Home";
import RestaurantFood from "./assets/images/restauranfood.jpg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantFood}>
                <Home />
              </Hero>
            </MenuAndContent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
