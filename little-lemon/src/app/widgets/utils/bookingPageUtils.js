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
