# 04. Graph Algorithms

Graph algorithms are a fundamental part of computer science, used to solve problems related to networks, routing, and relationships.

## 1. Graph Traversal
(Covered in Data Structures, recapped here)
- **Breadth-First Search (BFS):** `O(V+E)`. Uses a queue. Explores layer by layer. Finds the shortest path in unweighted graphs.
- **Depth-First Search (DFS):** `O(V+E)`. Uses a stack (often via recursion). Explores as far as possible before backtracking. Used for cycle detection, topological sort, and finding connected components.

## 2. Minimum Spanning Tree (MST)
- **Problem:** Given a **connected, undirected, weighted graph**, find a subgraph that connects all the vertices together with the minimum possible total edge weight. The result is a tree (it has no cycles).
- **Application:** Designing a network (e.g., laying cables) to connect a set of sites with the minimum cost.

### a) Kruskal's Algorithm
- **Strategy:** Greedy.
- **Algorithm:**
  1. Sort all edges in the graph by weight in non-decreasing order.
  2. Initialize the MST as an empty set.
  3. Iterate through the sorted edges. For each edge, if adding it to the MST does not form a cycle, add it.
  4. Stop when the MST has `V-1` edges.
- **Data Structure:** A **Disjoint Set Union (DSU)** or **Union-Find** data structure is used to efficiently detect cycles.
- **Time Complexity:** `O(E log E)` or `O(E log V)`. The bottleneck is sorting the edges.

### b) Prim's Algorithm
- **Strategy:** Greedy.
- **Algorithm:**
  1. Start from an arbitrary vertex.
  2. Grow the MST by adding one vertex at a time.
  3. At each step, find the cheapest edge that connects a vertex in the MST to a vertex outside the MST, and add it.
- **Data Structure:** A **Priority Queue** (often a min-heap) is used to efficiently find the cheapest edge.
- **Time Complexity:** `O(E log V)` with a binary heap, or `O(E + V log V)` with a Fibonacci heap.

## 3. Single-Source Shortest Path
- **Problem:** Find the shortest path from a single source vertex `s` to all other vertices in a weighted graph.

### a) Dijkstra's Algorithm
- **Constraint:** Works only for graphs with **non-negative edge weights**.
- **Strategy:** Greedy. Similar to Prim's algorithm.
- **Algorithm:**
  1. Maintain a set of visited vertices and a distance array `dist[]`, initialized to infinity for all vertices except the source (`dist[s] = 0`).
  2. At each step, select the unvisited vertex `u` with the smallest distance in `dist[]`.
  3. Mark `u` as visited.
  4. For each neighbor `v` of `u`, "relax" the edge: if `dist[u] + weight(u,v) < dist[v]`, then update `dist[v]`.
- **Data Structure:** A **Priority Queue** is used to efficiently select the vertex with the minimum distance.
- **Time Complexity:** `O(E log V)`.

### b) Bellman-Ford Algorithm
- **Constraint:** Can handle **negative edge weights**.
- **Strategy:** Dynamic Programming.
- **Algorithm:**
  1. Initialize distances as in Dijkstra's.
  2. Relax **all** edges `V-1` times. After `i` iterations, the algorithm finds all shortest paths that have at most `i` edges.
  3. After `V-1` iterations, perform one more iteration. If any distance is updated, it means there is a **negative-weight cycle** in the graph.
- **Time Complexity:** `O(V * E)`. Slower than Dijkstra's, but more versatile.

## 4. All-Pairs Shortest Path
- **Problem:** Find the shortest path between **every pair** of vertices in a graph.

### a) Floyd-Warshall Algorithm
- **Constraint:** Can handle negative edge weights (but not negative cycles).
- **Strategy:** Dynamic Programming.
- **Algorithm:**
  1. Initialize a distance matrix `dist[V][V]` with direct edge weights.
  2. Iterate through all vertices `k` from `0` to `V-1`.
  3. For each `k`, update the shortest path between every pair of vertices `(i, j)` by considering if going through `k` is shorter: `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`.
- **Time Complexity:** `O(V³)` - simple to implement but only suitable for smaller graphs.

## 5. Topological Sort
- **Problem:** For a **Directed Acyclic Graph (DAG)**, create a linear ordering of vertices such that for every directed edge from `u` to `v`, `u` comes before `v` in the ordering.
- **Application:** Task scheduling, dependency resolution.
- **Algorithm (Kahn's Algorithm):**
  1. Compute the in-degree of all vertices.
  2. Initialize a queue with all vertices that have an in-degree of 0.
  3. While the queue is not empty:
     a. Dequeue a vertex `u` and add it to the topological sort result.
     b. For each neighbor `v` of `u`, decrement its in-degree.
     c. If `v`'s in-degree becomes 0, enqueue it.
- **Time Complexity:** `O(V + E)`.

---
Prev ← `03_algorithm_design_techniques.md` | Index: `README.md`
