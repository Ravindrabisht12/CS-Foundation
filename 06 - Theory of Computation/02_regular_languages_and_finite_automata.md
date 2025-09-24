# 02. Regular Languages and Finite Automata

Regular languages are the simplest class in the Chomsky hierarchy. They are used in many practical applications, such as text searching (regex), lexical analysis in compilers, and simple hardware circuit design.

## 1. Regular Expressions (RE)
A regular expression is a formal way to specify a pattern of strings. It defines a regular language.

- **Basic Rules:**
  - `a`: The language containing just the string "a".
  - `ε`: The language containing the empty string.
  - `∅`: The empty language.
- **Operations:**
  - **Concatenation (`.`):** `R₁R₂` means a string from `R₁` followed by a string from `R₂`.
  - **Union (`+` or `|`):** `R₁ + R₂` means a string from either `R₁` or `R₂`.
  - **Kleene Star (`*`):** `R*` means zero or more concatenations of strings from `R`.

**Example:** The regular expression `(0+1)*0` defines the language of all binary strings that end in `0`.

## 2. Finite Automata (FA)
A finite automaton is a simple model of computation that has a finite number of states. It reads an input string one symbol at a time and changes its state based on the current symbol. It has no memory other than its current state.

An FA is formally defined as a 5-tuple `(Q, Σ, δ, q₀, F)`:
- `Q`: A finite set of states.
- `Σ`: A finite input alphabet.
- `δ`: The transition function (`δ: Q × Σ → Q`).
- `q₀`: The initial state.
- `F`: A set of final (or accepting) states.

The FA **accepts** a string if, after reading the entire string, it ends up in a final state.

### a) Deterministic Finite Automata (DFA)
- For each state and each input symbol, there is **exactly one** defined transition to a next state.
- No `ε` (empty string) transitions are allowed.

**Example:** A DFA to accept all binary strings ending in `0`.
- `Q = {q₀, q₁}`
- `Σ = {0, 1}`
- `q₀` is the start state.
- `F = {q₁}`
- `δ`:
  - `δ(q₀, 0) = q₁`
  - `δ(q₀, 1) = q₀`
  - `δ(q₁, 0) = q₁`
  - `δ(q₁, 1) = q₀`

### b) Non-deterministic Finite Automata (NFA)
- A state can have **zero, one, or multiple** transitions for a given input symbol.
- `ε` transitions are allowed, meaning the NFA can change its state without consuming an input symbol.
- An NFA accepts a string if **at least one** of the possible paths leads to a final state.

## 3. Equivalence of DFA, NFA, and Regular Expressions
A fundamental result in automata theory is that DFAs, NFAs, and Regular Expressions are all **equivalent in power**.
- For every regular expression, there is an NFA that recognizes the same language.
- For every NFA, there is an equivalent DFA that recognizes the same language (this is done via the **subset construction** algorithm).
- For every DFA, there is an equivalent regular expression.

This means any language that can be described by a regular expression can be recognized by a finite automaton, and vice versa. This is why they are all associated with the class of **regular languages**.

## 4. Properties of Regular Languages
Regular languages are **closed** under the following operations:
- Union (`L₁ ∪ L₂`)
- Concatenation (`L₁L₂`)
- Kleene Star (`L*`)
- Intersection (`L₁ ∩ L₂`)
- Complement (`L'`)

Closure means that if you apply these operations to regular languages, the result is also a regular language.

---
Prev ← `01_introduction_to_automata.md` | Next → `03_context_free_languages_and_pushdown_automata.md` | Index: `README.md`
