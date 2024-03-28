'use strict';

//  The Find Method: we can get/retreive one element of an array , based on the given condition.
// It is higher order method , so it accept call back function.
// Unlike filter method , It will return the first element(condition satisfies) but not the new array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const find = movements.find(mov => mov < 0);
console.log(find); // -400

// The find is a bit similar to filter method but there are two main difference.
// The filter method return all array , but find method returns only the first element that satisfies the codintion.
// The flter returns the whole new array , but the find returns only the element itself.

let x = 0.1 + 0.2;
console.log(x);
// we will use the find method to implement the login features in our project.

// Lecture - 13 : Implementing the login functionnality
