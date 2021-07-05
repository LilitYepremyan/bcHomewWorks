function monthsInterval(m1, m2) {
  let months = [
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
  let month1 = m1.getMonth();
  let month2 = m2.getMonth();

  console.log(months.slice(month1, month2 + 1));
}
let firstMonth = new Date(2017, 0, 1);
let secondMonth = new Date(2017, 2, 1);
monthsInterval(firstMonth, secondMonth);
