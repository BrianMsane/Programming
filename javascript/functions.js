// A function is a set of statements that performs a specific opearation
// function definition and call
// it can take any number of parameters and arguments which are only meaningful inside the scope of the function
// we can also have default parameters which are simply parameters which do not require they values to be passed when the function is being called. Instead, they use the given, default value
// the default value for functions in undefined in JavaScript
// functions can either perform a task or calculate and return a value

function greet(name, surname = "Msane") {
  const fullName = name + " " + surname;
  console.log(`Hi, ${fullName}, how are you doing`);
}

greet("Thandokuhle");
greet("Brian", "Nobela");
