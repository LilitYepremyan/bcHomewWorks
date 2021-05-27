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
  let result = [];
  let start;
  let end;
  if (m1.getFullYear() < m2.getFullYear()) {
    month1 = m1.getMonth();
    month2 = m2.getMonth();
  } else {
    month1 = m2.getMonth();
    month2 = m1.getMonth();
  }
  if (month1 < month2) {
    for (let i = month1; i < month2; i++) {
      result.push(months[i]);
    }
  } else {
    for (let i = month1; i <= 11; i++) {
      result.push(months[i]);
    }
    for (let i = 0; i <= month2; i++) {
      result.push(months[i]);
    }
  }
  console.log(result);
}
let december = new Date(2017, 3, 1);
let january = new Date(2018, 7, 1);

monthsInterval(december, january);
