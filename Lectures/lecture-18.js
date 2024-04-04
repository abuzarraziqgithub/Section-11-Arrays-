'use strict';

// SORTING ARRAYS:
// IT ACTUALLY MUTATE THE ORIGINAL ARRAY

const alphabets = ['z', 'e', 'c', 'd', 'g', 'q', 'a', 'b', 'f', 's', 'k'];
console.log(alphabets.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// SORT
console.log(movements.sort());
// SORT METHOD  SORT THE ARRAYS BASED ON STRINGS.
//  WE CAN FIX THE MOVEMENTS ARRAY
// IT FIRST CONVERT EVERYTHING TO STRINGS AND THEN IT DOES THE SORTING ITSELF.

// RETURN < 0 , A,B (KEEP ORDER)
// RETURN > 0 , B,A (SWITCH ORDER)

// ASCENDING:
movements.sort((a, b) => a - b);
// {
// THIS CALLBACK (COMPARE FUNCTION) FUNCTION IS CALLED WITH TWO ARGUMENTS.
// THE TWO PARAMETERS WILL BE THE CURRENT VALUE AND THE NEXT VALUE IN THE ARRAY.
// IF THE FIRST VALUE IS LESS THAN B , RETURN NEGATIVE VALUE , IF A > B RETURN POSITIVE VALUE
//   if (a > b) return 1; // POSITIVE VALUE
//   if (a < b) return -1; // NEGATIVE OR SMALL VALUE .
// });
console.log(movements);

// IF COMPAREFN IS NOT APPLIED:
// ALL NON-UNDEFINED ARRAY ELEMENTS ARE SORTED BY CONVERTING THEM TO STRINGS AND COMPARING STRINGS IN UTF-16 CODE UNITS ORDER.
// EXAMPLE: IN NUMERIC , 9 COMES BEFORE 80 , BUT BECAUSE NUMBERS ARE CONVERTED TO STRINGS , "80" COMES BEFORE "9" IN THE UNICODE ORDER.
// ALL UNDEFINED ELEMENTS ARE SORTED TO THE END OF THE ARRAY.

// DESCENDING:
movements.sort((a, b) => b - a);
//  {
//   if (a > b) return -1;
//   if (a < b) return 1;
// }
// );
console.log(movements);

const num = [5, 2, 1, 3, 4, 6];
console.log(num);
num.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(num);

// IF THERE IS A MIXED ELEMENTS OF ARRAY , THAN NOT USE THE SORT METHOD.
