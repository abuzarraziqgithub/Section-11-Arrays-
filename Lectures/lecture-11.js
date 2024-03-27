'use strict';
// The Magic of Chaining Methods:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// PIPELINE:
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // new array of deposites
  .map(mov => mov * euroToUsd) // new array of euro to usd from filter array
  .reduce((acc, mov) => acc + mov, 0); // sum of elements of the  map array.

console.log(totalDepositsUSD);

// Lets go to the project file and label the ends values.

/*
-> we should not overuse chaining.
-> It can cause real performance issues for very huge array chaining.
-> It is a bad method in javascript to chain methods that mutate the underlying original array and example of that is splice method.
-> You should not chain like the splice or reverse method.

*/
