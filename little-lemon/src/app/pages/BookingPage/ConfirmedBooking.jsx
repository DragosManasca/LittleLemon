import React from "react";
import { FormContext } from "../../components/reactContexts/formContext";
import { useNavigate } from "react-router";

export function ConfirmedBooking() {
  const { state } = React.useContext(FormContext);

  const navigate = useNavigate();
  const booking = state[state.length - 1];

  return (
    <section className="booking">
      {booking ? (
        <>
          <h2 className="heading-success">Successful Booking</h2>
          <h2>Reservation Details</h2>
          <section className="booking-details">
            <span>Name:</span>
            <span>
              <strong>{booking.name}</strong>
            </span>
            <span>Reservation date:</span>
            <span>
              <strong>{booking.date}</strong>
            </span>
            <span>Reservation time:</span>
            <span>
              <strong>{booking.time}</strong>
            </span>
            <span>Number of guests:</span>
            <span>
              <strong>{booking.guests}</strong>
            </span>
            <span>Occasion:</span>
            <span>
              <strong>{booking.occasion}</strong>
            </span>
          </section>
        </>
      ) : (
        <h2 className="error">Something Went Wrong</h2>
      )}
      <button className="btn btn-tertiary" onClick={() => navigate("/")}>
        Continute to Site
      </button>
    </section>
  );
}
