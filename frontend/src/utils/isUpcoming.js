import getDaysSinceEpoch from "./getDaysSinceEpoch";

const isUpcoming = (dateString) => {
  const today = new Date();
  return getDaysSinceEpoch(dateString) > getDaysSinceEpoch(today);
};

export default isUpcoming;
