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

