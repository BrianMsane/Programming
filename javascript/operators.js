/*
We use operators and variable to create expressions and with the expressions we can implement logic and/or algorithms
There are various kinds of operators which are:
1. Arithmetic (usually tokes two operand and as a result of that expression, a value is produced)
2. Assignment (assign a value to a variables)
3. Comparison (compare the value of a variable with something else. The result is a boolean which is True or False)
4. Logical ()
5. Bitwise ()
*/

// ARITHMETIC OPERATORS (+, -, *, /, %, **, ++, --)
// ASSIGNMENT OPERATOR (=, ++, --, +=, -=, *=, /=, %= )
// COMPARISON OPERATORS (>, <, >=, <=, ===, !==, ==, !=) [relations and equality operators]
// LOGICAL OPERATORS (&&, ||, !)
// BITWISE OPERATORS (|, &) workd on a bit level and their operation is equal to logical operators

/*
 * === is called a strict equality operator and it ensures taht both operands have the same type and value
 * == is called a loose equality operator which does not require that the type be the same but only the values
 * !=== is a strict inequality operator
 * !=
 */

let x = 10;
let y = 3;

console.log(x % y); // modulus, what is the remainder when x is divided by y
console.log(++x); // pre-increment operator
console.log(y++); // post increment operator

console.log(--y); // pre-decrement operator
console.log(y--); // post-decrement operator

console.log("These should be true:  ", 1 === 1);
console.log("We expect these not to be equal: ", "1" == 1);

// TERNARY OPERATOR
/**
 * Imagine you want to implement a rule like this:
 * If a custormer has more than 100 points, then they are a gold customer, otherwise they are a silver
 */

const points = 1011;
const eligibleLoan = true;
const customerStatus = points > 100 ? "gold" : "silver";

console.log(customerStatus);

/**
 * The logical AND operator && returns true if both operands evaluate to true
 * The logical OR operator, ||, return true if one or both operands evaluate to true
 * The NOT operator, !, inverts the given operand. It takes only one operand while the others take two
 */

// LOGICAL OPERATORS
/**
 * The result of a logical  expression isn't necessarily a boolean
 *  When javascript engine tries to evaluate the expression in which we have a boolean and non-boolean operands, it tries to interpret the operand which is not a boolean into a truthy or falsy
 * false values are undefined, null, 0, false, empty string, NaN
 * anything that is not falsy is truthy
 */

if (customerStatus === "sliver" && points < 150 && !eligibleLoan) {
  console.log("You are going to get there, keep going!");
} else if ((customerStatus === "gold" && points > 150) || eligibleLoan) {
  console.log("You are now a master now, you can get the loan!");
}

console.log(false || "Brian");
console.log(false || 1);
console.log(false || 0);
console.log(false || 1 || 2); // the operation stops as soon as it finds an operand that is truthy and returns that operand so in this case it returns 1. It is called short-circuiting

const firstName = false;
const secondName = "brian"; // if you want to use this color, the user should provide a falsy value
let currentUsedName = firstName || secondName;
console.log(currentUsedName);

// OPERATOR PRECEDENCE (order of operation)
// PEDMAS - parenteses, exponentiation, division, multiplication, addition, subtraction
