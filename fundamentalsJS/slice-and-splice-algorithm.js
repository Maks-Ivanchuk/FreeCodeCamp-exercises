/*
Implement the Slice and Splice Algorithm
In this lab, you will need to create an algorithm to merge two arrays.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, index) {
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];

  for (let i = 0; i < arr1Copy.length; i++) {
    arr2Copy.splice(index, 0, arr1Copy[i]);
    index++;
  }

  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5], 1);

/*var2
function frankenSplice(arr1, arr2, index){
  const arr2Copy = [...arr2];

  arr2Copy.splice(index, 0, ...arr1);

  return arr2Copy;
};


frankenSplice([1, 2, 3], [4, 5], 1);
*/

//results in [4, 1, 2, 3, 5]
