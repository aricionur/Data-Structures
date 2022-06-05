const { ArrayQueue } = require("../queue/ArrayQueue")
const { Stack } = require("../stack/Stack")

class Graph {
  constructor() {
    this.adjacencyMap = {}
  }

  addNode(node) {
    if (!this.adjacencyMap[node]) this.adjacencyMap[node] = []
  }

  addEdge(fromNode, toNode) {
    if (!this.adjacencyMap[fromNode] || !this.adjacencyMap[toNode]) return

    if (!this.adjacencyMap[fromNode].includes(toNode)) this.adjacencyMap[fromNode].push(toNode)
  }

  remove(node) {
    delete this.adjacencyMap[node]

    Object.values(this.adjacencyMap).forEach(adjacencyList => {
      for (let i = 0; i < adjacencyList.length; i++) {
        if (adjacencyList[i] === node) {
          adjacencyList.splice(i, 1)
          break
        }
      }
    })
  }

  traverseDepthFisrt(node) {
    if (!this.adjacencyMap[node]) return

    const visited = {}
    this.traverseDepthFisrtRec(node, visited)
  }

  traverseDepthFisrtRec(node, visited) {
    console.log(node)
    visited[node] = 1

    for (const adjacentNode of this.adjacencyMap[node]) {
      if (!visited[adjacentNode]) this.traverseDepthFisrtRec(adjacentNode, visited)
    }
  }

  traverseBreadthFisrt(node) {
    if (!this.adjacencyMap[node]) return

    const visited = {}
    const queue = new ArrayQueue(10)
    queue.enqueue(node)

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue()
      console.log(currentNode)
      visited[currentNode] = 1

      this.adjacencyMap[currentNode].forEach(adjacentNode => !visited[adjacentNode] && queue.enqueue(adjacentNode))
    }
  }

  topologicalSort() {
    const stack = new Stack()
    const visited = {}

    for (const node of Object.keys(this.adjacencyMap)) {
      if (!visited[node]) this.topologicalSortRec(node, visited, stack)
    }

    const sorted = []
    while (!stack.isEmpty()) sorted.push(stack.pop())

    return sorted
  }

  topologicalSortRec(node, visited, stack) {
    visited[node] = 1

    for (const adjacentNode of this.adjacencyMap[node]) {
      if (!visited[adjacentNode]) this.topologicalSortRec(adjacentNode, visited, stack)
    }

    stack.push(node)
  }

  hasCycle() {
    const visited = {}
    const visiting = {}

    for (const node of Object.keys(this.adjacencyMap)) {
      if (!visited[node] && this.hasCycleRec(node, visited, visiting)) return true
    }

    return false
  }

  hasCycleRec(node, visited, visiting) {
    if (visiting[node]) return true
    else visiting[node] = 1

    for (const adjacentNode of this.adjacencyMap[node]) {
      if (!visited[node] && this.hasCycleRec(adjacentNode, visited, visiting)) return true
    }

    visited[node] = 1
    delete visiting[node]
  }
}

Graph.prototype.toString = function () {
  Object.entries(this.adjacencyMap).forEach(([node, adjacencyList]) => adjacencyList.length && console.log(node + " is connected to [" + adjacencyList + "]"))
}

module.exports = { Graph }
