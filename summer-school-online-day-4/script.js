// JavaScript Basics Assignment Solutions

// ============================================
// ✅ TASK 1: Variable and Data Types
// ============================================
function demonstrateVariablesAndDataTypes() {
    const output = document.getElementById('task1-output');
    let result = "=== TASK 1: Variables and Data Types ===\n\n";
    
    // Creating 5 variables with different data types
    let stringVar = "Hello, JavaScript!";           // String
    const numberVar = 42;                          // Number
    var booleanVar = true;                         // Boolean
    let undefinedVar;                              // Undefined (not assigned)
    const nullVar = null;                          // Null
    
    result += "Variables created:\n";
    result += `stringVar = "${stringVar}" | Type: ${typeof stringVar}\n`;
    result += `numberVar = ${numberVar} | Type: ${typeof numberVar}\n`;
    result += `booleanVar = ${booleanVar} | Type: ${typeof booleanVar}\n`;
    result += `undefinedVar = ${undefinedVar} | Type: ${typeof undefinedVar}\n`;
    result += `nullVar = ${nullVar} | Type: ${typeof nullVar}\n`;
    
    // Note about null type
    result += "\n📝 Note: typeof null returns 'object' - this is a known JavaScript quirk!";
    
    output.textContent = result;
    console.log(result);
}

// ============================================
// ✅ TASK 2: Hoisting Demo
// ============================================
function demonstrateHoisting() {
    const output = document.getElementById('task2-output');
    let result = "=== TASK 2: Hoisting Demo ===\n\n";
    
    result += "Demonstrating hoisting behavior:\n\n";
    
    // Demonstrate var hoisting
    result += "1. VAR HOISTING:\n";
    try {
        result += `Accessing varExample before declaration: ${varExample}\n`;
        // This works because var is hoisted and initialized with undefined
        var varExample = "I'm hoisted!";
        result += `After declaration: ${varExample}\n`;
    } catch (error) {
        result += `Error with var: ${error.message}\n`;
    }
    
    result += "\n2. LET HOISTING:\n";
    try {
        // This will throw a ReferenceError because let is in temporal dead zone
        result += `Accessing letExample before declaration: ${letExample}\n`;
        let letExample = "I'm not accessible before declaration!";
    } catch (error) {
        result += `Error with let: ${error.message}\n`;
        result += "✅ This is expected! Let variables are hoisted but not initialized.\n";
        
        // Now declare it properly
        let letExample = "Now I'm accessible!";
        result += `After proper declaration: ${letExample}\n`;
    }
    
    result += "\n📝 EXPLANATION:\n";
    result += "• var: Hoisted and initialized with 'undefined'\n";
    result += "• let/const: Hoisted but not initialized (Temporal Dead Zone)\n";
    result += "• Always declare variables before using them!";
    
    output.textContent = result;
    console.log(result);
}

// ============================================
// ✅ TASK 3: User Greeting (Conditionals)
// ============================================
function userGreeting() {
    const output = document.getElementById('task3-output');
    let result = "=== TASK 3: User Greeting (Conditionals) ===\n\n";
    
    // Get user input (using prompt for demonstration)
    const userName = prompt("Please enter your name:");
    const userAge = prompt("Please enter your age:");
    
    if (userName && userAge) {
        const age = parseInt(userAge);
        let greeting;
        
        // Conditional logic
        if (age < 18) {
            greeting = `Hey ${userName}, you're a teen!`;
        } else if (age >= 18 && age <= 60) {
            greeting = `Welcome ${userName}, you're an adult!`;
        } else {
            greeting = `Hello ${userName}, you're a senior citizen!`;
        }
        
        // Display the greeting
        alert(greeting);
        result += `User Input: Name = "${userName}", Age = ${age}\n`;
        result += `Greeting: ${greeting}\n`;
        
        // Demonstrate switch case as bonus
        result += "\n🎯 BONUS - Using Switch for Age Categories:\n";
        let category;
        switch (true) {
            case (age < 13):
                category = "Child";
                break;
            case (age < 18):
                category = "Teenager";
                break;
            case (age < 60):
                category = "Adult";
                break;
            default:
                category = "Senior";
        }
        result += `Age Category (switch): ${category}`;
        
    } else {
        result += "❌ User cancelled input or provided invalid data.";
    }
    
    output.textContent = result;
    console.log(result);
}

// ============================================
// ✅ TASK 4: Looping Numbers
// ============================================
function demonstrateLoops() {
    const output = document.getElementById('task4-output');
    let result = "=== TASK 4: Looping Numbers ===\n\n";
    
    // 1. FOR LOOP: Numbers 1 to 10
    result += "1. FOR LOOP - Numbers 1 to 10:\n";
    let forLoopResult = "";
    for (let i = 1; i <= 10; i++) {
        forLoopResult += i + " ";
        console.log(`For loop: ${i}`);
    }
    result += forLoopResult + "\n\n";
    
    // 2. WHILE LOOP: Even numbers 2 to 20
    result += "2. WHILE LOOP - Even numbers 2 to 20:\n";
    let whileLoopResult = "";
    let i = 2;
    while (i <= 20) {
        whileLoopResult += i + " ";
        console.log(`While loop (even): ${i}`);
        i += 2; // Increment by 2 to get even numbers
    }
    result += whileLoopResult + "\n\n";
    
    // 3. DO-WHILE LOOP: Numbers 10 down to 1
    result += "3. DO-WHILE LOOP - Numbers 10 down to 1:\n";
    let doWhileResult = "";
    let j = 10;
    do {
        doWhileResult += j + " ";
        console.log(`Do-while loop: ${j}`);
        j--;
    } while (j >= 1);
    result += doWhileResult + "\n\n";
    
    result += "✅ All loops completed! Check console for individual outputs.";
    
    output.textContent = result;
}

// ============================================
// ✅ TASK 5: Functions
// ============================================
function demonstrateFunctions() {
    const output = document.getElementById('task5-output');
    let result = "=== TASK 5: Functions ===\n\n";
    
    // 1. Function Declaration
    function add(a, b) {
        return a + b;
    }
    
    // 2. Function Expression
    const square = function(num) {
        return num * num;
    };
    
    // 3. Arrow Function
    const greetUser = (name) => {
        return `Hello, ${name}! Welcome to JavaScript!`;
    };
    
    // Alternative arrow function (shorter syntax)
    const greetUserShort = name => `Hi ${name}! 👋`;
    
    // Testing all functions
    result += "1. FUNCTION DECLARATION - add(a, b):\n";
    const sum = add(15, 25);
    result += `add(15, 25) = ${sum}\n\n`;
    
    result += "2. FUNCTION EXPRESSION - square(num):\n";
    const squared = square(8);
    result += `square(8) = ${squared}\n\n`;
    
    result += "3. ARROW FUNCTION - greetUser(name):\n";
    const greeting1 = greetUser("Alice");
    const greeting2 = greetUserShort("Bob");
    result += `greetUser("Alice") = ${greeting1}\n`;
    result += `greetUserShort("Bob") = ${greeting2}\n\n`;
    
    // Bonus: Different arrow function syntaxes
    result += "🎯 BONUS - Arrow Function Variations:\n";
    const multiply = (x, y) => x * y;                    // Multiple parameters
    const double = x => x * 2;                          // Single parameter
    const sayHello = () => "Hello World!";              // No parameters
    const complexFunction = (a, b) => {                 // Multiple statements
        const result = a + b;
        return `The sum is ${result}`;
    };
    
    result += `multiply(4, 5) = ${multiply(4, 5)}\n`;
    result += `double(7) = ${double(7)}\n`;
    result += `sayHello() = ${sayHello()}\n`;
    result += `complexFunction(10, 15) = ${complexFunction(10, 15)}`;
    
    // Log results to console
    console.log(`Function add result: ${sum}`);
    console.log(`Function square result: ${squared}`);
    console.log(`Arrow function greeting: ${greeting1}`);
    
    output.textContent = result;
}

// ============================================
// ✅ TASK 6: Callback Practice
// ============================================
function demonstrateCallbacks() {
    const output = document.getElementById('task6-output');
    let result = "=== TASK 6: Callback Practice ===\n\n";
    
    // Main function that accepts a callback
    function processNumber(num, callback) {
        console.log(`Processing number: ${num}`);
        callback(num);
    }
    
    result += "processNumber() function with different callbacks:\n\n";
    
    // Example 1: Double the number
    result += "1. Doubling callback:\n";
    processNumber(5, function(n) {
        const doubled = n * 2;
        console.log("Double is", doubled);
        result += `processNumber(5, doubleCallback) → Double is ${doubled}\n`;
    });
    
    // Example 2: Square the number
    result += "\n2. Squaring callback:\n";
    processNumber(4, function(n) {
        const squared = n * n;
        console.log("Square is", squared);
        result += `processNumber(4, squareCallback) → Square is ${squared}\n`;
    });
    
    // Example 3: Arrow function callback
    result += "\n3. Arrow function callback (cube):\n";
    processNumber(3, (n) => {
        const cubed = n * n * n;
        console.log("Cube is", cubed);
        result += `processNumber(3, cubeCallback) → Cube is ${cubed}\n`;
    });
    
    // Example 4: Named callback function
    result += "\n4. Named callback function:\n";
    function isEvenCallback(n) {
        const isEven = n % 2 === 0;
        console.log(`${n} is ${isEven ? 'even' : 'odd'}`);
        result += `processNumber(7, isEvenCallback) → 7 is ${7 % 2 === 0 ? 'even' : 'odd'}\n`;
    }
    processNumber(7, isEvenCallback);
    
    // Bonus: Array methods using callbacks
    result += "\n🎯 BONUS - Array Methods with Callbacks:\n";
    const numbers = [1, 2, 3, 4, 5];
    
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    
    result += `Original array: [${numbers.join(', ')}]\n`;
    result += `Doubled (map): [${doubled.join(', ')}]\n`;
    result += `Even numbers (filter): [${evens.join(', ')}]\n`;
    result += `Sum (reduce): ${sum}`;
    
    output.textContent = result;
}

// ============================================
// 🏁 BONUS: Mini Calculator Project
// ============================================
function runCalculator() {
    const output = document.getElementById('calculator-output');
    let result = "=== 🏁 BONUS: Mini Calculator Project ===\n\n";
    
    // Calculator functions
    const calculator = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b === 0) {
                return "Error: Cannot divide by zero!";
            }
            return a / b;
        }
    };
    
    // Get user input
    const num1 = parseFloat(prompt("Enter first number:"));
    const operation = prompt("Enter operation (+, -, *, /):").trim();
    const num2 = parseFloat(prompt("Enter second number:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        result += "❌ Invalid input! Please enter valid numbers.";
        alert("Invalid input! Please enter valid numbers.");
    } else {
        let calculationResult;
        let operationName;
        
        switch (operation) {
            case '+':
                calculationResult = calculator.add(num1, num2);
                operationName = "Addition";
                break;
            case '-':
                calculationResult = calculator.subtract(num1, num2);
                operationName = "Subtraction";
                break;
            case '*':
                calculationResult = calculator.multiply(num1, num2);
                operationName = "Multiplication";
                break;
            case '/':
                calculationResult = calculator.divide(num1, num2);
                operationName = "Division";
                break;
            default:
                calculationResult = "Invalid operation!";
                operationName = "Error";
        }
        
        const finalResult = `${num1} ${operation} ${num2} = ${calculationResult}`;
        
        result += `Calculator Input:\n`;
        result += `First Number: ${num1}\n`;
        result += `Operation: ${operation} (${operationName})\n`;
        result += `Second Number: ${num2}\n\n`;
        result += `Result: ${finalResult}\n\n`;
        
        // Show result in alert too
        alert(finalResult);
        
        // Bonus: Show calculation history
        result += "🎯 BONUS Features:\n";
        result += `• Operation Type: ${operationName}\n`;
        result += `• Numbers are ${typeof num1}\n`;
        result += `• Result is ${typeof calculationResult}\n`;
        
        if (operation === '/' && num2 !== 0) {
            result += `• Decimal places: ${calculationResult.toString().split('.')[1]?.length || 0}`;
        }
    }
    
    output.textContent = result;
    console.log("Calculator operation completed:", result);
}

// ============================================
// Additional Utility Functions
// ============================================

// Function to clear all outputs
function clearAllOutputs() {
    const outputs = document.querySelectorAll('.output');
    outputs.forEach(output => output.textContent = '');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 JavaScript Basics Assignment loaded!");
    console.log("Click the buttons to run each task.");
    
    // Add a clear button
    const container = document.querySelector('.container');
    const clearButton = document.createElement('button');
    clearButton.textContent = '🧹 Clear All Outputs';
    clearButton.onclick = clearAllOutputs;
    clearButton.style.background = '#dc3545';
    clearButton.style.display = 'block';
    clearButton.style.margin = '20px auto';
    container.appendChild(clearButton);
});