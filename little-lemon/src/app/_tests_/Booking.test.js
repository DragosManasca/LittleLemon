import { fireEvent, render, screen } from "@testing-library/react";
import { ReactContextContainer } from "../components/reactContexts/reactContextContainer";
import { BookingPage } from "../pages/BookingPage/BookingPage";
import { BookingForm } from "../pages/BookingPage/BookingForm";
import { MemoryRouter } from "react-router";

describe("Booking Form", () => {
  test("Render Booking heading", () => {
    render(
      <ReactContextContainer>
        <MemoryRouter>
          <BookingPage />
        </MemoryRouter>
      </ReactContextContainer>
    );
    const headingElement = screen.getByText(
      "Please fill out reservation details"
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("Submission is disabled if user does not complete name", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
    const formData = {
      name: "",
      date: "2023-11-05",
      time: availableTimes[0],
      guests: 0,
      occasion: "Anniversary",
    };
    const mockSetFormData = jest.fn();

    render(
      <ReactContextContainer>
        <MemoryRouter>
          <BookingForm
            formData={formData}
            setFormData={mockSetFormData}
            availableTimes={availableTimes}
          />
        </MemoryRouter>
      </ReactContextContainer>
    );

    const nameInput = screen.getByLabelText("Name*");
    fireEvent.change(nameInput, { target: { value: "" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
  });
});
