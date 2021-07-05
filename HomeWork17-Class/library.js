class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    if (typeof title === "string") {
      this._title = title;
      return;
    }
    throw new Error("Invalid title");
  }
  get author() {
    return this._author;
  }
  set author(author) {
    if (typeof author === "string") {
      this._author = author;
      return;
    }
    throw new Error("Invalid author");
  }
  toString() {
    return `Title: ${this.title}    Author: ${this.author}`;
  }
  isTheSameBook(book) {
    if (this.title === book[0] && this.author === book[1]) {
      return true;
    }
    return false;
  }
}
class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this.bookId = bookId;
  }
  get bookId() {
    return this._bookId;
  }
  set bookId(value) {
    if (typeof value === "number") {
      this._bookId = value;
      return;
    }
    throw new Error("Invalid number");
  }
  toString() {
    return `${this.title} ${this.author} ${this.bookId}`;
  }
}

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    super(title, author);
    this.bookId = bookId;
    this.quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value === "number") {
      this._quantity = value;
      return;
    }
    throw new Error("Invalid value");
  }
  toString() {
    return ` title: ${this.title} author: ${this.author}  bookID:  ${this.bookId}  Quantity:  ${this.quantity}`;
  }
  increaseQuantityBy(amount, number) {
    return amount + number;
  }
  decreaseQuantityBy(amount, number) {
    return amount - number;
  }
}

class ReaderBook extends Book {
  constructor(title, author, bookId, quantity, expirationDate, isReturned) {
    super(title, author);
    this.bookId = bookId;
    this.quantity = quantity;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
    this.allBook = [];
  }
  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(value) {
    if (typeof value === "string") {
      this._expirationDate = value;
      return;
    }
    throw new Error("Invalid exp");
  }
  get isReturned() {
    return this._isReturned;
  }
  set isReturned(value) {
    if (typeof value === "boolean") {
      this._isReturned = value;
      return;
    }
    throw new Error("Invalid value");
  }
  toString() {
    return ` title: ${this.title} author: ${this.author}  bookID:  ${this.bookId}  Quantity:  ${this.quantity} ExpirationDate  :   ${this.expirationDate}   isReturned: ${this.isReturned}`;
  }
}

class Reader {
  constructor(firstName, lastName, readerId, books = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.books = books;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value === "string") {
      this._firstName = value;
      return;
    }
    throw new Error("Invalid value");
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName === "string") {
      this._lastName = lastName;
      return;
    }
    throw new Error("Invalid value");
  }
  get readerId() {
    return this._readerId;
  }
  set readerId(readerId) {
    if (typeof readerId === "number") {
      this._readerId = readerId;
      return;
    }
    throw new Error("Invalid value");
  }
  get books() {
    return this._books;
  }
  set books(value) {
    this._books = value;
  }
  toString() {
    return `${this.firstName}   ${this.lastName}    ${this.readerId}    ${this.books}`;
  }
  borrowBook(book, library) {
    if (library.books.includes(book) && book instanceof ReaderBook) {
      this.books.push(book);
    }
    return library.books;
  }
}

class Library {
  constructor(booksList = [], readers = []) {
    this.booksList = booksList;
    this.readers = readers;
  }
  get booksList() {
    return this._booksList;
  }
  set booksList(value) {
    this._booksList = value;
  }
  get readers() {
    return this._readers;
  }
  set readers(value) {
    this._readers = value;
  }
  doHaveBook(book) {
    if (this.books.includes(book)) {
      return true;
    }
    return false;
  }
  addBook(newBook) {
    if (books.includes(newBook)) {
      newBook.quantity++;
      return;
    }
    if (newBook instanceof LibraryBook) {
      books.push(newBook);
    }
  }
  addBooks(newBooks) {
    newBooks.forEach((el) => {
      if (books.includes(el)) {
        el.quantity++;
      } else if (el instanceof LibraryBook) {
        books.push(el);
      }
    });
  }
  checkReaderId(readerId) {
    return this.readers.find((el) => el.readerId === readerId);
  }
  lendBook(book, readeId) {
    if (this.doHaveBook(book) && this.checkReaderId(readeId)) {
      return book;
    }
  }
}

const book1 = new Book("Dorian Grey", "Oskar Wilde");
const book2 = new ReaderBook(
  "The portrait of Dorian Grey",
  "Oscar Wilde",
  1,
  1,
  "2021, 6, 15",
  true
);
const book3 = new ReaderBook(
  "One Hundred Years of Solitude",
  "Gabriel Garcia Marquez",
  2,
  2,
  "2021,5,12",
  false
);
const book4 = new LibraryBookBase("Dorian Grey", "Oskar Wilde",1)
const book5 = new LibraryBook("Dorian Grey", "Oskar Wilde",1,1)

const reader1 = new Reader("Lilit", "Yepremyan", 1);
const reader2 = new Reader("Araik", "Yepremyan", 2);

const books = [book1, book2];
const readers = [reader1, reader2];
const a = [book1,reader1]

// console.log(book1)
// console.log(book2)
// console.log(book3)
// console.log(book2.toString())
// console.log(book3.isTheSameBook(book2));
// console.log(book4.toString())
// console.log(book5.increaseQuantityBy(1,1))
// console.log(book5.decreaseQuantityBy(2,2))
console.log(reader1.borrowBook(book2,books))