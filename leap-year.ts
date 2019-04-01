// const isLeapYear = (year:number):boolean => {
//   if (year%4 === 0) {
//     if (year%100 === 0) {
//       if (year%400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2088));

const isLeapYear = (year:number):boolean => {
  return (year%4 === 0 && (year%100 !== 0 || year%400 === 0))
}
  
console.log(isLeapYear(1900));

