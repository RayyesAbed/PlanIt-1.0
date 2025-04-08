import getDaysSinceEpoch from "./getDaysSinceEpoch";

const isToday = (dateString) => {
  const today = new Date();
  return getDaysSinceEpoch(dateString) === getDaysSinceEpoch(today);
};

export default isToday;
