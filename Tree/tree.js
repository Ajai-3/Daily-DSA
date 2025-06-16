class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }

    printIndented(node = this.root, space = 0, gap = 5) {
        if (!node) return;
        space += gap;
        this.printIndented(node.right, space);
        console.log(" ".repeat(space - gap) + node.value);
        this.printIndented(node.left, space);
    }
}


const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);

tree.printIndented();
