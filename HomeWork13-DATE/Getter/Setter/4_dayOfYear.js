function dayOfYear(lastDay) {
  let firstDay = new Date(lastDay.getFullYear(), 0, 0);
  let oneDay = 3600 * 24 * 1000;
  let millisecondYear = lastDay - firstDay;
  let yearDay = millisecondYear / oneDay;
  console.log(yearDay);
}
let lastDay = new Date("01/04/2020");
dayOfYear(lastDay);
