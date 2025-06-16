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

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }


    bfs(start) {
        let queue = [start]
        let visited = new Set()
        let result = []

        visited.add(start)

        while (queue.length) {
            let node = queue.shift()
            result.push(node)

            for (let neibhour of this.adjacencyList[node]) {
                if (!visited.has(neibhour)) {
                     visited.add(neibhour)
                     queue.push(neibhour)
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

console.log(graph.bfs("A"))