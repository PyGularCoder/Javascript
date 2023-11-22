// Primitive Data Types

// Number: Represents numeric values, including integers and floating-point numbers.

const age = 30;
const pi = 3.14159;

// String: Represents sequences of characters.
const name = "PyGular coder";
const message = "Hello, world!";


// Boolean: Represents logical values, either true or false.
const isAdult = true;
const isEmpty = false;

// Null: Represents an intentional absence of a value.
const emptyArray = null;
const missingValue = null;

// Undefined: Represents an uninitialized value.

// let name; // name is undefined until it is assigned a value



// Symbol: Represents unique identifiers. Symbols are rarely used in JavaScript, but they can be useful for creating private properties and methods.

const symbol = Symbol();
console.log(symbol)


// Non-Primitive Data Types

// Object: Represents a collection of key-value pairs. Objects are used to store and organize data in a structured way.
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };

  
//Array: Represents an ordered collection of values. Arrays are used to store lists of items or sequences of data.
const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];


// Function: Represents a block of code that performs a specific task. Functions are used to encapsulate reusable code and make programs more modular.
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("PyGular Coder");
  



  //Date and RegExp Data Types

//Date: Represents a specific point in time. Date objects are used to store and manipulate dates, times, and time intervals.
const currentDate = new Date();
const birthDate = new Date(1997, 11, 12);

// RegExp: Represents a regular expression pattern. RegExp objects are used to search for patterns in strings.
const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

