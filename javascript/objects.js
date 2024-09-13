// DATA STRUCTURES -- STRINGS

let name1 = "Thando,kuhle";

console.log(name1.toUpperCase());
console.log(name1[name1.length]);
console.log(name1.slice(0,6));
console.log(name1.split(','));
console.log(name1.indexOf('d'));
console.log("yes".repeat(10));


// DATA STRUCTURES - ARRAY

let age = 91;
var nickname = null;

// different methods of making lists
var list = ["hey", "hello", "mama", "than", 7, false, null],
    list2 = [],
    list3 = new Array(12, 77, 90, 9);

list2.push("name", "surname", 8, age, nickname); // you can add variables
list2.pop();
console.log(list.slice(0,3));

for (var i = 0; i < list.length; i++){
    console.log(list[i]);
}

for(let number of list3){
    console.log(`Doubling the number results in $number*2`);
}


// DATA STRUCTURES - OBJECTS
let object1 = {
    name:"Brian",
    surname:"Msane",
    gender:"Male",
    hobbies:["programming", "learning", "AI", "data science"],
    school:{
        primary:"St Philomena",
        secondary:"St Pauls",
        tertiary:"UNESWA"
    },
    nothing:undefined
};

console.log(object1.name);
console.log(object1.school.tertiary);
console.log(object1.hobbies.push("Databases"));
console.log(music in object1);
delete nothing;


Object.keys(object1);   // show the keys of the object
Object.assign(object1, {mentor:"Mr Jeremiah"})
Object.keys(object1)


// DATA STRUCTURES JSON

