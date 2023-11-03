import * as React from "react";
import { Error } from "../../widgets/Error";
import { useLocation, useNavigate } from "react-router-dom";
import { InitialTimesContext } from "../../components/reactContexts/InitialTimesContext";
import { FormContext } from "../../components/reactContexts/formContext";
import {
  getToday,
  validateGuests,
  validateName,
  validateTime,
} from "../../widgets/utils/bookingPageUtils";

export function BookingForm({
  formData,
  setFormData,
  availableTimes,
  dispatch,
}) {
  const [nameError, setNameError] = React.useState("");
  const [guestsError, setGuestsError] = React.useState("");
  const [timeError, setTimeError] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);

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

  const validateForm = (formData) => {
    let isFormValid = true;

    if (formData.name.length < 1 || formData.name.length > 20) {
      setNameError(validateName(formData.name));
      isFormValid = false;
    }

    if (Number(formData.guests) < 1 || Number(formData.guests) > 10) {
      setGuestsError(validateGuests(formData.guests));
      isFormValid = false;
    }

    return isFormValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      let data = [...state];
      data.push(formData);
      setState(data);
      dispatch({ type: "BOOK_TIME", payload: { time: formData.time } });
      setTimeout(() => navigate(location.pathname + "/confirm"), 100);
    }
  };

  React.useEffect(
    () =>
      setIsDisabled(
        Boolean(nameError) || Boolean(guestsError) || Boolean(timeError)
      ),
    [nameError, guestsError, timeError]
  );

  React.useEffect(() => {
    updateInitialTimes(formData.date, availableTimes);
    setFormData(() => {
      return { ...formData, time: availableTimes[0] };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableTimes, formData.date]);

  React.useEffect(() => {
    setTimeError(validateTime(formData.time, formData.date));
  }, [formData.time, formData.date]);

  return (
    <>
      <h2>Please fill out reservation details</h2>
      <form className="booking-form">
        <div className="detail">
          <label htmlFor="reservation-name" aria-label="reservation-name">
            Name*
          </label>
          <span className="form-control">
            <input
              className={`${nameError && "error"}`}
              aria-label="reservation-name"
              aria-errormessage={nameError}
              type="text"
              name="name"
              id="reservation-name"
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => {
                handleChange(e);
                setNameError(validateName(e.target.value));
              }}
            />
            {nameError && <Error>{nameError}</Error>}
          </span>
        </div>
        <div className="detail">
          <label htmlFor="reservation-date" aria-label="reservation-date">
            Choose date*
          </label>
          <span className="form-control">
            <input
              aria-label="reservation-date"
              type="date"
              name="date"
              id="reservation-date"
              min={getToday()}
              value={formData.date}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="detail">
          <label htmlFor="reseravtion-time" aria-label="reseravtion-time">
            Choose time*
          </label>
          <span className="form-control">
            <select
              className={`${timeError && "error"}`}
              aria-label="reseravtion-time"
              id="reseravtion-time"
              name="time"
              value={formData.time}
              onChange={(e) => {
                handleChange(e);
                setTimeError(validateTime(e.target.value, formData.date));
              }}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            {timeError && <Error>{timeError}</Error>}
          </span>
        </div>
        <div className="detail">
          <label htmlFor="guests" aria-label="guests">
            Number of guests*
          </label>
          <span className="form-control">
            <input
              aria-label="guests"
              className={`special ${guestsError && "error"}`}
              type="number"
              name="guests"
              min="1"
              max="10"
              id="guests"
              value={formData.guests}
              onChange={(e) => {
                handleChange(e);
                setGuestsError(validateGuests(e.target.value));
              }}
            />
            {guestsError && <Error>{guestsError}</Error>}
          </span>
        </div>
        <div className="detail">
          <label htmlFor="occasion" aria-label="occasion">
            Occasion*
          </label>
          <span className="form-control">
            <select
              aria-label="occasion"
              id="occasion"
              name="occasion"
              value={formData.ocasion}
              onChange={handleChange}
            >
              <option>Anniversary</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </span>
        </div>
        <input
          className="btn btn-submit"
          type="submit"
          value="Make Your Reservation"
          aria-label="On Click"
          disabled={isDisabled}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
