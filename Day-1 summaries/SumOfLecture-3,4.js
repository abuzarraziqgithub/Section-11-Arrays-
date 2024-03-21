// Lecture 3 : forEach() Method
/*
--> We used for of loop for arrays before , now we will talk about the forEach method.

-> In forEach method , there is a call back function , because forEach method is a higher order function and higher ordered function have call back function.

-> It will return that call back fnction in each iteration.
-> The parameter of that call back function will be argument of each array element.

Example:
const arr1 = [1, 2, 3, 4];
arr1.forEach(function (element) {
  console.log(`${element}`);
});
// function(1) : 1
// function(2) : 2
// function(3) : 3
// function(4) : 4





-> We can also log index of each element by simply passing to function:
const arr1 = [1, 2, 3, 4];
arr1.forEach(function (element , index) {
  console.log(`${element} at index ${index}`);
});
-> remember that the first argument should be considered as the element of an array and the second should be the index of it an dthe third is the entire array.



-> The break and continue doesn't work for the forEach method , because it iterate or loop over entire array at once.
*/

// Lecture 3: forEach for map and set:
/*
--> Map()

-> we can use forEach method for map as well .
-> The first para should be the value , second should be the key and the third one is fully map.

Example :
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

--> Set():

-> The key are not speified for the set , because it treats as an array , but the forEach structure should be the same .
-> we can just put _ and the second position and the third is the entire set.

Example:
const currencieUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currencieUnique);
currencieUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});



 SO that's about the todays work , see you tommorow (22/03/24) fri
*/
