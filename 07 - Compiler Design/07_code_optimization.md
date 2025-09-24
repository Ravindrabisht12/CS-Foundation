# 07. Code Optimization

Code optimization is the process of transforming a piece of code to make it more efficient (either in terms of speed or memory usage) without changing its output or behavior. Most optimizations are performed on the **intermediate code**.

## 1. Levels of Optimization
- **Machine-Independent Optimization:** Performed on the intermediate representation. These optimizations are general and not tied to the specifics of the target machine.
- **Machine-Dependent Optimization:** Performed during or after code generation. These optimizations leverage specific features of the target machine's architecture (e.g., its instruction set, registers).

## 2. Basic Blocks and Flow Graphs
To analyze and optimize code, we first partition the intermediate code into **basic blocks**.
- **Basic Block:** A sequence of consecutive instructions where control flow enters at the beginning and leaves at the end without any possibility of branching, except at the end.
- **Flow Graph:** A directed graph where the nodes are basic blocks and there is an edge from block `B₁` to `B₂` if `B₂` can immediately follow `B₁` in some execution sequence.

This representation makes it easier to analyze the flow of control and data through the program.

## 3. Machine-Independent Optimization Techniques

### a) Local Optimization
- Performed within a single basic block.
- **Constant Folding:** Evaluate constant expressions at compile time. `x = 2 + 3;` becomes `x = 5;`.
- **Constant Propagation:** If a variable is assigned a constant value, replace later uses of that variable with the constant.
  `x = 5; ... y = x + 2;` becomes `x = 5; ... y = 5 + 2;`.
- **Algebraic Simplification:** Use algebraic identities to simplify expressions. `x = y + 0;` becomes `x = y;`. `z = w * 1;` becomes `z = w;`.
- **Strength Reduction:** Replace expensive operations with cheaper ones. `x = y * 2;` can be replaced by `x = y << 1;` (a bit shift).
- **Common Subexpression Elimination (Local):** If an expression is computed multiple times within a block, compute it once and store the result.
  `a = b + c; ... x = b + c;` becomes `t = b + c; a = t; ... x = t;`.

### b) Global Optimization (Intra-procedural)
- Performed across the basic blocks of a single function (using the flow graph).
- **Global Common Subexpression Elimination:** Same as the local version, but it identifies common subexpressions across different basic blocks.
- **Dead Code Elimination:** Remove instructions or blocks of code that are unreachable or whose results are never used.
- **Code Motion (Loop Invariant Code Motion):** Move a computation that produces the same result in every iteration outside the loop.
  `while (i < limit - 2) { ... }` becomes `t = limit - 2; while (i < t) { ... }`.

### c) Loop Optimizations
- **Loop Unrolling:** Reduce the number of loop iterations by duplicating the loop body. This reduces loop overhead but increases code size.
- **Loop Fusion:** Combine two adjacent loops that have the same iteration space into a single loop.
- **Loop Fission (Distribution):** Split a single loop into multiple loops, each handling a part of the original loop's body.

## 4. Data Flow Analysis
Data flow analysis is a technique for gathering information about the possible set of values calculated at various points in a program. It is the foundation for many global optimizations.

Key analyses include:
- **Reaching Definitions:** For each point in the program, which variable assignments might have "reached" this point without being overwritten?
- **Liveness Analysis:** For each point and each variable, is the current value of the variable going to be used in the future? If not, the variable is "dead," and its register can be reused. This is crucial for register allocation.
- **Available Expressions:** For each point, which expressions have already been computed and are "available" for reuse? Used for global common subexpression elimination.

---
Prev ← `06_runtime_environments.md` | Next → `08_code_generation.md` | Index: `README.md`
