# 03. Recursion

## 1. What is Recursion?
Recursion is a programming technique where a function calls itself to solve a problem. A recursive function breaks a problem down into smaller, self-similar subproblems until it reaches a simple case that can be solved directly.

Every recursive function must have two key components:
1.  **Base Case:** A condition that stops the recursion. Without a base case, the function would call itself indefinitely, leading to a **stack overflow**.
2.  **Recursive Step:** The part of the function that calls itself, but with modified arguments that move it closer to the base case.

## 2. Example: Factorial
The factorial of a non-negative integer `n`, denoted `n!`, is the product of all positive integers up to `n`.
- `5! = 5 * 4 * 3 * 2 * 1`
- This can be defined recursively: `n! = n * (n-1)!`

```c
int factorial(int n) {
    // Base Case: Factorial of 0 is 1
    if (n == 0) {
        return 1;
    }
    // Recursive Step: n * factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}
```
**How it works for `factorial(3)`:**
1. `factorial(3)` calls `factorial(2)` -> returns `3 * factorial(2)`
2. `factorial(2)` calls `factorial(1)` -> returns `2 * factorial(1)`
3. `factorial(1)` calls `factorial(0)` -> returns `1 * factorial(0)`
4. `factorial(0)` hits the base case and returns `1`.
5. The results "unwind":
   - `factorial(1)` returns `1 * 1 = 1`.
   - `factorial(2)` returns `2 * 1 = 2`.
   - `factorial(3)` returns `3 * 2 = 6`.

## 3. The Call Stack
Recursion is managed by the **call stack**. Each time a function is called, a new **stack frame** is pushed onto the stack. This frame contains the function's local variables, arguments, and the return address. When the function returns, its frame is popped off the stack.

In the `factorial(3)` example, the stack would look like this at its deepest point:
```
| factorial(0) | <- Top
| factorial(1) |
| factorial(2) |
| factorial(3) |
| main()       |
+--------------+
```
A **stack overflow** error occurs when the call stack runs out of space, which happens in infinite recursion.

## 4. Recursion vs. Iteration
Any problem that can be solved recursively can also be solved iteratively (using loops).

| Aspect | Recursion | Iteration |
|---|---|---|
| **Code** | Often more concise and closer to the mathematical definition. Can be more elegant. | Can be more verbose. |
| **Performance** | Generally slower due to the overhead of function calls (pushing/popping stack frames). | Faster as there is no function call overhead. |
| **Memory Usage** | Uses more memory due to the call stack. | Uses less memory (just a few loop variables). |
| **Readability** | Can be easier to understand for problems that are naturally recursive (e.g., tree traversals). | Can be easier to trace for simple, linear problems. |

## 5. Types of Recursion
- **Direct Recursion:** A function calls itself directly (e.g., `factorial`).
- **Indirect Recursion:** A function `A` calls function `B`, which in turn calls function `A`.
- **Tail Recursion:** The recursive call is the very last operation in the function.
  ```c
  void print_reverse(int n) {
      if (n == 0) return;
      printf("%d ", n);
      print_reverse(n - 1); // Not tail recursive
  }

  void print_reverse_tail(int n) {
      if (n == 0) return;
      print_reverse_tail(n - 1);
      printf("%d ", n); // Tail recursive call would be last
  }
  ```
  *Note: Some compilers can optimize tail recursion into iteration, eliminating the risk of stack overflow. This is called Tail Call Optimization (TCO).*

## 6. Common Recursive Problems
- **Fibonacci Sequence:** `fib(n) = fib(n-1) + fib(n-2)`
- **Binary Search:** Search a sorted array by repeatedly dividing the search interval in half.
- **Tree Traversals:** In-order, pre-order, and post-order traversals of a tree are naturally recursive.
- **Tower of Hanoi:** A classic puzzle solved elegantly with recursion.
- **Graph Traversal (DFS):** Depth-First Search is inherently recursive.

---
Prev ← `02_pointers_and_memory.md` | Next → `04_arrays.md` | Index: `README.md`
