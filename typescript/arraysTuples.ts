var arr: number[] = [7, 8.8, 9];

var implicitType = []; // of type any

var nestedArray: string[][] = [
  ["hello", "there"],
  ["world", "rouding-up"],
];

var automaticInfer = [
  ["hello", 1],
  ["world", 26],
];

// TUPLES
const coord: [number, number] = [1, 2]; // fixed number array to be used when we know for sure that we will have a certain number of items in the array
const names: [string, string] = ["Thandokuhle", "Brian"];
const siblingsList: [string, number][] = [
  ["Noncedo", 18],
  ["Sihlelelwe", 13],
  ["Ncobizwe", 10],
  ["Slindo", 6],
  ["Ncengwa", 3],
];

console.log(names[0]);
console.log(`first sibling is ${siblingsList[0][0]}`);
