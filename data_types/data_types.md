## Data types in Javascript

### **Primitive Data Types**

Primitive data types are the most basic data types in JavaScript. They are immutable, meaning that their value cannot be changed after they are created.

* **Number:** Represents numeric values, including integers and floating-point numbers.

```javascript
const age = 30;
const pi = 3.14159;
```

* **String:** Represents sequences of characters.

```javascript
const name = "John Doe";
const message = "Hello, world!";
```

* **Boolean:** Represents logical values, either true or false.

```javascript
const isAdult = true;
const isEmpty = false;
```

* **Null:** Represents an intentional absence of a value.

```javascript
const emptyArray = null;
const missingValue = null;
```

* **Undefined:** Represents an uninitialized value.

```javascript
let name; // name is undefined until it is assigned a value
```

* **Symbol:** Represents unique identifiers. Symbols are rarely used in JavaScript, but they can be useful for creating private properties and methods.

```javascript
const symbol = Symbol();
```

### **Non-Primitive Data Types**

Non-primitive data types are more complex data types that can hold collections of data or represent objects in the real world.

* **Object:** Represents a collection of key-value pairs. Objects are used to store and organize data in a structured way.

```javascript
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer"
};
```

* **Array:** Represents an ordered collection of values. Arrays are used to store lists of items or sequences of data.

```javascript
const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];
```

* **Function:** Represents a block of code that performs a specific task. Functions are used to encapsulate reusable code and make programs more modular.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John Doe");
```

**Date and RegExp Data Types**

Date and RegExp are special data types in JavaScript that provide additional functionality for working with dates and regular expressions, respectively.

* **Date:** Represents a specific point in time. Date objects are used to store and manipulate dates, times, and time intervals.

```javascript
const currentDate = new Date();
const birthDate = new Date(1990, 0, 1);
```

* **RegExp:** Represents a regular expression pattern. RegExp objects are used to search for patterns in strings.

```javascript
const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
```

In addition to these built-in data types, JavaScript also supports BigInt, which represents integers with arbitrary precision. BigInt is a newer addition to the language and is not yet as widely used as the other data types.

I hope this explanation is helpful. Please let me know if you have any other questions.