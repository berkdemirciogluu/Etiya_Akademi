// Returns the divisors of a number as an array
const findDivisors = number => {
    const divisors = [1];
    for (let i = 2; i < number - 1; ++i) if (number % i === 0) divisors.push(i);
    return divisors;
  };

// Returns the sum of given numbers
const sum = (...numbers) => numbers.reduce((a, b) => a + b);

// Checks whether two number is firendly or not
const areFriendlyNumbers = (number1, number2) =>
    sum(...findDivisors(number1)) === number2 && sum(...findDivisors(number2)) === number1;

// Writes the result down as a console output
const checkFriendlyNumbers = (number, number2) =>
    areFriendlyNumbers(number, number2)
      ? console.log(`${number} and ${number2} are friendly numbers.`)
      : console.log(`${number} and ${number2} are NOT friendly numbers.`);
  
// Test
checkFriendlyNumbers(17296, 18416) // Homework 1.2