import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuAndContent } from "./components/layout/MenuAndContent";
import { Hero } from "./components/Hero";
import { Home } from "./pages/HomePage/Home";
import { Reservation } from "./pages/ReservationPage/Reservation";
import RestaurantFoodImg from "./assets/images/restauranfood.jpg";
import RestaurantImg from "./assets/images/restaurant.jpg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantFoodImg}>
                <Home />
              </Hero>
            </MenuAndContent>
          }
        />

        <Route
          path="/reservation"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantImg}>
                <Reservation />
              </Hero>
            </MenuAndContent>
          }
        />

        <Route
          path="*"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantFoodImg}>
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
