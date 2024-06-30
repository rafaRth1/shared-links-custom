export const convertDate = (objDate: Date, days: number) => {
  const numberOfMlSeconds = Number(objDate);
  const intHours = days * 24;
  const addMlSeconds = intHours * 60 * 60 * 1000;
  const newDateObj = new Date(numberOfMlSeconds - addMlSeconds);

  return newDateObj.toISOString();
};
