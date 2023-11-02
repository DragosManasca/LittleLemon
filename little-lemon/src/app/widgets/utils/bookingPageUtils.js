export const getToday = () => {
  const date = new Date();
  const month =
    date.getMonth().toString().length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const day =
    date.getDate().toString().length < 2
      ? `0${date.getDate()}`
      : date.getDate();
  const today = `${date.getFullYear()}-${month}-${day}`;

  return today;
};

export const validateName = (name) => {
  if (name.length < 1) return "Name is required";

  if (name.length > 20) return "Name should not exceed 20 charachters";

  return "";
};

export const validateGuests = (guests) => {
  if (Number(guests) < 1) return "Number of guests is required";

  if (Number(guests) > 10) return "You can book a table for maximum 10 guests";

  return "";
};

export const validateTime = (time, date) => {
  if (!time) return `No table is available on ${date}`;

  if (!isTimeValidForDate(date, time)) return "Book 2-hour advance notice";

  return "";
};

const isTimeValidForDate = (date, time) => {
  if (getToday() === date) {
    const crtTime = new Date().getHours();

    return crtTime + 2 < Number(time.slice(0, 2));
  }

  return true;
};
