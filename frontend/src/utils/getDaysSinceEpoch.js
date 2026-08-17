const getDaysSinceEpoch = (dateString) => {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / (1000 * 60 * 60 * 24)); // Get time in milliseconds, then convert to number of days since 1.1.1970
};

export default getDaysSinceEpoch;
