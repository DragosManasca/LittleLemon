import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuAndContent } from "./components/layout/MenuAndContent";
import { Hero } from "./components/Hero";
import { HomePage } from "./pages/HomePage/HomePage";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { ConfirmedBooking } from "./pages/BookingPage/ConfirmedBooking";
import RestaurantFoodImg from "./assets/images/restauranfood.jpg";
import RestaurantImg from "./assets/images/restaurant.jpg";
import ScrollToTop from "./widgets/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ScrollToTop>
              <MenuAndContent>
                <Hero heroImage={RestaurantFoodImg}>
                  <HomePage />
                </Hero>
              </MenuAndContent>
            </ScrollToTop>
          }
        />

        <Route
          path="/reservation"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantImg}>
                <BookingPage />
              </Hero>
            </MenuAndContent>
          }
        />

        <Route
          path="/reservation/confirm"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantImg}>
                <ConfirmedBooking />
              </Hero>
            </MenuAndContent>
          }
        />

        <Route
          path="*"
          element={
            <MenuAndContent>
              <Hero heroImage={RestaurantFoodImg}>
                <HomePage />
              </Hero>
            </MenuAndContent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
