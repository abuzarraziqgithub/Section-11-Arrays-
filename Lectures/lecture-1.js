'use strict';

// Let's talk about array methods:

// SLICE Method:
// It returns the new array and doesn't change the original array.
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c' , 'd','e']
console.log(arr.slice(2, 4)); // ['c','d']
console.log(arr.slice(-2)); // ['d','e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b' , 'c']
// We can use slice method to create a shallow copy of any array.
console.log(arr.slice()); // copy
// We can create this using the spread op:
console.log([...arr]);

// SPLICE
// It returns the original mutated array.
console.log(arr.splice(-1)); // ['e']
console.log(arr.splice(1, 2)); // ['b','c']

// REVERSE:
// It basically Reverse The original array.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
// It concat array with another
// It doesn't mutate the original array.
const letters = arr.concat(arr2);
console.log(letters);
// We can also use spread operator.
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
