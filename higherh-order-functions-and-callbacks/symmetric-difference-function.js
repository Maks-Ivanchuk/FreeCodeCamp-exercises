/*
Build a Symmetric Difference Function
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:

Array A: ["diamond", "stick", "apple"]

Array B: ["stick", "emerald", "bread"]

Result: ["diamond", "apple", "emerald", "bread"]

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.

*/

function diffArray(arr1, arr2) {
  let result1 = arr1.filter((elArr1) => !arr2.includes(elArr1));
  let result2 = arr2.filter((elArr2) => !arr1.includes(elArr2));

  return result1.concat(result2);
}

diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]);

//results in ["car", "train", "plane"]
