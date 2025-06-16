// ❓ Question: How does a Stack work?
// 📌 Explanation:  
// A **stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.  
// 🔹 The last element added is the first one to be removed.  
// 🔹 Supports operations like **push, pop, peek, isEmpty, size, and print**.  

// 🔥 Stack Implementation in JavaScript
class Stack {
    constructor() {
        this.items = []; // 📦 Internal storage for stack elements
    }

    // 🏗️ Push: Add an element to the top of the stack
    push(value) {
        this.items.push(value);
        console.log(`✅ Pushed: ${value}`);
    }

    // 🗑️ Pop: Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.log("⚠️ Stack is empty, cannot pop.");
            return null;
        }
        const removedItem = this.items.pop();
        console.log(`❌ Popped: ${removedItem}`);
        return removedItem;
    }

    // 🔍 Peek: Get the top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("⚠️ Stack is empty.");
            return null;
        }
        console.log(`🔝 Top element: ${this.items[this.items.length - 1]}`);
        return this.items[this.items.length - 1];
    }

    // 📏 Size: Get the number of elements in the stack
    size() {
        console.log(`📏 Stack size: ${this.items.length}`);
        return this.items.length;
    }

    // 📜 Print: Display the stack from top to bottom
    print() {
        console.log("📚 Stack elements (top to bottom):");
        if (this.isEmpty()) {
            console.log("⚠️ Stack is empty.");
        } else {
            for (let i = this.items.length - 1; i >= 0; i--) {
                console.log(`   ${this.items[i]}`);
            }
        }
    }

    // ❓ isEmpty: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// 🏁 Test the Stack Implementation
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop(); 

stack.peek();  // 🔝 Checking the top element
stack.isEmpty(); // ❓ Checking if stack is empty
stack.size();  // 📏 Getting stack size
stack.print(); // 📜 Displaying stack

// 📌 Time Complexity:
// 🟩 Push: O(1) ✅
// 🟩 Pop: O(1) ✅
// 🟩 Peek: O(1) ✅
// 🟩 isEmpty: O(1) ✅
// 🟩 Size: O(1) ✅

// 🛠️ Space Complexity: O(n) (where n is the number of elements) 🚀
