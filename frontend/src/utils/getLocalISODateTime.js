export const getLocalISODateTime = (date = null) => {
  const now = date ? new Date(date) : new Date(); // get date from argument or current date
  const offset = now.getTimezoneOffset(); // difference from UTC in minutes
  const localTime = new Date(now.getTime() - offset * 60000); // convert to local time
  return localTime.toISOString().slice(0, 16); // convert to ISO and remove seconds
};
