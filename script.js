'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Abuzar RaziQ',
  movements: [44322, 5000, 7020, 5000, 9000000],
  interestRate: 2,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Lecture 5 :
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov} PKR</div>
   </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// Lecture 10 : Reduce Method (Manipulating current balance)
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} PKR`;
};
// calcDisplayBalance(account1.movements);

// Lecture 11 : Manipulating the summary by using filter and reduce method, as we did practice in lecture 11 file:
// create a function
const calcDisplaySummary = function (acc) {
  // For Income:
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income} PKR `;

  // For Withdrawal (out)
  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(withdrawal)} PKR`;

  // Interest
  // we used map method , to do some operation.
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .reduce((acc, map) => acc + map, 0);
  labelSumInterest.textContent = `${interest} PKR`;
};
// calcDisplaySummary(account1.movements);
// calcDisplaySummary(account2.mosvements);

// Lecture 8 : Computing usernames for each account owner by using map and forEach method:
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
//  In this lecture , it is very important to understand the usecase for the map method and the forEach method:
//The  map() method allows us to create new simple array which only contains the initials of whatever name it is used on.
// The forEach() method was a great usecase to produce some so called side effects ,in other words , to do some work without returning anything.
//  we simply looped over the accounts array , and in each iteration we manipulated the current account object and added a username to it based on the account owner plus all the transformations

// Lecture - 13 : Implementing Login:

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // It will prevent the default refresh of the form.

  // It will find the account where username of that account is equal to the username that is given in the input field.
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // If the pin of the given account is equal to the pin of the user input:
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    // The text content of the given account which includes the first word and welcome text.
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // The opacity will be changed to 1;
    containerApp.style.opacity = '1';

    // Clear Input Fields:
    inputLoginUsername.value = inputLoginPin.value = '';

    // Remove focus from pin input field using blur method:
    inputLoginPin.blur();

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
