// a literal is a textual represenation(notatio) of a value as it is writting in source code

let direction: "north" | "south" | "east" | "west"; // these are the only options that can be stored in the direction variable
direction = "north";
direction = "east";

if (direction === "east") console.log("East is always on your left 😂");

// Enum stands for enumeration (numeric or string enums)
// Enums enables developers to establish a collection of named constants (enumerators) each linked with an integer value

// numeric enum
enum Size {
  Small = 28,
  Medium,
  Large,
}

var size: Size = Size.Small;

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let nextDirection: Direction = Direction.Left;
if (nextDirection === "LEFT")
  console.log("Do a short left when you reach the junction");
