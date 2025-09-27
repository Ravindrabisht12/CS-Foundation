# 03. Context-Free Languages and Pushdown Automata

Context-Free Languages (CFLs) are the next step up from regular languages in the Chomsky hierarchy. They can describe more complex patterns, such as nested structures, which are common in programming languages (e.g., matched parentheses, `if-else` blocks).

## 1. Context-Free Grammars (CFG)
A CFG is a formal grammar used to generate all the strings in a context-free language. It consists of a set of recursive rules.

A CFG is formally defined as a 4-tuple `(V, T, P, S)`:
- `V`: A finite set of non-terminal symbols (variables).
- `T`: A finite set of terminal symbols (the alphabet of the language).
- `P`: A finite set of production rules. Each rule is of the form `A → α`, where `A` is a non-terminal and `α` is a string of terminals and/or non-terminals.
- `S`: The start symbol, a special non-terminal.

**Example:** A CFG for the language of balanced parentheses, `L = {ε, (), (()), ()() ...}`.
- `V = {S}`
- `T = {(, )}`
- `S` is the start symbol.
- `P`:
  - `S → (S)`  (Rule 1: for nesting)
  - `S → SS`   (Rule 2: for concatenation)
  - `S → ε`    (Rule 3: for the empty string)

**Derivation:** To generate a string, you start with `S` and repeatedly replace a non-terminal with one of its productions.
`S → (S) → (SS) → (())S → (())()`

**Parse Tree:** A tree representation of a derivation. If a string has more than one parse tree, the grammar is **ambiguous**.

## 2. Pushdown Automata (PDA)
A Pushdown Automaton is the machine model for context-free languages. It is essentially a **Finite Automaton** augmented with a **stack**.

The stack provides the PDA with memory, allowing it to recognize languages that a finite automaton cannot. For example, to recognize `L = {0ⁿ1ⁿ | n ≥ 0}`, the PDA can push a symbol onto the stack for every `0` it sees, and then pop a symbol for every `1`. If the stack is empty at the end, the string is accepted.

A PDA is formally a 7-tuple `(Q, Σ, Γ, δ, q₀, Z₀, F)`:
- `Q, Σ, q₀, F`: Same as in an FA.
- `Γ`: The finite stack alphabet.
- `Z₀`: The initial stack symbol.
- `δ`: The transition function, `δ: Q × (Σ ∪ {ε}) × Γ → Q × Γ*`.
  - The transition depends on the current state, the input symbol (or ε), and the symbol at the top of the stack.
  - The action involves changing state and replacing the top stack symbol with a string of stack symbols (push, pop, or no-op).

### Types of PDAs
- **Deterministic PDA (DPDA):** For any given configuration, there is at most one valid transition. DPDAs are less powerful than NPDAs. They recognize the subset of CFLs known as **Deterministic Context-Free Languages**.
- **Non-deterministic PDA (NPDA):** Can have multiple possible transitions. NPDAs are equivalent in power to CFGs.

**Equivalence:** For any CFG, there is an NPDA that recognizes the same language, and vice versa.

## 3. Properties of Context-Free Languages
CFLs are **closed** under:
- Union
- Concatenation
- Kleene Star

However, CFLs are **NOT closed** under:
- Intersection
- Complement

This is a key difference from regular languages. The intersection of two CFLs may not be a CFL.

---
Prev ← `02_regular_languages_and_finite_automata.md` | Next → `04_pumping_lemma.md` | Index: `README.md`
