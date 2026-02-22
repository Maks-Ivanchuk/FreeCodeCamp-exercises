/*
Build the Largest Number Finder
In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.
*/

function largestOfAll(arrays) {
  let largestofAllArray = [];

  for (const arr of arrays) {
    let arrNumMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arrNumMax) {
        arrNumMax = arr[i];
      }
    }

    largestofAllArray.push(arrNumMax);
  }

  return largestofAllArray;
}

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [-2, -100],
  ]),
);
