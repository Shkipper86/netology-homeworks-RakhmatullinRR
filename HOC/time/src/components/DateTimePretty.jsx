
export const DateTimePretty = (props) => {
  const { date } = props;

  let returnedDate = "";

  const setDate = new Date(date);
  const difference = Math.floor(
    (new Date().getTime() - setDate.getTime()) / 60000
  );

  difference < 60
    ? returnedDate = `${difference} минут назад`
    : difference < 1440
    ? returnedDate = `${Math.floor(difference/60)} часов назад`
    : returnedDate = `${Math.floor(difference/1440)} дней назад`

  return returnedDate;
}
