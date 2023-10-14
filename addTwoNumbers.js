import moment from "./node_modules/moment/dist/moment.js";

import { temp123 } from "./app.js";

console.log(moment(new Date()).isValid());

const temp = 23;
console.log(temp);

temp123();

// const args = process.argv.slice(2);

// if (args.length !== 2) {
//   console.log("Please provide two numbers to add.");
// } else {
//   const [num1, num2] = args.map(Number);

//   if (!isNaN(num1) && !isNaN(num2)) {
//     const sum = num1 + num2;

//     console.log(`The sum of ${num1} and ${num2} is ${sum}`);
//   } else {
//     console.log("Invalid input. Please provide valid numbers.");
//   }
// }
