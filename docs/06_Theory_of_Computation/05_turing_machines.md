# 05. Turing Machines

The Turing Machine (TM) is a mathematical model of computation that defines an abstract machine capable of simulating any computer algorithm. It is the most powerful model in the Chomsky hierarchy and is believed to be capable of computing anything that is computable.

## 1. The Church-Turing Thesis
This is a fundamental hypothesis in computer science which states that **any function that can be computed by an algorithm can be computed by a Turing Machine**.

This means that if a problem cannot be solved by a Turing Machine, it is considered **uncomputable**.

## 2. Components of a Turing Machine
A Turing Machine consists of:
1.  **An Infinite Tape:** The tape is divided into cells, each capable of storing one symbol. It acts as the machine's memory and is infinite in both directions.
2.  **A Tape Head:** The head can read the symbol from the current cell, write a new symbol to it, and move one cell to the left or right.
3.  **A Control Unit:** A finite state machine that directs the actions of the tape head based on the current state and the symbol being read.

A TM is formally a 7-tuple `(Q, Σ, Γ, δ, q₀, B, F)`:
- `Q, Σ, q₀, F`: Same as in an FA.
- `Γ`: The finite tape alphabet, which includes the input alphabet `Σ`.
- `B`: The blank symbol (`B ∈ Γ` but `B ∉ Σ`).
- `δ`: The transition function, `δ: Q × Γ → Q × Γ × {L, R}`.
  - `δ(q, X) = (p, Y, D)` means: if in state `q` and reading symbol `X`, transition to state `p`, write symbol `Y`, and move the tape head in direction `D` (Left or Right).

## 3. How a Turing Machine Computes
1.  The input string is placed on the tape, surrounded by blank symbols.
2.  The machine starts in state `q₀` with the head at the beginning of the input.
3.  The machine follows the transition function `δ`, changing states, writing to the tape, and moving the head.
4.  The computation **halts** if the machine enters a configuration for which `δ` is not defined.

**Acceptance and Rejection:**
- A TM **accepts** an input string if it enters a final state `F`.
- A TM **rejects** an input string if it halts in a non-final state.
- A TM can also **loop forever** on an input, never halting.

## 4. Languages and Turing Machines
- **Recursively Enumerable Languages (Type-0):** A language `L` is recursively enumerable if there exists a Turing Machine that **accepts** every string in `L` and either rejects or loops on strings not in `L`.
  - These are also called **Turing-recognizable** languages.

- **Recursive Languages:** A language `L` is recursive if there exists a Turing Machine that **halts on all inputs**, accepting strings in `L` and rejecting strings not in `L`. Such a TM is called a **decider**.
  - Recursive languages are a subset of recursively enumerable languages.

**Relationship:**
- All recursive languages are recursively enumerable.
- Not all recursively enumerable languages are recursive (e.g., the language of the Halting Problem).

## 5. Variations of Turing Machines
Many variations of the standard TM model have been proposed, but they have all been proven to be **equivalent in power** to the standard model. This provides strong evidence for the Church-Turing thesis.
- **Multi-tape Turing Machine:** Has multiple tapes and heads. Can be simulated by a single-tape TM.
- **Non-deterministic Turing Machine (NTM):** Can have multiple possible transitions. Can be simulated by a deterministic TM.
- **Multi-head Turing Machine:** Has multiple heads on a single tape.

These variations may be faster for certain problems, but they cannot solve any problem that a standard TM cannot.

---
Prev ← `04_pumping_lemma.md` | Next → `06_undecidability.md` | Index: `README.md`
