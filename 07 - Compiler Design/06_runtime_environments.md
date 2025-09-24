# 06. Runtime Environments

The runtime environment is the system that manages the execution of a program. It handles the layout and management of memory used by the program. The compiler is responsible for generating code that works within this environment.

## 1. Memory Layout
When a program is executed, the operating system allocates a block of memory for it. This memory is typically organized into several segments:

1.  **Code Segment (Text Segment):**
    - Stores the compiled machine code of the program.
    - Is typically read-only to prevent accidental modification.
2.  **Static/Global Data Segment:**
    - Stores global variables and static variables.
    - The size of this segment is fixed at compile time.
3.  **Stack:**
    - Used for managing function calls.
    - Grows and shrinks as functions are called and return.
    - Stores local variables, function parameters, and control information.
4.  **Heap:**
    - Used for dynamic memory allocation (e.g., via `malloc` in C or `new` in C++).
    - Managed by the programmer or a garbage collector.

## 2. The Stack and Activation Records
The stack is fundamental to managing procedure (function) calls. Each time a function is called, a new **activation record** (or **stack frame**) is pushed onto the stack.

An activation record contains all the necessary information for a single function call:
- **Local Variables:** Space for the function's local variables.
- **Parameters:** The arguments passed to the function.
- **Return Value:** Space for the function's return value.
- **Return Address:** The address in the code to return to after the function completes.
- **Control Link (Dynamic Link):** A pointer to the activation record of the *caller* function. This is used to pop the current frame off the stack upon function return.
- **Access Link (Static Link):** Used in languages that support nested functions (like Pascal) to access variables in outer scopes.

**Stack Pointer (SP):** A register that points to the top of the stack.
**Frame Pointer (FP):** A register that points to a fixed location within the current activation record, used as a stable base to access local variables and parameters.

## 3. Scope
- **Static (Lexical) Scope:** The scope of a variable is determined by its position in the source code (the block in which it is defined). Most modern languages use static scoping. The compiler can determine the scope of all variables at compile time.
- **Dynamic Scope:** The scope of a variable is determined by the sequence of function calls at runtime. A variable refers to the most recently created binding in the current call chain.

## 4. Parameter Passing Mechanisms
This defines how arguments are passed from a caller function to the callee.

- **Pass-by-Value:**
  - The **value** of the argument is copied into the callee's activation record.
  - The callee cannot modify the original argument in the caller's scope.
  - This is the default in C, C++, and Java (for primitive types).

- **Pass-by-Reference:**
  - The **address** (a pointer to) the argument is passed to the callee.
  - The callee can modify the original argument.
  - Can be achieved in C/C++ using pointers or reference types (`&`).

- **Pass-by-Value-Result (or Copy-Restore):**
  - The value is copied into the callee (like pass-by-value).
  - When the callee returns, the final value is copied back to the original argument in the caller.

- **Pass-by-Name:**
  - A complex mechanism where the argument expression is textually substituted into the function body. It is re-evaluated every time it is accessed.
  - Rarely used in modern languages.

## 5. Heap Management
- **Allocation:** The runtime system must manage requests for blocks of memory of various sizes from the heap. It maintains a list of free blocks (a "free list").
- **Deallocation:**
  - **Manual Deallocation:** The programmer is responsible for explicitly freeing memory (e.g., `free()` in C). This can lead to errors like **memory leaks** (forgetting to free) or **dangling pointers** (using memory after it has been freed).
  - **Automatic Deallocation (Garbage Collection):** The runtime system automatically detects and reclaims memory that is no longer reachable by the program. This is safer but introduces performance overhead. Common techniques include **Mark-and-Sweep** and **Reference Counting**.

---
Prev ← `05_intermediate_code_generation.md` | Next → `07_code_optimization.md` | Index: `README.md`
