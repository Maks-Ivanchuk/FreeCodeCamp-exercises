/*
Build a Lunch Picker Program
In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a lunches variable and assign it an empty array that will be used to store lunch items.

You should create a function addLunchToEnd that takes an array as the first argument and a string as the second argument. The function should:

Add the string to the end of the array.
Log the string [Lunch Item] added to the end of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
Return the updated array.
You should create a function addLunchToStart that takes an array as the first argument and a string as the second argument. The function should:

Add the string to the start of the array.
Log the string [Lunch Item] added to the start of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
Return the updated array.
You should create a function removeLastLunch that takes an array as its argument. The function should:

Remove the last element from the array.
If the removal is successful, log the string [Lunch Item] removed from the end of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
If the array is empty, log the string "No lunches to remove." to the console.
Return the updated array.
You should create a function removeFirstLunch that takes an array as its argument. The function should:

Remove the first element from the array.
If the removal is successful, log the string [Lunch Item] removed from the start of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
If the array is empty, log the string "No lunches to remove." to the console.
Return the updated array.
You should create a function getRandomLunch that takes an array as its argument. The function should:

Select a random element from the array.
If successful, log the string Randomly selected lunch: [Lunch Item] to the console, where [Lunch Item] is a random element in the array.
If the array is empty, log the string "No lunches available." to the console.
You should create a function showLunchMenu that takes an array as its argument and:

If there are elements in the array, logs the string Menu items: [Lunch Item], [Lunch Item]... to the console, where each [Lunch item] is one of the elements in the array, in order.
If the array is empty, logs the string "The menu is empty." to the console.
*/

const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  let removeElement;
  if (arr.length > 0) {
    removeElement = arr.pop();
    console.log(`${removeElement} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  let removeElement;
  if (arr.length > 0) {
    removeElement = arr.shift();
    console.log(`${removeElement} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    console.log(
      `Randomly selected lunch: ${arr[Math.round(Math.random() * (arr.length - 1))]}`,
    );
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

//removeLastLunch(lunches);
console.log(lunches);
getRandomLunch(lunches);
showLunchMenu(["Greens", "Corns", "Beans"]);

//results in
/*
[]
No lunches available.
Menu items: Greens, Corns, Beans
*/
