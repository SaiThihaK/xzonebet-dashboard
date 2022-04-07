export const ChangeDate = (date) => {
  const dateNo = new Date(date);
  return dateNo.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2");
};

export const getResDate = (date) => {
  let d = new Date(date);
  let ResDate = d.toISOString().split("T")[0];
  return ResDate;
};
