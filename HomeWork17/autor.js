class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string") {
      this._name = name;
      return;
    }
    throw new Error("Enter your name");
  }

  get email() {
    return this._email;
  }
  set email(email) {
    let checkEmail =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (checkEmail.test(email)) {
      this._email = email;
      return;
    }
    throw new Error("Enter your email");
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (gender === "male" || gender === "female") {
      this._gender = gender;
      return;
    }
    throw new Error("Enter your gender");
  }
  toString() {
    return `name:${this._name}  email:${this._email}  gender:${this._gender}`;
  }
}

class Book extends Author {
  constructor(title, price, quantity, ...args) {
    super(...args);
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    if (typeof title === "string") {
      this._title = title;
      return;
    }
    throw new Error("Error");
  }
  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price === "number") {
      this._price = price;
      return;
    }
    throw new Error("Error");
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    if (typeof quantity === "number") {
      this._quantity = quantity;
      return;
    }
    throw new Error("Error");
  }
  getProfit() {
    return this._price * this._quantity;
  }
  toString() {
    return ` ${this._name} ${this._title}  ${this._price}  ${this._quantity}`;
  }
}

let author1 = new Author();
let book = new Book();
// book.name = "Oscar Wilde";
// book.title = "The portrait of Dorian Grey";
// book.price = 2;
// book.quantity = 3;
// console.log(book.getProfit());
// console.log(book.toString());
// author1.name = 12;
// let book = new Book();
// book.title = 12;
// console.log(author1.toString());
// book.price = "sasa"
// book.quantity = "vsg"
// author1.email = "lilit.yepremyan@gmailcom"
// author1.gender = "male"
// console.log(author1.gender);
// author1.name="Oscar Wilde"
// console.log(author1.name);
// console.log(author1.toString());
// console.log((author1.name = 12));
// console.log((author1.email = "book"));
// console.log((book.title = 1));
// console.log((book.quantity = "book"));
// console.log(book.price = "book"));
// book.title = 345678;
// book.price= "book"
// book.quantity = "book"
