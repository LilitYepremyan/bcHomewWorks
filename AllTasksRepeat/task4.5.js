// const checkIsMultiple = (number) => {
//   if (typeof number === "number" && !Number.isNaN(number)) {
//     if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
//       return `${number} is a multiple of 3 , 5  and 7.`;
//     }
//     if (number % 3 === 0 && number % 5 === 0) {
//       return `${number} is a multiple of 3 and 5 .`;
//     }
//     if (number % 5 === 0 && number % 7 === 0) {
//       return `${number} is a multiple of 5 and 7.`;
//     }
//     if (number % 3 === 0 && number % 7 === 0) {
//       return `${number} is a multiple of 3 and 7.`;
//     }
//     if (number % 3 === 0) {
//       return `${number} is a multiple of 3 .`;
//     }
//     if (number % 5 === 0) {
//       return `${number} is a multiple of 5 .`;
//     }
//     if (number % 7 === 0) {
//       return `${number} is a multiple of 7 .`;
//     }
//     return ` ${number} is not a multiple of 3, 5 or 7.`
//   }
// };
// console.log(checkIsMultiple(218));

// const checkIsMultiple = (number) => {
//   if (typeof number === "number" && !Number.isNaN(number)) {
//     if (number % 3 === 0) {
//       if (number % 5 === 0) {
//         if (number % 7 === 0) {
//           return `${number} is a multiple of 3 , 5  and 7.`;
//         }
//         return `${number} is a multiple of 3 and 5 .`;
//       }
//       if (number % 7 === 0) {
//         return `${number} is a multiple of 3 and 7.`;
//       }
//       return `${number} is a multiple of 3.`;
//     }
//     if (number % 5 === 0) {
//       if (number % 7 === 0) {
//         return `${number} is a multiple of 5  and 7.`;
//       }
//       return `${number} is a multiple of 5 .`;
//     }
//   }
//   if (number % 7 === 0) {
//     return `${number} is a multiple of 7 .`;
//   }
//   return ` ${number} is not a multiple of 3, 5 or 7.`;
// };
// console.log(checkIsMultiple(421));


// const checkIsMultiple = (number) => {
//     const checkNumbers = [3, 5, 7];
//     let result = `${number} is a multiple of `;
//     for(let i = 0; i < checkNumbers.length; i++){
//         if(number % checkNumbers[i] === 0){
//             result += `${checkNumbers[i]}, `
//         }
//     }
//     if(result === `${number} is a multiple of `) return `${number} is not a multiple of 3, 5 or 7.`
//     return result.slice(0, result.length - 2)
// }

// console.log(checkIsMultiple(420))
