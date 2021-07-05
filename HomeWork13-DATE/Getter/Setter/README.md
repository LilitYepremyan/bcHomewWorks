##### Write an object with getter/setterfield name.

```Markdown
const obj = {
name: [], // ['name', length][]
set name,
get name,
}
console.log(obj.name)
obj.name = 'Vrezh, Artavazd';
console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]
```

```javascript
const obj = {
  _name: [],

  get name() {
    return obj._name;
  },
  set name(value) {
    let names = value.split(",");
    for (let i = 0; i < names.length; i++) {
      obj._name.push([names[i], names[i].length]);
    }
  },
};
console.log(obj.name);
obj.name = "Vrezh,Artavazd,Anna";
console.log(obj.name);
```

##### The input is object, which keys are student's names and values are array of their scores. Find the student with the best average score.

```Markdown
getBestStudent({
John: [100, 90, 80],
Bob: [100, 70, 80],
});
// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
```

```javascript
let arr1 = [100, 90, 80];
let a = arr1.reduce((acc, el) => acc + el, 0);
let b = a / arr1.length;
console.log(b);
```

##### The function should produce the same output even if dateStart is greaterthan dateEnd

```Markdown
Input                                                                                           Output
let january = new Date(2017, 0, 1); let march = new
Date(2017, 2, 1); monthsInterval(january, march)                              ['January', 'February', March']

let december = new Date(2017, 11, 1); let january =
new Date(2018, 0, 1); monthsInterval(december,
january                                                                            ['January', 'December']
```

```javascript
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
```

```javascript
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
```

##### Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

```Markdown
Input                             Output
dayOfYear("12/13/2020")            348
dayOfYear("12/17/2020")            352
dayOfYear("11/16/2020")            321
dayOfYear("1/9/2019")               9
dayOfYear("3/1/2004")               61
dayOfYear("12/31/2000")            366
```

```javascript
function dayOfYear(lastDay) {
  let firstDay = new Date(lastDay.getFullYear(), 0, 0);
  let oneDay = 3600 * 24 * 1000;
  let millisecondYear = lastDay - firstDay;
  let yearDay = millisecondYear / oneDay;
  console.log(yearDay);
}
let lastDay = new Date("01/04/2020");
dayOfYear(lastDay);
```

##### Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", or "Saturday". To illustrate, the day of the week for "12/07/2016" is "Wednesday".

```Markdown
Input                             Output
getDay("12/07/2016")            "Wednesday"
getDay("09/04/2016")             "Sunday"
getDay("12/08/2011")            "Thursday"
```

```javascript
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
```
