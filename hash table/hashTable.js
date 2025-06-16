class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += chat.charCode(i)
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key) {
        let key = this.hash(key);
        return this.table[index]
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log9i, this.table[i]
            }
        }
    }
}

const table = new HashTable(50)

table.set(9)
table.set(8)