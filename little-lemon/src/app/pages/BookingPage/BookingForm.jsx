import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InitialTimesContext } from "../../components/reactContexts/InitialTimesContext";
import { getToday } from "../../widgets/utils/bookingPageUtils";
import { FormContext } from "../../components/reactContexts/formContext";

export function BookingForm({
  formData,
  setFormData,
  availableTimes,
  dispatch,
}) {
  const { updateInitialTimes, getInitialTimes } =
    React.useContext(InitialTimesContext);
  const { state, setState } = React.useContext(FormContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "date") {
      const times = getInitialTimes(value);

      dispatch({
        type: "CHANGE_DATE",
        payload: { availableTimes: times },
      });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = [...state];
    data.push(formData);
    setState(data);
    dispatch({ type: "BOOK_TIME", payload: { time: formData.time } });
    setTimeout(() => navigate(location.pathname + "/confirm"), 100);
  };

  React.useEffect(() => {
    updateInitialTimes(formData.date, availableTimes);
    setFormData({ ...formData, time: availableTimes[0] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableTimes]);

  return (
    <>
      <h2>Please fill out reservation details</h2>
      <form className="booking-form">
        <div className="detail">
          <label htmlFor="reservation-name" aria-label="reservation-name">
            Name
          </label>
          <input
            aria-labelledby="reservation-name"
            type="text"
            name="name"
            id="reservation-name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
          />
        </div>
        <div className="detail">
          <label htmlFor="reservation-date" aria-label="reservation-date">
            Choose date
          </label>
          <input
            aria-labelledby="reservation-date"
            type="date"
            name="date"
            id="reservation-date"
            min={getToday()}
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="detail">
          <label htmlFor="reseravtion-time" aria-label="reseravtion-time">
            Choose time
          </label>
          <select
            aria-labelledby="reseravtion-time"
            id="reseravtion-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="detail">
          <label htmlFor="guests" aria-label="guests">
            Number of guests
          </label>
          <input
            aria-labelledby="guests"
            className="special"
            type="number"
            name="guests"
            min="1"
            max="10"
            id="guests"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>
        <div className="detail">
          <label htmlFor="occasion" aria-label="occasion">
            Occasion
          </label>
          <select
            aria-labelledby="occasion"
            id="occasion"
            name="occasion"
            value={formData.ocasion}
            onChange={handleChange}
          >
            <option>Anniversary</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </div>
        <input
          className="btn btn-submit"
          type="submit"
          value="Make Your Reservation"
          aria-label="On Click"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
