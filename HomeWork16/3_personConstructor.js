class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(food) {
    const fitToEat = ["salat", "pizza", "pasta", "fruits"];
    if (fitToEat.indexOf(food) !== -1 && this.stomach.length <= 10) {
      this.stomach.push(food);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name} ${this.age}`;
  }
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `${this.name} playing with ${this.favoriteToy}`;
  }
}
const Mike = new Baby("Mike", "12", "ball");
Mike.eat("fruits");
console.log(Mike);
Mike.poop();
console.log(Mike);
console.log(Mike.play());
console.log(Mike.toString());
