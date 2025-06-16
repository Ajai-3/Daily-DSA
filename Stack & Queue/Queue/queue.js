// ❓ Question: How does a Queue work?
// 📌 Explanation:  
// A **queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.  
// 🔹 The first element added is the first one to be removed.  
// 🔹 Supports operations like **enqueue, dequeue, front, isEmpty, size, and print**.  

// 🔥 Queue Implementation in JavaScript
class Queue {
    constructor() {
        this.items = []; // 📦 Internal storage for queue elements
    }

    // 🚀 Enqueue: Add an element to the end of the queue
    enqueue(value) {
        this.items.push(value);
        console.log(`✅ Enqueued: ${value}`);
    }

    // 🗑️ Dequeue: Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("⚠️ Queue is empty, cannot dequeue.");
            return null;
        }
        const removedItem = this.items.shift();
        console.log(`❌ Dequeued: ${removedItem}`);
        return removedItem;
    }

    // 🔍 Front: Get the front element without removing it
    front() {
        if (this.isEmpty()) {
            console.log("⚠️ Queue is empty.");
            return null;
        }
        console.log(`🎯 Front element: ${this.items[0]}`);
        return this.items[0];
    }

    // 📏 Size: Get the number of elements in the queue
    size() {
        console.log(`📏 Queue size: ${this.items.length}`);
        return this.items.length;
    }

    // 📜 Print: Display the queue from front to back
    print() {
        console.log("🚦 Queue elements (front to back):");
        if (this.isEmpty()) {
            console.log("⚠️ Queue is empty.");
        } else {
            console.log(this.items.join(" <- "));
        }
    }

    // ❓ isEmpty: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// 🏁 Test the Queue Implementation
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();

queue.front();   // 🎯 Checking the front element
queue.isEmpty(); // ❓ Checking if queue is empty
queue.size();    // 📏 Getting queue size
queue.print();   // 📜 Displaying queue

// 📌 Time Complexity:
// 🟩 Enqueue: O(1) ✅
// 🟩 Dequeue: O(1) ✅
// 🟩 Front: O(1) ✅
// 🟩 isEmpty: O(1) ✅
// 🟩 Size: O(1) ✅

// 🛠️ Space Complexity: O(n) (where n is the number of elements) 🚀
