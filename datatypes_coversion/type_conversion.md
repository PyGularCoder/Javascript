## Data Type Conversion in JavaScript
#
Data type conversion, also known as type casting, is the process of converting a value from one data type to another. JavaScript is a dynamically typed language, which means that variables are not explicitly declared with a data type. Instead, JavaScript automatically infers the data type of a variable based on its initial value. However, there are times when you may need to explicitly convert a value from one data type to another.

**Implicit Conversion**

JavaScript performs implicit conversion automatically when necessary. For example, if you add a number to a string, the string will be converted to a number before the addition is performed.

```javascript
const num = 10;
const str = "20";
const sum = num + str; // sum is 30
```

Implicit conversion can also occur when you pass a value to a function that expects a different data type. For example, if you pass a string to the `parseInt()` function, the string will be converted to a number before it is parsed.

```javascript
const str = "123";
const num = parseInt(str); // num is 123
```

**Explicit Conversion**

JavaScript also provides methods for explicitly converting values from one data type to another. The most common methods for explicit conversion are `Number()`, `String()`, and `Boolean()`.

* `Number()`: Converts a value to a number.

```javascript
const str = "10";
const num = Number(str); // num is 10
```

* `String()`: Converts a value to a string.

```javascript
const num = 123;
const str = String(num); // str is "123"
```

* `Boolean()`: Converts a value to a boolean.

```javascript
const num = 0;
const bool = Boolean(num); // bool is false
```

**High-Level Examples of Data Type Conversion**

* **Converting a string to a number:** You might need to convert a string to a number when performing calculations or comparisons.

```javascript
const strAge = "30";
const age = parseInt(strAge); // age is 30

const strPrice = "$19.99";
const price = parseFloat(strPrice); // price is 19.99
```

* **Converting a number to a string:** You might need to convert a number to a string when concatenating it with other strings or displaying it to the user.

```javascript
const numCount = 10;
const message = "You have " + numCount + " items in your cart.";
```

* **Converting a boolean to a string:** You might need to convert a boolean to a string when displaying it to the user or using it as a key in an object.

```javascript
const isAdmin = true;
const userRole = isAdmin ? "admin" : "user";
```

Data type conversion is a fundamental aspect of JavaScript programming. By understanding how to convert values between different data types, you can write more flexible and expressive code.