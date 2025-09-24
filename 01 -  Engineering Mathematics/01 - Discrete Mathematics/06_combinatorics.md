# 06. Combinatorics

Combinatorics is the branch of mathematics concerned with counting, arrangement, and combination of objects.

## 1. Basic Counting Principles
- **Sum Rule:** If a task can be done in one of `n₁` ways or in one of `n₂` ways, where none of the `n₁` ways is the same as any of the `n₂` ways, then there are `n₁ + n₂` ways to do the task.
- **Product Rule:** If a procedure can be broken down into a sequence of two tasks, and there are `n₁` ways to do the first task and `n₂` ways to do the second task, then there are `n₁ × n₂` ways to do the procedure.

- **Pigeonhole Principle:** If `k+1` or more objects are placed into `k` boxes, then there is at least one box containing two or more of the objects.

## 2. Permutations and Combinations
- **Permutation:** An arrangement of objects in a specific order.
  - The number of `r`-permutations of a set with `n` distinct elements is:
    `P(n, r) = n! / (n-r)!`
- **Combination:** A selection of objects without regard to the order.
  - The number of `r`-combinations of a set with `n` distinct elements is:
    `C(n, r) = n! / (r! * (n-r)!)`, also denoted as `(n choose r)`.

- **Binomial Theorem:** `(x + y)ⁿ = Σ C(n, k) * x^(n-k) * y^k` for `k=0 to n`.

## 3. Recurrence Relations
A **recurrence relation** is an equation that recursively defines a sequence, where each term of the sequence is defined as a function of the preceding terms.

- **Example:** The Fibonacci sequence is defined by `F(n) = F(n-1) + F(n-2)`, with `F(0)=0` and `F(1)=1`.

- **Solving Recurrence Relations:**
  - **Linear Homogeneous Recurrence Relations with Constant Coefficients:**
    - Find the **characteristic equation**.
    - Find the roots of the characteristic equation.
    - The general solution is a linear combination of terms based on these roots.
    - Use the initial conditions to find the specific constants.
  - **Example:** For `aₙ = 5aₙ₋₁ - 6aₙ₋₂`, the characteristic equation is `r² - 5r + 6 = 0`, which has roots `r=2` and `r=3`. The general solution is `aₙ = c₁ * 2ⁿ + c₂ * 3ⁿ`.

## 4. Generating Functions
A **generating function** is a way of encoding an infinite sequence of numbers `(a₀, a₁, a₂, ...)` by treating them as the coefficients of a formal power series.
- `G(x) = a₀ + a₁x + a₂x² + ... = Σ aₙxⁿ`

- Generating functions can be used to:
  - Solve recurrence relations.
  - Solve counting problems.
  - Prove combinatorial identities.

**Example:** The generating function for the sequence `(1, 1, 1, ...)` is `1 + x + x² + ... = 1 / (1-x)`.

---
Prev ← `05_graph_theory.md` | Index: `README.md`
