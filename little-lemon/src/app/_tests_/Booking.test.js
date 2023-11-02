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

    const guestsInput = screen.getByLabelText("Number of guests*");
    fireEvent.change(guestsInput, { target: { value: "5" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
    expect(submitButton).toBeDisabled();
  });

  test("Submission is disabled if user enters a name longer than 20 characters", () => {
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
    fireEvent.change(nameInput, {
      target: { value: "some text longer than twenty characters" },
    });

    const guestsInput = screen.getByLabelText("Number of guests*");
    fireEvent.change(guestsInput, { target: { value: "5" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
    expect(submitButton).toBeDisabled();
  });

  test("Submission is disabled if user enters a guest number bigger than 10", () => {
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
    fireEvent.change(nameInput, {
      target: { value: "Name" },
    });

    const guestsInput = screen.getByLabelText("Number of guests*");
    fireEvent.change(guestsInput, { target: { value: "11" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
    expect(submitButton).toBeDisabled();
  });

  test("Submission is disabled if there are no available tables on that day", () => {
    const availableTimes = [];
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
    fireEvent.change(nameInput, {
      target: { value: "Name" },
    });

    const guestsInput = screen.getByLabelText("Number of guests*");
    fireEvent.change(guestsInput, { target: { value: "8" } });

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
    expect(submitButton).toBeDisabled();
  });

  test("Submission is enabled if all the form is correctly completed", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
    const formData = {
      name: "Name",
      date: "2023-11-05",
      time: availableTimes[0],
      guests: 7,
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

    const submitButton = screen.getByText("Make Your Reservation");

    expect(submitButton).not.toBeDisabled();
  });
});
