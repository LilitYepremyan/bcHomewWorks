const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const Pagination = {
  arr: [],
  page: 0,
  init(arr, perPage) {
    this.arr = arr;
    this.perPage = perPage;
  },
  getPageItems() {
    console.log(
      this.arr.slice(
        this.page * this.perPage,
        this.page * this.perPage + this.perPage
      )
    );
  },
  nextPage() {
    let last = Math.ceil(this.arr.length / this.perPage);
    if (this.page + 1 < last) {
      ++this.page;
      return this;
    }
    return this;
  },
  firstPage() {
    this.page = 0;
  },
  lastPage() {
    this.page = Math.ceil(this.arr.length / this.perPage) - 1;
  },
  goToPage(page) {
    let last = Math.ceil(this.arr.length / this.perPage);
    if (page <= last && page > 0) {
      this.page = page - 1;
      return;
    }
    console.log("Rangge Error");
  },
};
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
