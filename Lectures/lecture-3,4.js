'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// In order to check the movement of withdraw and deposite of each array element , we can simply create for of loop to loop over ther array to get data.

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${movement}`);
//   }
// }

console.log(`
### forEach Method ####`);
console.log('\n');
// we can do it in a very easy way using forEach method.
// It will pick the current element of the array as an argument
// It is also higher order function , means it has call back function .
//  It will call after each itertion
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});
// Here's how it works:
//  0 : function(200)
//  1 : function(450)
//  2 : function(400)
//  ...
console.log('\n');
console.log('\n');
console.log('\n');

// Logging Indexes:
// By using for of loop , would call entries method , and also save the index and value by using destructuring array:
console.log(`
### Index in for of loop ####`);
console.log('\n');

for (const [i, movement] of movements.entries()) {
  // the first i is index and the mov is element
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${movement}`);
  }
}
console.log('\n');
console.log('\n');
console.log('\n');

console.log(`
### Index in forEach loop ####`);
console.log('\n');

// By using forEach , it is very easy:
// The first para is element and the second is index , the thirs is the entire array.
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov} `);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// the break and continue stats doesn't work in forEach.
// It will loop over the entire array

console.log('\n');
console.log('\n');
console.log('\n');
console.log(`
### forEach loop for Maps and Sets ####`);
console.log('\n');

// Lecture 3 :
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

const currencieUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currencieUnique);
currencieUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});
