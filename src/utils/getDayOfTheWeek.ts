export function getDayOfTheWeek(date: string) {
  const parsedDate = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[parsedDate.getDay()];
}
