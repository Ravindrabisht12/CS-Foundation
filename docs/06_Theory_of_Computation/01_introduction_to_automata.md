# 01. Introduction to Automata Theory

## 1. What is Automata Theory?
Automata Theory is the study of **abstract machines** and the computational problems that can be solved using them. It is the foundational theory of computer science, exploring the capabilities and limitations of computation.

It answers fundamental questions like:
- What does it mean for a machine to "compute"?
- What problems can be solved by a computer?
- What problems are inherently unsolvable, regardless of computing power?

## 2. Core Concepts
- **Symbol:** The smallest, indivisible unit. Examples: `a`, `b`, `0`, `1`.
- **Alphabet (Σ):** A finite, non-empty set of symbols. Examples: `Σ = {0, 1}`, `Σ = {a, b, c}`.
- **String (or Word):** A finite sequence of symbols from an alphabet. `w = 01101` is a string over `Σ = {0, 1}`.
  - **Empty String (ε or λ):** A string with zero symbols.
- **Language (L):** A set of strings over a given alphabet. A language can be finite or infinite.
  - Example: The language of all binary strings that end in `0`. `L = {0, 00, 10, 000, 010, 100, 110, ...}`.

The central goal of automata theory is to define formal models of computation (automata) that can **recognize** or **generate** specific languages.

## 3. Formal Languages
A formal language is a set of strings defined by a set of rules. Automata theory provides the tools to define and classify these languages.

## 4. The Chomsky Hierarchy
The Chomsky Hierarchy classifies formal languages into four types, based on their complexity and the type of automaton required to recognize them.

| Type | Language | Grammar | Automaton |
|---|---|---|---|
| **Type-0** | Recursively Enumerable | Unrestricted | **Turing Machine** |
| **Type-1** | Context-Sensitive | Context-Sensitive | Linear-Bounded Automaton |
| **Type-2** | **Context-Free** | Context-Free | **Pushdown Automaton** |
| **Type-3** | **Regular** | Regular | **Finite Automaton** |

- **Regular Languages** are the simplest class, recognized by machines with no memory (Finite Automata).
- **Context-Free Languages** are more complex, recognized by machines with a stack (Pushdown Automata).
- **Recursively Enumerable Languages** are the most general class, recognized by the most powerful model, the Turing Machine.

This hierarchy forms the backbone of the course. We will study each class from the bottom up, starting with regular languages.

---
Next → `02_regular_languages_and_finite_automata.md` | Index: `README.md`
