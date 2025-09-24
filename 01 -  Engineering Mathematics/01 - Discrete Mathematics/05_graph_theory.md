# 05. Graph Theory

A **graph** `G = (V, E)` consists of a set of **vertices** `V` and a set of **edges** `E`. Each edge connects a pair of vertices.

## 1. Basic Terminology
- **Undirected Graph:** Edges have no orientation.
- **Directed Graph (Digraph):** Edges have a direction.
- **Degree of a Vertex:** The number of edges incident to it. In a digraph, we have **in-degree** and **out-degree**.
- **Path:** A sequence of vertices where each adjacent pair is connected by an edge.
- **Cycle:** A path that starts and ends at the same vertex.
- **Simple Graph:** A graph with no self-loops or multiple edges between the same pair of vertices.
- **Complete Graph (Kₙ):** A simple undirected graph in which every pair of distinct vertices is connected by a unique edge.
- **Bipartite Graph:** A graph whose vertices can be divided into two disjoint sets, `U` and `V`, such that every edge connects a vertex in `U` to one in `V`.

## 2. Connectivity
- **Connected Graph:** An undirected graph is connected if there is a path between every pair of distinct vertices.
- **Connected Components:** The maximally connected subgraphs of a graph.
- **Cut Vertex (Articulation Point):** A vertex whose removal increases the number of connected components.
- **Cut Edge (Bridge):** An edge whose removal increases the number of connected components.
- **Strongly Connected (in a digraph):** There is a path from `a` to `b` and from `b` to `a` for every pair of vertices `(a, b)`.

## 3. Matching
- A **matching** in a graph is a set of edges without common vertices.
- **Maximum Matching:** A matching that contains the largest possible number of edges.
- **Perfect Matching:** A matching that covers all vertices of the graph. A perfect matching is a maximum matching, but the reverse is not always true.
- **Hall's Marriage Theorem:** Provides a condition for the existence of a matching that covers one side of a bipartite graph.

## 4. Colouring
- **Graph Colouring:** An assignment of labels ("colours") to the vertices of a graph such that no two adjacent vertices have the same colour.
- **Chromatic Number (χ(G)):** The minimum number of colours needed to colour a graph `G`.
- **Four Color Theorem:** The chromatic number of any planar graph (a graph that can be drawn on a plane without edges crossing) is no more than 4.
- **Applications:** Scheduling, register allocation in compilers, etc.

## 5. Special Paths and Circuits
- **Eulerian Path:** A path that visits every edge of the graph exactly once.
- **Eulerian Circuit:** An Eulerian path that starts and ends at the same vertex.
  - An undirected graph has an Eulerian circuit if and only if it is connected and every vertex has an **even degree**.
- **Hamiltonian Path:** A path that visits every vertex of the graph exactly once.
- **Hamiltonian Circuit:** A Hamiltonian path that is a cycle.
  - Finding a Hamiltonian circuit is an NP-complete problem.

---
Prev ← `04_algebraic_structures.md` | Next → `06_combinatorics.md` | Index: `README.md`
