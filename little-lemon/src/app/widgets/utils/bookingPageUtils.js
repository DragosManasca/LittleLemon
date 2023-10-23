export const initializeTime = () => {
  let availableTimes = [];

  for (let i = 17; i <= 22; i++) {
    availableTimes.push(`${i}:00`);
  }

  return availableTimes;
};
