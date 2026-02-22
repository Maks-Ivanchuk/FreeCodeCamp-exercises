/*
 Implement the Mutations Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function named mutation that takes an array as its argument.
mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
 */

function mutation(array) {
  let result = [];

  for (let i = 0; i <= array[1].length - 1; i++) {
    result.push(array[0].toLowerCase().includes(array[1][i].toLowerCase()));
  }

  return result.includes(false) ? false : true;
}

let test1 = ["hello", "Hey"];
mutation(test1);
console.log(mutation(test1));

/* var 2 */

function mutation(array) {
  for (let i = 0; i <= array[1].length - 1; i++) {
    if (!array[0].toLowerCase().includes(array[1][i].toLowerCase())) {
      return false;
    }
  }

  return true;
}

let test2 = ["hello", "Hey"];
console.log(mutation(test2));
