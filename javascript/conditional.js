/**
 * if...else
 * switch...case
 */

function fizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "fizzbuzz";
  } else if (number % 5 == 0) {
    return "fizz";
  } else if (number % 3 == 0) {
    return "buzz";
  } else {
    return "no condition";
  }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(24));
console.log(fizzBuzz(25));
console.log(fizzBuzz(7));

function greetings(name, hour) {
  if (hour >= 0 && hour <= 12) {
    return `Good morning, ${name}!`;
  } else if (hour > 12 && hour < 17) {
    return `Good afternoon, ${name}`;
  } else {
    return `Good evening, ${name}!`;
  }
}

console.log(greetings("Brian", 7));
console.log(greetings("Kuhle", 13));
console.log(greetings("Thando", 20));

let role = "employee";

switch (role) {
  case "engineer":
    console.log("You are an engineer");
    break;

  case "developer":
    console.log("You are");
    break;

  default:
    console.log(
      "YOu are jut a worker at the company, nobody knows what you do 😊!"
    );
}

/**
 * When do we decide to use a swith...case over if...else statements
 *     We compare a value of a variable, not necessarily a condition, against a bunch of values
 * If none of the cases are matched, we need to have a default block
 * In the default block, we do not need to have a break statement
 */
