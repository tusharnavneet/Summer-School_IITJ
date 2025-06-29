# 🧠 JavaScript Basics Assignment

A comprehensive assignment covering fundamental JavaScript concepts including variables, data types, hoisting, conditionals, loops, functions, and callbacks.

## 📚 Topics Covered

- **Variables**: `var`, `let`, `const`
- **Data Types**: String, Number, Boolean, Undefined, Null
- **Hoisting**: Understanding variable and function hoisting
- **Conditionals**: `if`, `else`, `switch` statements
- **Loops**: `for`, `while`, `do...while`
- **Functions**: Declaration, Expression, Arrow functions, Callbacks

## 🧪 Tasks Completed

### ✅ 1. Variable and Data Types
Creates variables using different declaration keywords and demonstrates `typeof` operator:
```javascript
let stringVar = "Hello, JavaScript!";
const numberVar = 42;
var booleanVar = true;
let undefinedVar;
const nullVar = null;
```

### ✅ 2. Hoisting Demo
Demonstrates the difference between `var` and `let` hoisting behavior:
- `var`: Hoisted and initialized with `undefined`
- `let`/`const`: Hoisted but in Temporal Dead Zone

### ✅ 3. User Greeting (Conditionals)
Interactive greeting system based on user age:
- Under 18: "Hey [name], you're a teen!"
- 18-60: "Welcome [name], you're an adult!"
- Over 60: "Hello [name], you're a senior citizen!"

### ✅ 4. Looping Numbers
Three different loop types:
- **For loop**: Numbers 1 to 10
- **While loop**: Even numbers 2 to 20
- **Do-while loop**: Numbers 10 down to 1

### ✅ 5. Functions
Three function types:
```javascript
// Function Declaration
function add(a, b) { return a + b; }

// Function Expression
const square = function(num) { return num * num; };

// Arrow Function
const greetUser = (name) => `Hello, ${name}!`;
```

### ✅ 6. Callback Practice
Demonstrates callback functions with `processNumber()`:
```javascript
processNumber(5, function(n) {
  console.log("Double is", n * 2);
});
```

### 🏁 BONUS: Mini Calculator Project
Interactive calculator supporting:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/) with zero-division handling

## 🚀 How to Run

1. Open `index.html` in a web browser
2. Click on each task button to run the demonstrations
3. Follow prompts for interactive tasks
4. Check both the webpage output and browser console

## 💡 Key Learning Points

1. **Variable Declarations**: Understanding scope and hoisting differences
2. **Data Types**: JavaScript's dynamic typing system
3. **Hoisting**: Why declaration order matters
4. **Control Flow**: Making decisions and repeating actions
5. **Functions**: Different ways to define and use functions
6. **Callbacks**: Higher-order functions and functional programming basics

## 🔧 Features

- Interactive web interface
- Clear console logging
- Error handling and validation
- Comprehensive examples and explanations
- Bonus advanced concepts

## 📝 Notes

- All examples include detailed explanations
- Code follows JavaScript best practices
- Interactive prompts enhance learning experience
- Console output provides additional debugging information

---

**Author**: JavaScript Learning Assignment  
**Date**: 2025  
**Topics**: JavaScript Fundamentals