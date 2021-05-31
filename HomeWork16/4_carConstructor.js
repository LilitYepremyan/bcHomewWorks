const Car = function (model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
};

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  const possibleDistance = this.tank * this.milesPerGallon;

  if (this.tank - distance / this.milesPerGallon <= 0) {
    this.odometer += possibleDistance;
    this.tank = 0;
    console.log(`I ran out of fuel at ${this.odometer} miles!`);
    return;
  }

  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
};

let toyota = new Car("Toyota", 28);

toyota.fill(125);
console.log(toyota);
toyota.drive(300);
console.log(toyota);
