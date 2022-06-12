const { Graph } = require("./Graph")
const { WeightedGraph } = require("./WeightedGraph")

// const graph = new Graph()
// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("C")
// graph.addEdge("A", "B")
// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("C", "B")
// graph.toString()

// graph.remove("B")
// console.log("***after remove***")
// graph.toString()

// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("C")
// graph.addNode("D")
// graph.addEdge("A", "B")
// graph.addEdge("B", "D")
// graph.addEdge("D", "C")
// graph.addEdge("A", "C")
// graph.traverseDepthFisrt("A")
// graph.traverseDepthFisrt("C")
// graph.traverseDepthFisrt("G")

// graph.traverseBreadthFisrt("A")

// topological sort of the graph
// graph.addNode("X")
// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("P")
// graph.addEdge("X", "A")
// graph.addEdge("X", "B")
// graph.addEdge("A", "P")
// graph.addEdge("B", "P")
// const topologicalSort = graph.topologicalSort()
// console.log("topologicalSort:", topologicalSort)

// check the graph has cycle ?
// graph.addNode("A")
// graph.addNode("B")
// graph.addNode("C")
// graph.addNode("D")
// graph.addEdge("A", "B")
// graph.addEdge("B", "C")
// graph.addEdge("D", "A")
// graph.addEdge("C", "A") // that provides a cycle in graph
// const hasCycle = graph.hasCycle()
// console.log("hasCycle:", hasCycle)

/* Weighted Graph tests */
// const weightedGraph = new WeightedGraph()
// weightedGraph.addNode("A")
// weightedGraph.addNode("B")
// weightedGraph.addNode("C")
// weightedGraph.addNode("D")
// weightedGraph.addNode("E")
// weightedGraph.addEdge("A", "B", 3)
// weightedGraph.addEdge("A", "C", 4)
// weightedGraph.addEdge("A", "D", 2)
// weightedGraph.addEdge("B", "E", 1)
// weightedGraph.addEdge("B", "D", 6)
// weightedGraph.addEdge("C", "D", 1)
// weightedGraph.addEdge("D", "E", 5)

// const shortestPath = weightedGraph.getShortestPath("A", "E")
// console.log("shortestPath:", shortestPath)

// // another simple graph
// const weightedGraph = new WeightedGraph()
// weightedGraph.addNode("A")
// weightedGraph.addNode("B")
// weightedGraph.addNode("C")
// weightedGraph.addEdge("A", "B", 1)
// weightedGraph.addEdge("B", "C", 2)
// weightedGraph.addEdge("A", "C", 15)

// const shortestPath = weightedGraph.getShortestPath("A", "C")
// console.log("shortestPath:", shortestPath)

const weightedGraph = new WeightedGraph()
weightedGraph.addNode("A")
weightedGraph.addNode("B")
weightedGraph.addNode("C")
weightedGraph.addEdge("A", "B", 1)
weightedGraph.addEdge("B", "C", 2)
// weightedGraph.addEdge("A", "C", 15) // test edge to provide cycle in graph
const hasCycle = weightedGraph.hasCycle()
console.log("hasCycle:", hasCycle)
