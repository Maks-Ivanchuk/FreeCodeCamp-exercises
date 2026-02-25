/*
Implement a Unique Sorted Union
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
 */

function uniteUnique(...arrays) {
  let result = [];
  for (const arr of arrays) {
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
        console.log(result);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
