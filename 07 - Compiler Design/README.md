# Compiler Design Study Guide

This folder contains a structured study guide for Compiler Design. The topics are organized to follow the logical phases of a compiler.

## Study Roadmap

1.  **`01_introduction_to_compilers.md`**: An overview of the phases of a compiler, the difference between compilers and interpreters, and the tools used in compiler construction.
2.  **`02_lexical_analysis.md`**: The first phase of the compiler. Covers the role of the lexical analyzer, tokens, lexemes, patterns, and the use of regular expressions and finite automata.
3.  **`03_parsing_and_syntax_analysis.md`**: The second phase. Details the role of the parser, context-free grammars, parse trees, and different parsing techniques (Top-Down: LL; Bottom-Up: LR, SLR, LALR).
4.  **`04_syntax_directed_translation.md`**: Discusses how to attach "actions" (semantic rules) to the grammar to produce an intermediate representation or perform type checking. Covers S-attributed and L-attributed definitions.
5.  **`05_intermediate_code_generation.md`**: Focuses on the machine-independent intermediate representations, such as Three-Address Code, and how to generate it from the source code.
6.  **`06_runtime_environments.md`**: Explains how memory is organized and managed during program execution, including the stack, heap, activation records, and parameter passing.
7.  **`07_code_optimization.md`**: Covers techniques to improve the intermediate code to make it faster and more efficient. Includes local optimization, data flow analysis, and common optimization strategies.
8.  **`08_code_generation.md`**: The final phase of the compiler. Discusses the challenges of generating target machine code from the optimized intermediate representation, including instruction selection and register allocation.

## How to Use

-   Follow the topics in numerical order to understand the flow of data through a compiler.
-   Each file contains navigation links (`Prev`, `Next`, `Index`) at the bottom.
-   Check the `RESOURCES.md` file for a curated list of external learning materials.

Happy learning!
