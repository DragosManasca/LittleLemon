import { fireEvent, render, screen } from "@testing-library/react";
import { BookingPage } from "../pages/BookingPage/BookingPage";
import { BookingForm } from "../pages/BookingPage/BookingForm";

describe("Booking Form", () => {
  test("Render Booking heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(
      "Please fill out reservation details"
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("Submission is disabled if user does not complete name", () => {
    const formData = {
      name: "",
      date: "2023-11-05",
      time: ["17:00", "18:00", "19:00", "20:00"],
      guests: 0,
      occasion: "Anniversary",
    };

    render(<BookingForm formData={formData} />);

    const nameInput = screen.getByLabelText(/Name*/);
    fireEvent.change(nameInput, { target: { value: "" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
  });
});
