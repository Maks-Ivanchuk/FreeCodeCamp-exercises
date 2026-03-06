/*
Build a Longest Word Finder App
In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.
*/

function findLongestWordLength(string) {
  let words = [];

  if (string.trim() === "") {
    return "Порожнє речення";
  } else {
    words = string.trim().split(" ");
  }

  let countMaxLength = 0;

  for (const word of words) {
    if (word.length > countMaxLength) {
      countMaxLength = word.length;
    }
  }
  return countMaxLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);

//results in 6
