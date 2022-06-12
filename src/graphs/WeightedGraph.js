const { PriorityQueue } = require("../queue/PriorityQueue")
const { Stack } = require("../stack/Stack")

class Edge {
  constructor(to, weight) {
    this.to = to
    this.weight = weight
  }
}

class WeightedGraph {
  constructor() {
    this.edges = {}
  }

  addNode(node) {
    if (!this.edges[node]) this.edges[node] = []
  }

  addEdge(from, to, weight) {
    if (!this.edges[from] || !this.edges[to]) return

    if (!this.edges[from].filter(x => x.to === to).length) {
      this.edges[from].push(new Edge(to, weight))
      this.edges[to].push(new Edge(from, weight))
    }
  }

  /* dijkstra's algorithm */
  getShortestPath(from, to) {
    const distances = {}
    const previousNodes = {}
    const visited = {}

    Object.keys(this.edges).forEach(node => (distances[node] = Number.MAX_VALUE))
    distances[from] = 0 // set 'from' node

    const queue = new PriorityQueue(20, "descending")
    queue.enqueue(from, 5)

    // Breadth-First-Traverse
    while (!queue.isEmpty()) {
      const current = queue.remove()
      visited[current] = 1

      for (const edge of this.edges[current]) {
        if (visited[edge.to]) continue

        const newDistance = distances[current] + edge.weight
        if (newDistance < distances[edge.to]) {
          distances[edge.to] = newDistance
          previousNodes[edge.to] = current
          queue.enqueue(edge.to, newDistance)
        }
      }
    }

    const stack = new Stack()
    stack.push(to)
    let previous = previousNodes[to]
    while (previous) {
      stack.push(previous)
      previous = previousNodes[previous]
    }

    const path = []
    while (!stack.isEmpty()) path.push(stack.pop())

    return path
  }

  hasCycle() {
    const nodes = Object.keys(this.edges)
    if (!nodes.length) return false

    const randomInitialNode = nodes[0]
    const visited = {}

    return this.hasCycleRec(randomInitialNode, visited)
  }

  hasCycleRec(node, visited, parent) {
    visited[node] = 1

    for (const edge of this.edges[node]) {
      const { to } = edge
      if (parent === to) continue
      if (visited[to] || this.hasCycleRec(to, visited, node)) return true
    }

    return false
  }
}

module.exports = { WeightedGraph }
