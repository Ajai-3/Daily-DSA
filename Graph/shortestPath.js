function shortestPath(grpah, start, end) {
    let queue = [[start, 0]]
    let visited = new Set()

    visited.add([start, 0])

    while(queue.length > 0) {
        let [node, distance] = queue.shift()
        if (node === end) return distance;

        for (let neibghor of graph[node]) {
            if (!visited.has(neibghor)) {
                visited.add(neibghor)
                queue.push([neibghor, distance + 1])
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