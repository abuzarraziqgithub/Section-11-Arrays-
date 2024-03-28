'use strict';
// The findIndex Method:
// The findIndex works as the same as the find method.
// The difference is , the findIndex method returns the index of an element.
// Let's implement it into the project.

// Lecture - 16 The some and every Method:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY:
console.log(movements.includes(200)); // true

// CONDITION:
console.log(movements.some(mov => mov > 40)); // true
console.log(movements.some(mov => mov < -700)); // false
// Let's use this some method to implement our  functionality which is to request a loan to the bank.

// Every method:
// If all the array elements satisfy the condition , then it is true otherwise it is false.
// In contrast , the some method the name itself says if some the elements satify the constion then it will be tru and some can be for only one element as well.

console.log(movements.every(mov => mov > -700)); // true

// Lecture - 17 The FLAT AND FLATMAP Method:
// THE FLAT METHOD REMOVE THE NESTED ARRAY AND FLATEND THE ARRAY:

const arr = [
  [1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
];
console.log(arr.flat());

// LET'S SAY WE HAVE A DEEP ARRAY , SUB ARRAY INSIDE THE SUB ARRAY.
const deepArray = [1, 2, [4, 5, [6, 7, [8, 9]]], 10];
console.log(deepArray.flat());
// WE CAN APPLY THE DEPTH LEVEL OF ARRAY
console.log(deepArray.flat(3));

// LET'S MAKE AN ARRAY OF ALL THE MOVEMENTS OF ALL THE ACCOUNTS IN THE SCRIPT FILE.
