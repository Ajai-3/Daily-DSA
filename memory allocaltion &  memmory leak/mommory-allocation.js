/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// MEMMORY ALLOCATION /////////////////////////////////////////////
// Memory allocation occurs when a program runs and needs memory to store variables, objects, and functions. 
// This process of reserving memory is called memory allocation.
// In JavaScript, memory is automatically managed by the Garbage Collector (GC). 
// However, poor coding practices can still lead to memory leaks.

// JavaScript uses two types of memory allocation:

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// STACK MEMORY //////////////////////////////////////////////////
let a = 10;
let b = a; // Creating a copy of 'a'
b = 20;

console.log(a); // Output: 10 (Original value remains the same)
console.log(b); // Output: 20 (Only the copy value changes)

// 🔹 How Stack Memory Works:
// - Stack memory is used to store **primitive data types** (Number, String, Boolean, Null, Undefined, Symbol, BigInt).
// - Each variable gets its own space in memory.
// - Changing one variable does NOT affect the original variable.


// 🔹 Special Characteristics of Primitive Data Types:
// 1️⃣ **Stored in Stack Memory** → Primitive values are stored in a fast, efficient memory space.
// 2️⃣ **Copied by Value** → Assigning a primitive value to another variable creates a new copy, not a reference.
// 3️⃣ **Independent Modification** → Modifying one variable does not affect the original.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// HEAP MEMORY ///////////////////////////////////////////////////

let obj1 = { name: "Ajai" };
let obj2 = obj1; // Assigning reference, not copying

obj2.name = "Kitty"; // Modifying obj2 also affects obj1

console.log(obj1); // Output: { name: "Kitty" }
console.log(obj2); // Output: { name: "Kitty" }

// 🔹 How Heap Memory Works:
// - Heap memory is used to store **non-primitive data types** like Objects, Arrays, and Functions.
// - These data types are stored **by reference** (memmory address), meaning multiple variables can point to the same object.
// - Changing one reference affects all other references to that object.


// 🔹 Special Characteristics of Non-Primitive Data Types:
// 1️⃣ **Stored in Heap Memory** → Objects and arrays are stored in a shared memory space.
// 2️⃣ **Copied by Reference** → Assigning an object to another variable does not create a copy; it just shares the reference.
// 3️⃣ **Mutability** → Changes made to one reference affect all other references to the same object.



