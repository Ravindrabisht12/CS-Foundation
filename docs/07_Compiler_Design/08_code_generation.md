# 08. Code Generation

Code generation is the **final phase** of the compiler. It takes the optimized intermediate representation and converts it into the target machine's language (e.g., assembly or machine code).

- **Input:** Optimized intermediate code.
- **Output:** Target machine code.

This phase is highly machine-dependent and requires knowledge of the target machine's architecture, instruction set, and registers.

## 1. Key Challenges
- **Instruction Selection:** Choosing the appropriate machine instructions to implement the intermediate code operations. A single IR instruction like `a = b + c` might translate to a single `ADD` instruction or a sequence of `LOAD`, `ADD`, `STORE` instructions.
- **Register Allocation:** Deciding which variables and temporary values should be kept in the limited number of CPU registers to minimize memory access.
- **Instruction Ordering:** Reordering instructions to improve performance, for example, to avoid pipeline stalls.

## 2. Instruction Selection
- **Goal:** To produce the fastest possible sequence of machine instructions for a given IR.
- **Methods:**
  - **Tree-based Pattern Matching:** The IR can be represented as a tree, and the compiler can use tree-matching algorithms to find the optimal "tiling" of the IR tree with instruction trees.
  - **Dynamic Programming:** Can be used to find the lowest-cost instruction sequence for an expression tree.

For simple CISC machines, this can be straightforward. For complex RISC machines, it can be very challenging.

## 3. Register Allocation
- **Goal:** To assign program variables to the finite set of available CPU registers.
- **Why it's important:** Accessing registers is much faster than accessing main memory. Good register allocation is critical for performance.
- **The Problem:** There are usually more variables than registers. The allocator must decide which variables to keep in registers and which to "spill" to memory.

### Graph Coloring for Register Allocation
This is the standard modern approach to register allocation.
1.  **Construct an Interference Graph:**
    - The nodes of the graph are the variables (or temporaries) that need registers.
    - An edge is drawn between two nodes if the corresponding variables are **live** at the same time. (Liveness is determined by **liveness analysis**).
2.  **Color the Graph:**
    - The problem is then reduced to **graph coloring**. We need to assign a "color" (a register) to each node such that no two adjacent nodes have the same color.
    - The number of available colors is the number of available registers (`k`).
3.  **Spilling:**
    - If the graph cannot be colored with `k` colors (i.e., the chromatic number is greater than `k`), we must **spill** a variable.
    - This means choosing a variable to be stored in memory instead of a register. The node is removed from the graph, and the process is repeated.
    - Heuristics are used to choose which variable to spill (e.g., one with a low usage count).

## 4. A Simple Code Generator
A basic code generator might work as follows:
1.  For each three-address instruction `x = y op z`:
2.  Use a function `getReg(x)` to decide the location `L` where the result `x` should be stored. This might be a register or a memory location.
3.  `getReg` will determine if `y` and `z` are already in registers. If not, it will issue `LOAD` instructions to bring them into registers.
4.  Generate the instruction `op L, Ry, Rz` (where `Ry` and `Rz` are the registers for `y` and `z`).
5.  If the current value of a variable is no longer needed (it's "dead"), its register can be freed for reuse.

This process heavily relies on the information gathered during **data flow analysis** (like liveness) and the decisions made by the register allocator.

---
Prev ← `07_code_optimization.md` | Index: `README.md`
