## const
The `const` keyword in JavaScript introduces a new way to declare variables that are immutable, meaning their values cannot be changed after they are initialized. This provides several benefits, including enhanced code readability, maintainability, and protection against accidental value modifications.

Here's a summary of the key points about `const`:

1. **Immutable Variables:** Variables declared with `const` are immutable, meaning their values cannot be reassigned after initialization.

2. **Readability and Maintainability:** Using `const` for immutable values improves code readability and maintainability by making it clear that these values are not intended to change.

3. **Preventing Accidental Changes:** `const` helps prevent accidental modifications to critical data, ensuring that important values remain constant throughout the program's execution.

Here's an example illustrating the usage of `const`:

```javascript
const PI = 3.14159; // Constant value for pi
const gravity = 9.81; // Constant value for Earth's gravity

// PI = 3.15; // Attempt to reassign PI will result in an error

console.log("Value of PI:", PI); // Output: Value of PI: 3.14159
console.log("Value of gravity:", gravity); // Output: Value of gravity: 9.81
```

In this example, `PI` and `gravity` are declared as `const` variables, ensuring that their values remain constant throughout the program. Attempting to reassign `PI` will result in an error, preventing accidental modifications to the value.
