'use strict';
// In JS , There are 3 main array methods , that we use most of the time to perform data transformations.
// We create new arrays based on transforming data from the other arrays.
/*
We are talking about the MAP , FILTER , REDUCE methods.



1 - THE MAP METHOD:
-> used for looping over the arrays.
-> The map method allows us to create a new array based on the original array.

-> map returns a new array containing the results of applying an operation on all original array elements.

-> It is just like the forEach method .


2 - FILTER METHOD:
-> The filter method returns a new array containing the array elements that passed a specific test condition.

-> Like if we apply the condition current > 2 , then the new array elements should not contain element which is less than 2.



3 - REDUCE METHOD:
-> reduce method boils ('reduces') all array elements down to one signle value (adding all elements together).

-> It returns a signle value by adding all the original array elements.

*/
// Lecture - 7:

// The MAP METHOD:

const euroToUsd = 1.1;
// Suppose we want to convert euro  array to usd :
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The current array movements are in euro , let's convert it to usd.

const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD);
console.log(movements);

// Let's do the same by using for of loop.
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
// console.log(movementsUSDfor);
// we are creating a new array and push the elements manually .
// But in modern Javscript we use more functional programming approach.
const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
// with each iteration , the map method will pass the current element index and the whole array to the call back function.
// we are using just 2 mov , i.

console.log(movementsDescription);

// There is a big difference between forEach and map.
// The element of an array log to the console after each iteration in forEach method but we can't create an array for that elements. it is also called sideeffect
// We can create a new array by using map method.

// Lecture - 8 :

// Computing usernames by using map and forEach methods , in the project.

// Lecture - 9 : The Filter method:

// -> The filter method returns a new array containing the array elements that passed a specific test condition.

// -> Like if we apply the condition current > 2 , then the new array elements should not contain element which is less than 2.

const deposites = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposites);

// Using for of loop:
const depositesfor = [];
for (const mov of movements) {
  if (mov > 0) depositesfor.push(mov);
}
console.log(depositesfor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawals);
