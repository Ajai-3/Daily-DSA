// DFS - is a graph traversal algorithm, it explores as deep as possible before backtracking
// It uses Stack (or recursion)
// Time complexity: O(V + E)

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addNode(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addNode(vertex1)
        if (!this.adjacencyList[vertex2]) this.addNode(vertex2)

        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2)
        }
        if (!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    dfs(start) {
        let stack = [start]
        let visited = new Set()
        let result = []

        visited.add(start)

        while(stack.length) {
            let node = stack.pop()
            result.push(node)

            for (let neighbor of this.adjacencyList[node]) {
               if (!visited.has(neighbor)) {
                   visited.add(neighbor)
                   stack.push(neighbor)
               }
            }
        }
        return result
    }
}

const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')

graph.addEdges('B', 'C')
graph.addEdges('A', 'C')
graph.addEdges('B', 'A')

console.log(graph)

console.log(graph.dfs("A"))