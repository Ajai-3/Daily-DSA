/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// MEMORY LEAK //////////////////////////////////////////////////

// Memory leak happens when memory is allocated but never released, causing memory usage to grow continuously.
// This can lead to slow performance, lagging, and even crashes.

// ⚠️ COMMON CAUSES OF MEMORY LEAKS ⚠️ //

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// 1. GLOBAL VARIABLES ///////////////////////////////////////////

// If a variable is declared without let, const, or var, it becomes a global variable,
// which remains in memory throughout the program execution.

function createLeak() {
    leakyVariable = "I am a memory leak"; // ❌ No let/const/var → Creates a global variable
}

createLeak();
console.log(leakyVariable); // "I am a memory leak" still exists in memory!

// ✅ FIX:
function noLeak() {
    let safeVariable = "I am temporary"; // ✅ Uses let → Memory gets freed when function exits
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// 2. UNUSED EVENT LISTENERS ///////////////////////////////////////

// If event listeners are added but never removed, memory usage keeps growing.

document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked!"); 
}); // ❌ Event listener remains forever

// ✅ FIX:
let button = document.getElementById("btn");
function handleClick() {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);

// When you no longer need it:
button.removeEventListener("click", handleClick); // ✅ Properly removes the event listener

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// 3. SETINTERVAL WITHOUT CLEARING /////////////////////////////////

// setInterval runs indefinitely unless cleared, leading to a memory leak.

let timer = setInterval(() => {
    console.log("Still running...");
}, 1000);

// ❌ If clearInterval is not called, memory keeps increasing

clearInterval(timer); // ✅ Stops the interval, freeing the memory

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// 4. CLOSURES HOLDING REFERENCES ///////////////////////////////////

// Closures can hold memory references to variables, preventing garbage collection.

function createClosure() {
    let bigArray = new Array(1000000).fill("Data");

    return function () {
        console.log(bigArray.length); // ❌ 'bigArray' stays in memory even if not needed
    };
}

let closureFunction = createClosure();
// 'bigArray' is never cleared from memory as long as closureFunction exists.

closureFunction();

// ✅ FIX:
function createSafeClosure() {
    let bigArray = new Array(1000000).fill("Data");

    return function () {
        console.log(bigArray.length);
        bigArray = null; // ✅ Explicitly free memory
    };
}

let safeClosureFunction = createSafeClosure();
safeClosureFunction(); // Memory is released

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// 5. DOM NODES NOT REMOVED ////////////////////////////////////////

// If an element is removed from the DOM but still has references in JavaScript, memory is not freed.

let div = document.createElement("div");
div.innerHTML = "I will be removed";

document.body.appendChild(div);

// ❌ Even after removing from DOM, memory is still held
document.body.removeChild(div); 

// ✅ FIX:
div = null; // ✅ Removes the reference, allowing garbage collection
