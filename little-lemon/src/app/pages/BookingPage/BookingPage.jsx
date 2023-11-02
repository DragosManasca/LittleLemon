import * as React from "react";
import { BookingForm } from "./BookingForm";
import { getToday } from "../../widgets/utils/bookingPageUtils";
import { InitialTimesContext } from "../../components/reactContexts/InitialTimesContext";

const reducer = (state, action) => {
  if (action.type === "CHANGE_DATE") return action.payload.availableTimes;

  if (action.type === "BOOK_TIME") {
    const updatedState = state.filter((time) => time !== action.payload.time);
    return updatedState;
  }

  return state;
};

export function BookingPage() {
  const { getInitialTimes } = React.useContext(InitialTimesContext);
  const initialTime = getInitialTimes(getToday());
  const [availableTimes, dispatch] = React.useReducer(reducer, initialTime);
  const [formData, setFormData] = React.useState({
    name: "",
    date: getToday(),
    time: availableTimes[0],
    guests: 0,
    occasion: "Anniversary",
  });

  return (
    <section className="booking">
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
  );
}
