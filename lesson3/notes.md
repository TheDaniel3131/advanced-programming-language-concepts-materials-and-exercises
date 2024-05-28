# Lesson 3

Recaps from this week tutorial:
1. Purity and Higher Order Function (Mostly in Java/JavaScript):
   - Side effets in functional programmming
   - Purity concept
   - Lambda basics
   - Higher order function
   - Map, Filter, and Reduce functions (JavaScript) [They are pure functions and HOF!]
  
## Immutability in Functional Programming (FP)
- Variables are immutable meaning they cannot change the values after define the variables through initialization.
- NOT possible to modify but we can create new variables, this helps to preserve the state.
- Only primitive values are immutable. 
- Always use 'const' instead of 'let'.

### JavaScript Primitive Data Types
- Primitive datatypes such as String, Number, BigInt, Boolean, Undefined, Null, Symbols, etc.
- Any value in primitive datatypes is an object. (Even though some immutable objects like strings, booleans, numbers can act like one)
- Undefined global property = Primitive Values Undefined.
- Variable that is not assigned value means the value is undefined.. same goes to methods, statements or functions.

### JavaScript Non-primitive Data Types
- Non-primitive datatypes such as objects.
- Object can contain arrays, dates, and even objects.
- Object is a software component that encapsulates state and behavior together into a single entity in memory.
- JavaScript is designed on a simple object-based paradigm.
- An object is a collection of properties, and a property is an association between a name (or key) and a value.
-  A property's value can be a function, in which case the property is known as a method.
-  In JavaScript, an object is a standalone entity, with properties and type.
-  In JavaScript, functions are objects, and they can be manipulated by programs.
-  JavaScript can assign functions to variables and pass them to other functions, for example.
-  Since functions are objects, you can set properties on them and even invoke methods on them.

### Create Objects in JavaScript
- Object literals, constructor function with new keyword, and `Object.create()` function are used to create objects.

#### Object Literals
- The easiest way to create an object is to create an object literal.
- Object literals involve a comma-separated list of key-value pairs enclosed in curly braces in its simplest form.
- A property name (key) is a JavaScript identifier or a string literal (the empty string is allowed).
- A property value is any JavaScript expression; the value of the expression (it may be a primitive value or an object value) becomes the value of the property.

```JavaScript
// More complex values
let person = {
    "name": "Thanos",
    "Occupation": "Destroying half of humanity",
    "powers": [
"Can destroy anything with snap of his fingers",
"Damage resistance"] }

let s = JSON.stringify(person); //
let p = JSON.parse(s); //
console.log(s);
console.log(p);
```
### Object Serialization
- Object serialization is the process of converting an object’s state to a string from which it can later be restored.
- The functions JSON.stringify() and JSON.parse() serialize and restore JavaScript objects. These functions use the JSON data interchange format.
- JSON stands for “JavaScript Object Notation,” and its syntax is very similar to that of JavaScript object and array literals.
- The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

### JavaScript Object Vs. JSON (JavaScript Object Notation)
| JavaScript Objects | JSON |
|--------------------|------|
| Keys in key/value pairs don’t always need double quotes  | Keys in key/value pairs need to be enclosed in double quotes. |
| It is only used by JavaScript.             | Other programming languages are able to generate and use JSON. |
| Functions are compatible with JavaScript Object.         | Functions are incompatible with JSON. |
| The built-in JavaScript JSON.stringify() method allows you to convert JavaScript objects to JSON format.  | Using the built-in JSON.parse() method, you can transform JSON data into a JavaScript object. |

### Clssses in JavaScript
- Class Inheritance with extends
- Class inheritance causes several well-known problems that bear repeating:
   - Tight coupling: Class inheritance is the tightest form of coupling available in oo design.
   - Inflexible hierarchies: Given enough time and users, all class hierarchies are eventually wrong for new use cases, but tight coupling makes refactors difficult.
   - Gorilla/Banana problem: No selective inheritance. “You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ∼ Joe Armstrong in “Coders at Work”
   - Duplication by necessity: Due to inflexible hierarchies and the gorilla/banana problem, code reuse is often accomplished by copy/paste, violating DRY (Don’t Repeat Yourself) and defeating the entire purpose of inheritance in the first place.

### First Clsss Objects
- A functional programming language is one that treats functions as first rate citizens or first-class objects.
- That means that it allows you to pass a function as an argument to another function, return a function as the result of a function call, etc.
- Basically it allows you to pass functions around as if they were normal variables.
- The ability of functional programming languages to treat functions as values and pass them to functions as parameters make the code more readable and easily understandable.
- JavaScript function definitions can be nested within other functions, and they have access to any variables that are in scope where they are defined. This means that JavaScript functions are closures, and it enables important and powerful programming techniques.

### Function Declaration
- Function declarations consist of the function keyword, followed by : 
   - An identifier that names the function. The name is a required part of function declarations: it is used as the name of a variable, and the newly defined function object is assigned to the variable. 
   - A pair of parentheses around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function, and they behave like local variables within the body of the function. 
   - A pair of curly braces with zero or more JavaScript statements inside. These statements are the body of the function: they are executed whenever the function is invoked.
   - One of the important things to understand about function declarations is that the name of the function becomes a variable whose value is the function itself. Function declaration statements are “hoisted” to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears before the definition.  All of the functions declared in a block of JavaScript code will be defined throughout that block, and they will be defined before the JavaScript interpreter begins to execute any of the code in that block. 
   - The return statement causes the function to stop executing and to return the value of its expression (if any) to the caller. If the return statement does not have an associated expression, the return value of the function is undefined.

### Function Expressions
- Function expressions, unlike function declarations, do not declare a variable.
- Instead, they assign a function object to an existing variable.
- However, a function expression can include a name, which is useful for recursion.
- To ensure that the new function object can be referenced multiple times, it is recommended to assign it to a constant or variable using const.
- If a function expression includes a name, that name becomes a local variable within the function.
- This allows the function scope to include a binding of the function name to the function object.
- There is an important distinction between defining a function using a function declaration and assigning a function to a variable after creating it as an expression.
- With function declarations, the function objects are created and their definitions are hoisted before the code begins to run.
- This enables calling these functions from code written above the declaration.
- However, functions defined as expressions do not exist until the expression defining them is evaluated.
- Furthermore, you cannot refer to a function defined as an expression until it is assigned to a variable.
- Therefore, functions defined with expressions cannot be invoked before they are defined.

### Function Returning Function
Example: 
![image](https://github.com/TheDaniel3131/advanced-programming-language-concepts-materials-and-exercises/assets/71692327/452ff6f2-3275-4208-a6e9-bb968eef3f3e)

### Function as value
Example:
![image](https://github.com/TheDaniel3131/advanced-programming-language-concepts-materials-and-exercises/assets/71692327/16e5bef5-b237-4620-9f42-ef893728f88e)

### Function as argument
Example: 
![image](https://github.com/TheDaniel3131/advanced-programming-language-concepts-materials-and-exercises/assets/71692327/706b591b-0993-44c0-ab11-c0872bb26296)

### Currying
- It is the process of transforming a function into a series of nested unary functions.
- It involves converting a function that takes multiple arguments into a set of functions, each accepting a single argument.
- The arity of a function refers to the number of arguments it takes.
- When a function is curried, the result is a chain of unary functions.
- For example, currying a function f with three arguments would create a nested unary function g.
- This allows for the same functionality to be achieved by calling g with each argument separately or in sequence.

#### Curried Function
- Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

- Example: This is a function that takes two arguments, a and b, and returns their sum. 
```javascript
function add (a, b) {
  return a + b;
}
add(3, 4); // returns 7
```

lambda method:
```javascript
const a = x => y => z => x + y + z;
```

curried function:
```javascript
const addXYZ = function(x){
   return function(y){
      return function(z){
         return x + y + z;
      }
   }
};
```
   
### Arity
- The arity of a function represents the numbers of arguments it takes.
- A unary function is a function that takes one argument
- A binary function takes two arguments
- A ternary function takes three argument
- An n-ary function takes n argument
- A nullary function takes no argument
  
- Currying transforms a n-nary function into n unary function.

### Partial Expression
- Partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity. 
- Given a function , we might fix (or 'bind') the first argument, producing a function of type .

Example: 
![image](https://github.com/TheDaniel3131/advanced-programming-language-concepts-materials-and-exercises/assets/71692327/a6edba12-0d5e-43eb-be09-fe6303d8eaf3)

### Curried Function Vs. Partial Application
- Currying is the process of transforming an m-ary function (that is, a function of arity m) into a sequence of m unary functions, each of which receives one argument of the original function, from left to right. (The first function receives the first argument of the original function, the second function receives the second argument, and so on.) Upon being called with an argument, each function produces the next one in the sequence, and the last one does the actual calculations. 

- Partial application is the idea of providing n arguments to a m-ary function, being n less than or equal to m, to transform it into a function with (m-n) parameters. Each time you provide some arguments, a new function is produced, with smaller arity. When you provide the last arguments, the actual calculations are performed. 

- Partial currying is a mixture of both preceding ideas: you provide n arguments (from left to right) to a m-ary function and you produce a new function of arity (m-n). When this new function receives some other arguments, also from left to right, it will produce yet another function. When the last parameters are provided, the function produces the correct calculations.




