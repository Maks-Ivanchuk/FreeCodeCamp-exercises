/**
 * Implement a Matching Object Filter
In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example: */

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter((obj) =>
    keys.every((key) => obj[key] === source[key]),
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" },
);

//results in [{ first: "Tybalt", last: "Capulet" }]
