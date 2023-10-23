import * as React from "react";
import { BookingForm } from "./BookingForm";
import { initializeTime } from "../../widgets/utils/bookingPageUtils";

const reducer = (state, action) => {
  if (action.type === "SET_DATE")
    return { ...state, date: action.payload.date };

  if (action.type === "SET_TIME") {
    return { ...state, time: action.payload.time };
  }

  if (action.type === "SET_GUESTS")
    return { ...state, guests: action.payload.guests };

  if (action.type === "SET_OCCASION")
    return { ...state, occasion: action.payload.occasion };

  if (action.type === "SET_INITIAL_TIME") {
    const updatedTime = state.initialTime.filter(
      (it) => it !== action.payload.initialTime
    );
    return { ...state, initialTime: updatedTime };
  }

  return state;
};

export function BookingPage() {
  const initialTime = initializeTime();
  const [state, dispatch] = React.useReducer(reducer, {
    date: "",
    time: initialTime[0],
    guests: 0,
    occasion: "Anniversary",
    initialTime: initialTime,
  });

  return (
    <section className="booking">
      <h2>Please fill out reservation details</h2>
      <BookingForm dispatch={dispatch} state={state} />
    </section>
  );
}
