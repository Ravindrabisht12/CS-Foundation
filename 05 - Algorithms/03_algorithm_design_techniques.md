# 03. Algorithm Design Techniques

Algorithm design techniques are general approaches or strategies for solving algorithmic problems. Mastering them allows you to tackle new problems effectively.

## 1. Greedy Algorithms
- **Strategy:** At each step, make the choice that seems best at the moment (a "locally optimal" choice) in the hope that it will lead to a globally optimal solution.
- **Characteristics:**
  - Simple and intuitive.
  - Does not always yield a globally optimal solution.
  - The main challenge is to prove that the greedy choice leads to an optimal solution for a given problem.
- **When it works:** The problem must have the **Greedy Choice Property** (a local optimum leads to a global one) and **Optimal Substructure** (an optimal solution to the problem contains optimal solutions to subproblems).

- **Examples:**
  - **Dijkstra's Algorithm:** At each step, greedily chooses the unvisited vertex with the smallest known distance.
  - **Prim's and Kruskal's Algorithms for MST:** Both are greedy. Prim's greedily adds the cheapest edge from a visited to an unvisited vertex. Kruskal's greedily adds the cheapest edge that doesn't form a cycle.
  - **Huffman Coding:** Greedily merges the two least frequent characters to build an optimal prefix-code tree.
  - **Fractional Knapsack:** Greedily take items with the highest value-to-weight ratio.

## 2. Dynamic Programming (DP)
- **Strategy:** Break down a complex problem into a collection of simpler, **overlapping subproblems**. Solve each subproblem only once and store its solution. When the same subproblem occurs again, look up the stored solution instead of recomputing it.
- **Characteristics:**
  - Solves problems by combining the solutions to subproblems.
  - The key is that subproblems are *overlapping*.
- **When it works:** The problem must have **Optimal Substructure** and **Overlapping Subproblems**.

- **Two main approaches:**
  1.  **Memoization (Top-Down):** Write a standard recursive function, but store the result of each subproblem. Before computing, check if the result is already stored.
  2.  **Tabulation (Bottom-Up):** Solve the subproblems in order of size, from smallest to largest. Fill a table (usually a 1D or 2D array) with the results. The solution to the overall problem is the final entry in the table.

- **Examples:**
  - **Fibonacci Sequence:** The classic example. `fib(n)` is `fib(n-1) + fib(n-2)`.
  - **0/1 Knapsack Problem:** Unlike the fractional version, you must either take an entire item or leave it. DP is used to find the optimal combination.
  - **Longest Common Subsequence (LCS):** Finding the longest subsequence common to two sequences.
  - **Floyd-Warshall Algorithm:** An all-pairs shortest path algorithm that uses DP.

## 3. Divide and Conquer
- **Strategy:**
  1.  **Divide:** Break the problem into several smaller, **independent** subproblems of the same type.
  2.  **Conquer:** Solve the subproblems recursively. If the subproblems are small enough, solve them directly.
  3.  **Combine:** Combine the solutions of the subproblems to get the solution for the original problem.
- **Characteristics:**
  - Subproblems are *independent* (unlike in DP, where they overlap).
  - Naturally suited for recursion.
  - The complexity is often analyzed using recurrence relations like `T(n) = aT(n/b) + f(n)`, which can be solved with the Master Theorem.

- **Examples:**
  - **Merge Sort:** Divides the array in half, recursively sorts both halves, and then merges them.
  - **Quick Sort:** Partitions the array around a pivot, then recursively sorts the two partitions. The "combine" step is trivial.
  - **Binary Search:** Divides the search space in half at each step.
  - **Closest Pair of Points:** An algorithm to find the two points in a set that are closest to each other.

## Comparison
| Technique | Subproblems | Strategy | Key Idea |
|---|---|---|---|
| **Greedy** | One subproblem | Make a locally optimal choice | Hope that local optimums lead to a global one |
| **Dynamic Programming**| Overlapping subproblems | Solve all subproblems and store results | Avoid recomputing the same subproblem |
| **Divide and Conquer**| Independent subproblems | Divide, solve recursively, and combine | Break a big problem into smaller, easier ones |

---
Prev ← `02_searching_sorting_hashing.md` | Next → `04_graph_algorithms.md` | Index: `README.md`
