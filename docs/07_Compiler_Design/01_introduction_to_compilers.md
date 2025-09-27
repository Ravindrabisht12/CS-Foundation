# 01. Introduction to Compilers

## 1. What is a Compiler?
A **compiler** is a special program that translates source code written in a high-level programming language (like C++, Java, or Python) into a lower-level language (like assembly language, machine code, or another high-level language). The primary goal is to create an **executable program**.

**Source Language → Compiler → Target Language**

## 2. Compiler vs. Interpreter
| Feature | Compiler | Interpreter |
|---|---|---|
| **Input** | Takes the entire program at once. | Takes a single line or statement at a time. |
| **Output** | Generates an intermediate object code or executable file. | Does not generate an intermediate file. |
| **Execution** | The generated code is executed separately after compilation. | Executes the code line by line immediately. |
| **Speed** | Compiled code runs faster because the translation happens only once. | Slower because translation happens every time the program is run. |
| **Error Reporting** | Displays all errors and warnings after scanning the entire program. Harder to debug. | Stops at the first error encountered. Easier to debug. |
| **Example** | C, C++, Rust | Python, JavaScript, Ruby |

*Note: Many modern languages like Java and Python use a hybrid approach. Java code is compiled to bytecode, which is then interpreted (or just-in-time compiled) by the Java Virtual Machine (JVM).*

## 3. The Phases of a Compiler
A compiler is a complex piece of software, typically broken down into a series of phases. Each phase takes the output of the previous phase as its input.

The two main parts are the **Front End** and the **Back End**.

### Front End (Machine Independent)
The Front End deals with the source language. It analyzes the source code to build an intermediate representation.
1.  **Lexical Analysis (Scanning):** Reads the source code as a stream of characters and groups them into meaningful sequences called **lexemes**. It produces a stream of **tokens**. (e.g., `x = a + b;` becomes tokens for `x`, `=`, `a`, `+`, `b`, `;`).
2.  **Syntax Analysis (Parsing):** Takes the stream of tokens and verifies that it conforms to the grammatical rules of the language. It builds a hierarchical representation of the code, typically a **Parse Tree** or **Abstract Syntax Tree (AST)**.
3.  **Semantic Analysis:** Checks the AST for semantic consistency. This includes type checking (e.g., you can't add a string to an integer), variable declaration checks, etc.
4.  **Intermediate Code Generation:** Generates a machine-independent intermediate representation of the code, such as **Three-Address Code**. This code is easier to optimize and translate to a target machine.

### Back End (Machine Dependent)
The Back End deals with the target language. It takes the intermediate representation and generates the target code.
5.  **Code Optimization:** Improves the intermediate code to make it run faster and/or use less memory. This is an optional but crucial phase.
6.  **Code Generation:** The final phase. It translates the optimized intermediate code into the target language (e.g., assembly or machine code). This involves instruction selection, register allocation, and instruction ordering.

### Symbol Table Management
- A data structure used throughout all phases of the compiler.
- It stores information about all the identifiers (variables, function names, etc.) used in the program, such as their type, scope, and memory location.

### Error Handling
- Detects and reports errors during each phase.
- Must be able to recover from errors to continue processing the rest of the program.

![Phases of a Compiler](https://media.geeksforgeeks.org/wp-content/uploads/20230323125625/Phases-of-a-compiler.png)

---
Next → `02_lexical_analysis.md` | Index: `README.md`
