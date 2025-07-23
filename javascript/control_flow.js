/**
 * Looping is simply repeating something a number of times and in JavaScript we have
 * For => for (initial, condition, incrementExpression)
 * While => ()
 * Do...while => (Do while loops execute at least once even if the condition evaluates to false and that is because the condition is evaluates at the end, after that block of statements have run)
 * For...in
 * For...of
 * All these loops essentially do the same thing but there is a subtle difference on how they start and end
 */

// write a program to add all even values between 0 and 20 (inclusive)
let sum = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) sum += i;
}

console.log(sum);

let sum_while = 0;
let i = 0;

while (i <= 20) {
  if (i % 2 == 0) sum_while += i;
  i++;
}
console.log(sum_while);

while (true) {
  console.log("This is a while true which needs a break to not run infinetly");
  break;
}

/**
 * The key difference between and while loop and a for loop is that in a for loop the loop variable is part of the loop itself whilst in a while loop the loop variable is defined externally
 * Also the increment logic is part of the while block
 */

let j = 0;
var sum_do_while = 0;

do {
  if (j % 2 == 0) sum_do_while += j;
  j++;
} while (j <= 20);

console.log(sum_do_while);

const colors = ["gray", "white", "black", "blue", "yellow"];
console.log(colors.length);

// When dealing with loops the one thing we need to be aware of is not to create an infinite loop which can end up crashing your browser or your PC when not stopped
// to stop it, close the tab in the browser or force stop your browser
// if you are using a terminal, kill the terminal to stop the infinite loop

const person = {
  name: "Brian",
  age: 99,
};

// for... in loop: Here we donot have the initiation of the loop variable,
for (let key in person) console.log(key, person[key]);
for (let index in colors) console.log(colors[index]);

console.log("\n");
// for...of
for (let color of colors) console.log(color);
