/*
Design a Sum All Numbers Algorithm
In this lab, you will need to design a sum all numbers algorithm.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arrNum) {
  let res = 0;

  let start = arrNum[0];
  let range = arrNum[1] - arrNum[0];

  if (arrNum[0] > arrNum[1]) {
    start = arrNum[1];
    range = arrNum[0] - arrNum[1];
  }

  for (let i = 0; i <= range; i++) {
    res += start + i;
  }

  return res;
}

console.log(sumAll([1, 4]));

//results in 10
