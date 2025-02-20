export const formatDate = (date) => {
  if (!date) return;
  const formattedDate = new Date(date).toISOString().slice(0, 16);
  return formattedDate;
};
