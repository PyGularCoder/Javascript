## var Keyword in JavaScript

The `var` keyword is the oldest method for declaring variables in JavaScript. It has functional scope, implying that variables declared with `var` are accessible throughout the enclosing function, regardless of their block scope. This can result in hoisting, which is the phenomenon of variables being moved to the top of their scope before execution. Hoisting can make code more difficult to read and debug, and it can also lead to unexpected behavior.

### Key Points

1. `var` is a functionally scoped keyword for declaring variables.

2. Variables declared with `var` are accessible throughout the enclosing function, regardless of their block scope.

3. Hoisting can occur with `var` declarations, moving variables to the top of their scope before execution.

4. Hoisting can make code more difficult to read and debug and lead to unexpected behavior.

That is correct. Hoisting moves the variable declaration to the top of the function's scope, making it accessible throughout the function, including within the if block. As a result, the greet function will print "Hello, John Doe!" to the console.


```javascript
function greet(name) {
    if (name === "John Doe") {
        console.log("Hello, John Doe!");
    } else {
        console.log("Hello,", name);
    }
}

name = "John Doe";
greet(name);
```

1. The `greet` function is defined with a parameter `name`.

2. Inside the function, the `if` statement checks if `name` is equal to "John Doe".

3. If `name` is equal to "John Doe", the `console.log` statement prints "Hello, John Doe!" to the console.

4. Otherwise, the `console.log` statement prints "Hello," followed by the value of `name`, to the console.

5. The variable `name` is declared outside the function and assigned the value "John Doe".

6. Finally, the `greet` function is called with the value of `name` as an argument.