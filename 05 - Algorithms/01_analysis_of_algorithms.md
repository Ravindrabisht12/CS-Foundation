# 01. Analysis of Algorithms & Asymptotic Notation

## 1. Why Analyze Algorithms?
When we have multiple algorithms to solve the same problem, we need a way to compare them and choose the most efficient one. Algorithm analysis provides a formal way to measure the **resources** (like time and memory) an algorithm requires.

- **Time Complexity:** The amount of time an algorithm takes to run as a function of the input size.
- **Space Complexity:** The amount of memory (space) an algorithm requires as a function of the input size.

We are usually most interested in the **rate of growth** of the complexity, not the exact execution time, as that can depend on the machine, compiler, etc.

## 2. Asymptotic Notations
Asymptotic notations are mathematical tools used to describe the complexity of algorithms in a machine-independent way. They focus on the algorithm's performance for **large input sizes**.

### a) Big-O Notation (O)
- **Definition:** Represents the **upper bound** of an algorithm's complexity. It gives the worst-case scenario.
- **Meaning:** `f(n) = O(g(n))` means that for large `n`, `f(n)` grows **no faster than** a constant multiple of `g(n)`.
- **Usage:** This is the most common notation used to describe an algorithm's complexity.

**Example:** If an algorithm has a time complexity of `3n² + 2n + 5`, its Big-O complexity is `O(n²)`. We drop constants and lower-order terms.

### b) Omega Notation (Ω)
- **Definition:** Represents the **lower bound** of an algorithm's complexity. It gives the best-case scenario.
- **Meaning:** `f(n) = Ω(g(n))` means that for large `n`, `f(n)` grows **at least as fast as** a constant multiple of `g(n)`.

**Example:** The best case for a sorting algorithm might be `Ω(n)` if the input is already sorted.

### c) Theta Notation (Θ)
- **Definition:** Represents a **tight bound**. The complexity is bounded both from above and below.
- **Meaning:** `f(n) = Θ(g(n))` means `f(n)` is `O(g(n))` AND `f(n)` is `Ω(g(n))`. The growth rate is precisely `g(n)`.
- **Usage:** Used when the best-case and worst-case complexities are the same.

**Example:** An algorithm that iterates through an array of size `n` once will always have a complexity of `Θ(n)`.

## 3. Common Growth Rates
Here are some common complexity classes, from fastest to slowest growing:

| Notation | Name | Example |
|---|---|---|
| `O(1)` | **Constant** | Accessing an array element by index. |
| `O(log n)` | **Logarithmic** | Binary search. |
| `O(n)` | **Linear** | Searching an unsorted array. |
| `O(n log n)` | **Log-Linear** | Efficient sorting algorithms (Merge Sort, Heap Sort). |
| `O(n²)` | **Quadratic** | Simple sorting algorithms (Bubble Sort, Selection Sort). |
| `O(n³)` | **Cubic** | Matrix multiplication. |
| `O(2ⁿ)` | **Exponential** | Traveling Salesman Problem (brute-force). |
| `O(n!)` | **Factorial** | Permutations of a set. |

![Complexity Graph](https://www.bigocheatsheet.com/img/big-o-graph.png)
*(Image from bigocheatsheet.com)*

## 4. Analyzing Code
- **Loops:** A simple `for` loop from `0` to `n` is `O(n)`. Nested loops are multiplied (e.g., two nested loops are `O(n²)`).
- **Consecutive Statements:** The complexities are added. `O(n) + O(n) = O(n)`.
- **If/Else:** The complexity is the complexity of the more expensive branch.
- **Logarithmic Complexity:** Occurs when the problem size is halved in each step (e.g., binary search).

## 5. Recurrence Relations
For recursive algorithms, we use recurrence relations to describe their complexity.
- **Example: Binary Search**
  - `T(n) = T(n/2) + c`
  - This means the time to solve a problem of size `n` is the time to solve a problem of size `n/2` plus a constant amount of work.
  - This solves to `T(n) = O(log n)`.

- **Example: Merge Sort**
  - `T(n) = 2T(n/2) + n`
  - This means the time to solve a problem of size `n` is the time to solve two subproblems of size `n/2` plus `O(n)` work to merge the results.
  - This solves to `T(n) = O(n log n)`.

The **Master Theorem** is a powerful tool for solving many common recurrence relations.

---
Next → `02_searching_sorting_hashing.md` | Index: `README.md`
