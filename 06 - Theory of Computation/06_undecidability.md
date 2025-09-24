# 06. Undecidability

Undecidability is the central concept at the limits of computation. An **undecidable problem** is a decision problem for which it is proven to be impossible to construct an algorithm (a Turing machine) that always leads to a correct yes-or-no answer.

## 1. Decidable vs. Undecidable Problems
- **Decidable Problem:** A problem for which a Turing Machine can be constructed that halts on all inputs and gives a correct "yes" or "no" answer. The language corresponding to a decidable problem is a **recursive language**.
- **Undecidable Problem:** A problem for which no such halting Turing Machine exists.

## 2. The Halting Problem
The most famous undecidable problem is the **Halting Problem**.
- **Question:** Given a description of a Turing Machine `M` and an input string `w`, will `M` halt on `w`?

It was proven by Alan Turing that this problem is **undecidable**. There is no single, universal algorithm that can look at any arbitrary program and its input and decide whether it will finish running or loop forever.

### Proof Sketch (by Contradiction)
1.  **Assume** there exists a Turing Machine `H` that solves the Halting Problem. `H(M, w)` returns "yes" if `M` halts on `w`, and "no" if `M` loops on `w`.
2.  Now, construct a new, "diagonal" machine `D` that takes a single input `M` (a description of a TM).
    - `D` uses `H` as a subroutine to check what `M` would do if given its own description as input: `H(M, M)`.
    - **`D`'s logic:**
      - If `H(M, M)` returns "yes" (meaning `M` halts on `M`), then `D` **loops forever**.
      - If `H(M, M)` returns "no" (meaning `M` loops on `M`), then `D` **halts**.
3.  Now, what happens when we feed `D` its own description? Let's run `D(D)`.
    - According to `D`'s logic, we first run `H(D, D)`.
    - **Case 1:** If `H(D, D)` says "yes" (i.e., `D` halts on `D`), then `D`'s logic dictates that it must **loop forever**. This is a contradiction.
    - **Case 2:** If `H(D, D)` says "no" (i.e., `D` loops on `D`), then `D`'s logic dictates that it must **halt**. This is also a contradiction.
4.  Since we arrive at a contradiction in all cases, our initial assumption must be false. Therefore, the machine `H` cannot exist, and the Halting Problem is undecidable.

## 3. Rice's Theorem
Rice's Theorem provides a powerful generalization of the Halting Problem's undecidability.

- **Statement:** Any **non-trivial property** of the language recognized by a Turing Machine is undecidable.
  - **Property of the language:** Something about the set of strings the TM accepts (e.g., "the language is empty," "the language is regular," "the language contains the string 'abc'"). It is not a property of the TM itself (e.g., "the TM has 10 states").
  - **Non-trivial:** The property must be true for some recursively enumerable languages and false for others.

**In simple terms:** You cannot create a general algorithm to determine any interesting property about what a program does just by looking at its code.

### Examples of Undecidable Problems (by Rice's Theorem)
It is undecidable to determine if a given Turing Machine `M`:
- Accepts an empty language (`L(M) = ∅`).
- Accepts a finite language.
- Accepts a regular language.
- Accepts a specific string `w`.
- Accepts all strings (`L(M) = Σ*`).

## 4. Post's Correspondence Problem (PCP)
Another famous undecidable problem.
- **Input:** A collection of "dominoes," each with a string on the top and a string on the bottom.
- **Question:** Is there a sequence of these dominoes (with repetition allowed) such that the string formed by concatenating the top parts is the same as the string formed by concatenating the bottom parts?

PCP is a very useful tool for proving that other problems are undecidable, by showing that if you could solve that other problem, you could also solve PCP (a technique called **reduction**).

---
Prev ← `05_turing_machines.md` | Index: `README.md`
