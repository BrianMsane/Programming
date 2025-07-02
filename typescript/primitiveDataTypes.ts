// PRIMITIVE DATA TYPES
/*
- number ( positive, negative, zeor, infinity, negative infinity, and floating point numbers)
- boolean
- null
- undefined
- null
- unknown (is a type-safe counterpart of the any type)
- any (allows for flexible typing but sacrifices type safety as it lack compile-time type checking)
- void (simply used when you are returning nothing from a function)
- never (explitly used to specify that a function never returns anything)
-  string (use double or single quotes; formatted strings are written as `${variableName}`)
*/

let x: number = 7; // explict type
let y = "Msane"; // Even though we did not specify the type, TypeScript already inferred it
let aging: boolean;

let unknown = null; // we use this when we expect something to be empty or non-existent
let toBeDefine = undefined; // used more as a placeholder that means a variable has been declared but has not yet been assigned a value
// null and undefined variables are set to any as they are allowed to take any type of variables later on

unknown = "We now know the value";
unknown = 7;

// if you are not really sure you can use the union
let notSureBetweenTheTwo: number | undefined;
// but once we have se the data, TypeScript uses it as the final data type
notSureBetweenTheTwo = 9;

let xyz: any;
// use the any type when you are in a situation whereby you do not know what type of data the variable will store

// whey using hte unknown type, we are forced to first assert the type before doing any operation

let abc: unknown;
if (typeof abc === "number") abc = 8;
else if (typeof abc === "string") abc = "Msane";
