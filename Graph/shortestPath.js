function shortestPath(graph, start, end) {
   let queue = [[start, 0]] 
   let visited = new Set()

   while(queue.length > 0) {
    let [node, distance] = queue.shift()

    if (node === end) return distance
    visited.add(node)

    for (let neibhour of graph[node]) {
        if (!visited.has(neibhour)) {
            visited.add(neibhour)
            queue.push([neibhour, distance + 1])
        }
    }
   }
   return -1
}

let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log(shortestPath(graph, 'A', 'F'))