import { render, screen } from "@testing-library/react";
import { BookingPage } from "../pages/BookingPage/BookingPage";

test("Render Booking heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(
    "Please fill out reservation details"
  );
  expect(headingElement).toBeInTheDocument();
});

// test("Initial Times available", () => {
//   const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   const initialTimes = jest.fn();
//   render(<BookingPage initialTimes={initializeTime} />);
//   const res = initialTimes();
//   expect(res).toBe(expectedValue);
// });
