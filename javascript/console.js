/*
three special numbers Infinity, -Infinity, and NaN
operations with both infinity values yeild infinity expect when used with modulus
NaN is not equal to it self so NaN == NaN gives -> false
null and undefined represent the absence of a meaningful value.
operations with null yield 0 except for when subtraction is used and it yeilds the negated number subtracted from it
implicit type coercion is common, be mindful!
*/

// PRIMARY DATA TYPES
var name = "Thandokuhle", // "", ``, or '' (${} can work like a formatted string and only on backticked strings)
    age = 27,
    weight = 55.2, 
    married = false, // lower-case
    kids = null,     // used to erase the contents of a variable without deleting the variable itself
    carModel;       // undefined (access an object that does not exist or not yet initialized or declared.)
let binding = 7;
const id = 202203673;  // constant variable
let details = `your name is ${name}, and you are ${age} years old`;
typeof age;



// COMPOSITE DATA TYPES (arrays and objects)
var list = ["zee", "nos", "mun", "than", 7, false, null],
    list2 = [],
    list3 = new Array(12, 77, 90, "Brian");
//methods
list.length;
list.push(7);     // append
list3.pop();      // remove at the end
list.shift();     // remove item at the front of an array
list.unshift(9);  // add at the front of the list
list.indexOf(7);  // returns the index position of the element in the parentheses

// OBJECT 

var person = new Object()
    toBuy = {
        model :"BMW",
        year : 2027,
        forWho : "her"
    },
    car = {};

person.name = "b";
person.age = 99;
person.married = null;

person['name'] = "msane";
person['age'];
person.age; // alternatively, you can use the dot operator to reference

person.car = new Object(); // object within an object
person.car.make = "Bentely";
person.car.color = "White";
person.car


// OPERATORS (just the same as other languages especially python)

    // in comparison operators you need to add === (strict equal), precisely not equal !== prevents type coercision to impact
    // the difference is that equal only compares the values while strict equal also compares the data types
    // logical operators (&&, ||, !)
    // unary negation and addition - can also work with strings
    // tenary  (condition ? execute_this : else_this)

// CONDITIONAL STATEMENTS
    // we can also use switch statements which seem to have been inherited from C++ (syntax)

switch(prompt("how is the weather?")){
    case "raining":
        console.log("carry an umbrella");
        break;
    case "sunny":
        console.log("enjoy your day");
        break;
    case "cloudy":
        console.log("you might need backup");
        break;
    default:
        console.log("Oops!");
        break; // no effect
}

var age = 5
if (age <= 20 ){
    console.log("young man");
}else if (age > 20 && age < 25) {
    console.log("Adult");
}else{
    console.log("Very Old");
}

age > 20 ? console.log("Not a teen") : console.log("Teen");


// LOOPS
var names = ["George", "Bush", "Barack", "Trump", "Biden"]
for (var x = 0; x < names.length; x++){
    console.log(names[x]);
}


var y = 0;
do{
    console.log(names[y]);
    y++;
}while(y < names.length);


var z = 0;
while(z < names.length){
    console.log(names[z]);
    z++;
}


// FUNCTIONS 
    // global and local scope for variables
    // do not use the parameters' data type at all

var x = 9; 
function add(va11, val2){
    return (val1 + val2);
}
console.log(add(7, 45));

var square = function(number){
    return number*number;
}

// SELECTORS
    // give you access to the html file - various elements


var firstItem = document.getElementById("pass the Id of the specific element to access"),
    myList = document.getElementByClassName('mylist'),
    paragraphs = document.getElementsByTagName('p'),
    images = document.querySelectorAll('img');

firstItem.style.color = 'red';
myList[0].style.display = "none";
for (var i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "green";
}
console.log(firstItem);
console.log(myList);


// EVENTS
    // the events are happening on the html file and all we do in JavaScript is to list to them and react to them
    // triggered by user or browser
    // two ways to listen to events: 1)listen in html inline or 2) in JavaScript

var submitBtn = document.getElementById("submit"),
    container = document.querySelector(".container");

submitBtn.addEventListener("click", function(event){
    console.log("Clicked!");
});

container.addEventListener("mouseenter", MouseEnterContainer );

function MouseEnterContainer(){
    console.log("Hey there was a mouser enter event triggered!");
    container.removeEventListener("mouseenter", MouseEnterContainer);
}

document.addEventListener("keyup", function(event){
    console.log(event.keyCode);
});


// DEMO

    //back to top button

