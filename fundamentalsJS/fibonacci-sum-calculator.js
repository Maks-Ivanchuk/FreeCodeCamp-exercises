/*
Build an Odd Fibonacci Sum Calculator
In this lab you will build an odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
*/

function sumFibs(number) {
  let result = 0;
  let a = 1;
  let b = 1;

  while (a <= number) {
    if (a % 2 !== 0) {
      result += a;
    }

    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(sumFibs(75024));

//results in 60696
