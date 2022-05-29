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
}

Graph.prototype.toString = function () {
  Object.entries(this.adjacencyMap).forEach(([node, adjacencyList]) => adjacencyList.length && console.log(node + " is connected to [" + adjacencyList + "]"))
}

module.exports = { Graph }
