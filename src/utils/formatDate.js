export const formatDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  // // 1971-04-10T00:00:00Z
  return `${year}-${month}-${day}T00:00:00Z`;
};
