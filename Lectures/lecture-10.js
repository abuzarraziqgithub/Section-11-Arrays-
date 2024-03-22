'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // acc starts from 0;
// console.log(balance);

// Arrow function :
const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balanceArrow);

// Using for of loop:
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
// console.log(balance2);

// we can manipulate the current balance value in the dom  , let's do it in our application.

//  we can do other stuff with reduce method:

// Finding Maximum Value:
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000
