/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative answers to the question.
The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
*/

const questions = [
  {
    category: "Hobby",
    question: "Do you like football?",
    choices: ["Yes", "No", "Maybe"],
    answer: "No",
  },
  {
    category: "Favorite Color",
    question: "Do you like black?",
    choices: ["Yes", "No", "Maybe"],
    answer: "No",
  },
  {
    category: "Transport",
    question: "Do you like buses?",
    choices: ["Yes", "No", "Maybe"],
    answer: "Yes",
  },
  {
    category: "Money",
    question: "Dollars, hryvnias, or euros?",
    choices: ["Dollars", "Euros", "Hryvnias"],
    answer: "Hryvnias",
  },
  {
    category: "Bike Type",
    question: "What bike do you want?",
    choices: ["Road", "Mountain", "Gravel"],
    answer: "Gravel",
  },
];

function getRandomQuestion(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(objQuestion, objChoice) {
  if (objQuestion.answer == objChoice) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${objQuestion.answer}`;
  }
}

let object = getRandomQuestion(questions);
let choice = getRandomComputerChoice(object.choices);

console.log(getResults(object, choice));

//results in either "The computer's choice is correct!" or "The computer's choice is wrong. The correct answer is: <correct-answer>"
