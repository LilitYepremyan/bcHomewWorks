// const outer = () => {
//   const getRandomNumber = () => {
//     console.log("Random :", Math.random());
//   };
//   return getRandomNumber;
// };
// outer()();
// const get = outer()
// console.log(get)
// get()

// const innerFn = (a) => {
//   return (b) => {
//     a + b;
//   };
// };
// innerFn(4)(4);
// // ac(8)
// const add = (2)

const sum = (a) => {
  // return (b)=>{a+b}
  const part = (b) => a + b;
  return part
};
sum(2)(3)
const addOne = sum(8)
addOne(4)
// const addOne = sum(2);
// const addTen = sum(2);
// addOne(3)
// sum(3)
