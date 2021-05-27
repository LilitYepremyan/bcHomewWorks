function showWeekDay(days) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return week[days.getDay()];
}
let days = new Date("12/07/2016");

console.log(showWeekDay(days));
