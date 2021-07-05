class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName === "string") {
      this._firstName = firstName;
    }
    throw new Error("Error");
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName === "string") {
      this._lastName = lastName;
      return;
    }
    throw new Error("Error");
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (typeof gender === "string") {
      this._gender = gender;
      retu;
      rn;
    }
    throw new Error("Error");
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age === "number") {
      this._age = age;
      return;
    }
    throw new Error("Error");
  }
  toString() {
    return `${this._firstName} ${this._lastName} ${this._age} ${this._gender}`;
  }
}

let user1 = new Person("Name", "Surname", "female", 23);
//console.log(user1.toString()); // Name Surname, 23 years old.

class Student extends Person {
  constructor(year, fee, program, ...args) {
    super(...args);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    if (typeof year === "number") {
      this._year = year;
      return;
    }
    throw new Error("Error");
  }
  get fee() {
    return this._fee;
  }
  set fee(fee) {
    if (typeof fee === "number") {
      this._fee = fee;
      return;
    }
  }
  get program() {
    return this._program;
  }
  set program(value) {
    if (!Array.isArray(value)) {
      this._program = value;
      return;
    }
    throw new Error("Argument must be an array");
  }
  isAllPassed() {
    return this._program.reduce((acc, el) => acc + el.grade, 0) > 50;
  }
  passExam() {
    if (this.isAllPassed()) {
      this.year++;
      console.log(this._year);
      if (this.isAllPassed === false) {
        return "You have not moved to the next course";
      }
      return "You have moved to the next course";
    }
  }
  toString() {
    return super.toString();
  }
}

const student = [
  5,
  1000,
  [
    { programName: "English", grade: 40 },
    { programName: "Physics", grade: 20 },
  ],
  "Lilit",
  "Yepremyan",
  "female",
  24,
];

const firstStudent = new Student(...student);
firstStudent.passExam();
//console.log(firstStudent.isAllPassed());
//console.log(student1());
// console.log(Person.toString());
