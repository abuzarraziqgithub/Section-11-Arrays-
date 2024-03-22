'use strict';
// The Magic of Chaining Methods:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = [];
const euroToUsd = 1.1;
const ChainingMethods = movements
  .filter((mov, i) => {
    if (mov > 0) console.log(deposit.push(mov));
  })
  .map((mov, i) => {
    console.log(mov * 1.1);
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(movements);
console.log(ChainingMethods);
