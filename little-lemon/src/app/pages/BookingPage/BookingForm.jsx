import * as React from "react";

export function BookingForm({ state, dispatch }) {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "date":
        dispatch({ type: "SET_DATE", payload: { date: value } });
        break;
      case "time":
        dispatch({ type: "SET_TIME", payload: { time: value } });
        break;
      case "guests":
        dispatch({ type: "SET_GUESTS", payload: { guests: value } });
        break;
      case "occasion":
        dispatch({ type: "SET_OCCASION", payload: { occasion: value } });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className="booking-form">
        <div className="detail">
          <label htmlFor="reservation-date">Choose date</label>
          <input
            aria-labelledby="reservation-date"
            type="date"
            name="date"
            id="reservation-date"
            value={state.date}
            onChange={handleChange}
          />
        </div>
        <div className="detail">
          <label htmlFor="reseravtion-time">Choose time</label>
          <select
            aria-labelledby="reseravtion-time"
            id="reseravtion-time"
            name="time"
            value={state.time}
            onChange={handleChange}
          >
            {state.initialTime.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="detail">
          <label htmlFor="guests">Number of guests</label>
          <input
            aria-labelledby="guests"
            className="special"
            type="number"
            name="guests"
            min="1"
            max="10"
            id="guests"
            value={state.guests}
            onChange={handleChange}
          />
        </div>
        <div className="detail">
          <label htmlFor="occasion">Occasion</label>
          <select
            aria-labelledby="occasion"
            id="occasion"
            name="occasion"
            value={state.ocasion}
            onChange={handleChange}
          >
            <option>Anniversary</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </div>
        <input
          className="btn btn-submit"
          type="button"
          value="Make Your Reservation"
          onClick={() => {
            dispatch({
              type: "SET_INITIAL_TIME",
              payload: { initialTime: state.time },
            });
            console.log("bla", state);
          }}
        />
      </form>
    </>
  );
}
