export const ChangeDate = (date) => {
  const dateNo = new Date(date);
  return dateNo.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2");
};
