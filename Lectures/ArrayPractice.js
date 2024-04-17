'use strict';
// HERE ARE SOME USEFUL ARRAY EXERCISES , WHICH WILL BOOST OUR KNOWLEDGE AND UNDERSTANDING.

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90, 211, 2, 12],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Abuzar RaziQ',
  movements: [44322, 5000, 7020, 5000, 9000000, 3444, 3222, 422],
  interestRate: 2,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// EXERCISE 1:

// GET THE MOVEMENTS ARRAY OF EVERY ACCOUNT AND MAKE AN ARRAY AND THEN ADD THEM ALL TOGETHER.
// USING FLATMAP() TO GET EACH MOV AND ALSO FALTTEND IT.
// USING FILTER() TO FILTERED THE POSITIVE FROM NEGATIVE
// USING REDUCE() TO SUM ALL THE ELEMENTS.
const accountsDepositeSum = accounts
  .flatMap(element => element.movements)
  .filter(element => element > 0)
  .reduce((curElem, element) => curElem + element);
console.log(accountsDepositeSum);

// EXERCISE 2:

// HOW MANY DEPOSITES HAVE BEEN THAT ARE GREATER THAN 1000
const numDeposites1000 = accounts
  .flatMap(element => element.movements)
  .filter(element => element >= 1000).length;
console.log(numDeposites1000);
// USING REDUCE() METHOD:
// WE CAN USE THE REDUCE METHOD
// WE APPLIED CONDITION IN REDUCE METHOD , IF THE CURRENT ELEMENT IS GRETER OR EQUAL TO 1000 , THAN THE COUNTER + 1 , OTHERWISE COUNTER , STARTING FROM 0.
const numDeposites1000Reduce = accounts
  .flatMap(element => element.movements)
  .reduce((counter, currEle) => (currEle >= 1000 ? ++counter : counter), 0);
console.log(numDeposites1000Reduce);

// EXERCISE 3:
// ADVANCE USAGE OF REDUCE METHOD.
// CREATE AN OBJECT WHICH CONTAINS THE SUM OF THE DEPOSITES AND WITHDRAWALS.
// THE GOAL OF THIS EXE IS TO CREATE AN OBJECT USING THE REDUCE METHOD.

const sums = accounts
  .flatMap(element => element.movements)
  .reduce(
    (sums, currEle) => {
      currEle > 0 ? (sums.deposites += currEle) : (sums.withdrawals += currEle);
      return sums;
    },
    { deposites: 0, withdrawals: 0 }
  );
console.log(sums);

// USING BRACKET NOTATION FOR CLEAN CODE:
const sums2Bracket = accounts
  .flatMap(element => element.movements)
  .reduce(
    (sums, currEle) => {
      sums[currEle > 0 ? 'deposites' : 'withdrawals'] += currEle;
      return sums;
    },
    { deposites: 0, withdrawals: 0 }
  );
console.log(sums2Bracket);

// EXERCISE 4:
// MAKING A FUNCTION THAT CONVERTS TEXT TO TITLECASE.

const convertTitleCase = function (title) {
  const exceptions = [
    'a',
    'is',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'too',
  ];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  console.log(capitalize(titleCase));
};

convertTitleCase('this is a title');
convertTitleCase('this is a title and too long title');
convertTitleCase(
  'my name is abuzar raziq and i am currently learning web development'
);
convertTitleCase(
  'and name is abuzar raziq and i am currently learning web development'
);
