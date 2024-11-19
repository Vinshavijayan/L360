const MonthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateFormator = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${
    MonthArray[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};

export default dateFormator;
