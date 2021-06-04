const Airplane = {
  takeOff() {
    this.isFlaying = true;
  },
  land() {
    this.isFlaying = false;
  },
};
const Jet = Object.create(Airplane);
Jet.isFlaying = false;
Jet.takeOff();
console.log(Jet);
Jet.land();
console.log(Jet);
