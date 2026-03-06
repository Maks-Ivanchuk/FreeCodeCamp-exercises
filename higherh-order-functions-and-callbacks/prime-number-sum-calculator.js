/**
 * Build a Prime Number Sum Calculator
In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0.
 */

function sumPrimes(num) {
  const primes = [2];
  if (num < 2) return 0;
  if (num == 2) return 2;

  for (let i = 3; i <= num; i++) {
    let isPrime = !primes.some((prime) => i % prime === 0);

    if (isPrime) primes.push(i);
  }

  return primes.reduce((acc, cur) => acc + cur);
}

sumPrimes(10);

//results in 17
