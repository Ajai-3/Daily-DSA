// autoComplete.js

class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    autoComplete(prefix) {
        let node = this.root
        for (let char of prefix) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        return this.collectWords(node, prefix)
    }

    collectWords(node, prefix) {
        let words = []
        if (node.isEndOfWord) {
            words.push(prefix)
        }

        for (let char in node.children) {
            words = words.concat(this.collectWords(node.children[char], prefix + char))
        }

        return words
    }
}


const trie = new Trie()

trie.insert("Hello")
trie.insert("Helping")
trie.insert("Hai")
trie.insert("Happy")
trie.insert("Helicopter")

console.log(trie.autoComplete("He"))

// console.log(JSON.stringify(trie, null, 2))