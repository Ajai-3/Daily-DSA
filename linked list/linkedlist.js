// ========================= 🌱 Node Class 🌱 =========================
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ========================= 🔗 LinkedList Class 🔗 =========================
class LinkedList {
    constructor() {
        this.head = null;
    }

    // ========================= 📏 Size of LinkedList 📏 =========================
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            current = current.next;
            count++;
        }
        return count;
    }

    // ========================= ➕ Add Operations ➕ =========================
    
    // 🏁 Add element at the beginning
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // 🎯 Add element at the end
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // ➡️ Insert after a given value
    insertAfter(x, data) {
        let current = this.head;
        while (current && current.data !== x) {
            current = current.next;
        }
        if (!current) {
            console.log("❌ Value not found!");
            return;
        }
        const newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
    }

    // ⬅️ Insert before a given value
    insertBefore(x, data) {
        if (!this.head) {
            console.log("⚠️ List is empty");
            return;
        }
        if (this.head.data === x) {
            this.addFirst(data);
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== x) {
            current = current.next;
        }
        if (!current.next) {
            console.log("❌ Value not found!");
            return;
        }
        const newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
    }

    // 📌 Insert at a specific index
    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.log("⚠️ Invalid index");
            return;
        }
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    // ========================= ❌ Remove Operations ❌ =========================
    
    // 🗑️ Remove first element
    removeTop() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    // 🗑️ Remove last element
    removeLast() {
        if (!this.head) return;
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // 🗑️ Remove element at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.log("⚠️ Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // 🗑️ Remove element by value
    removeValue(value) {
        if (!this.head) return;
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        } else {
            console.log("❌ Value not found!");
        }
    }

    // ========================= 📜 Print Operations 📜 =========================

    // 🔄 Print LinkedList in Order
    print() {
        let current = this.head;
        console.log("🔗 Linked List (Order):");
        while (current) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }

    // 🔄 Print LinkedList in Reverse Order (Helper Function)
    printReverseHelper(node) {
        if (!node) return;
        this.printReverseHelper(node.next);
        process.stdout.write(node.data + " -> ");
    }

    // 🔄 Print LinkedList in Reverse Order
    printReverse() {
        console.log("🔄 Reverse Order:");
        this.printReverseHelper(this.head);
        console.log("null");
    }
    // printReverse(current = this.head) {
    //     if (!current) return;
    //     this.printReverse(current.next);
    //     process.stdout.write(" <- " + current.data);
    // }
}

// ========================= 🛠️ Creating & Initializing LinkedList 🛠️ =========================
const linkedList = new LinkedList();

// ========================= 🔹 Adding Elements at the Beginning 🔹 =========================
linkedList.addFirst(8);
linkedList.addFirst(5);
linkedList.addFirst(2);
linkedList.addFirst(81);
linkedList.addFirst(51);
linkedList.addFirst(21);

// ========================= 🔹 Adding Elements at the End 🔹 =========================
linkedList.addLast(99);

// ========================= 🔹 Adding Elements at Specific Positions 🔹 =========================
linkedList.addAt(2, 33); // Insert 33 at index 2
linkedList.insertAfter(2, 66); // Insert 66 after value 2
linkedList.insertBefore(2, 77); // Insert 77 before value 2

// ========================= ❌ Removing Elements ❌ =========================
linkedList.removeTop(); // Remove first element
linkedList.removeLast(); // Remove last element
linkedList.removeAt(2); // Remove element at index 2
linkedList.removeValue(1); // Attempt to remove value 1 (if exists)

// ========================= 📜 Printing the LinkedList 📜 =========================
linkedList.print(); // Print elements in order
linkedList.printReverse(); // Print elements in reverse order
