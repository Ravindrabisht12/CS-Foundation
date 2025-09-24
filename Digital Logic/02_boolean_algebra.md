# 02. Boolean Algebra & Logic Identities

## 1. What is Boolean Algebra?

Boolean Algebra is the mathematical foundation of digital logic. It's a system of logic that deals with binary values—**0 (False)** and **1 (True)**. It provides a formal way to describe and manipulate logical statements and has three primary operations:

-   **AND (Conjunction):** `A · B` is True only if both A and B are True.
-   **OR (Disjunction):** `A + B` is True if either A or B (or both) are True.
-   **NOT (Negation):** `A'` is the opposite of A.

These operations allow us to build and simplify the complex functions that digital circuits implement.

## 2. Fundamental Laws and Identities

These laws are the rules used to manipulate and simplify Boolean expressions. They are crucial for optimizing digital circuits.

| Law | AND Form | OR Form | Description |
| :--- | :--- | :--- | :--- |
| **Identity** | `A · 1 = A` | `A + 0 = A` | A variable combined with the identity element is unchanged. |
| **Null/Annihilator** | `A · 0 = 0` | `A + 1 = 1` | A variable combined with the null element results in the null element. |
| **Idempotent** | `A · A = A` | `A + A = A` | Combining a variable with itself is redundant. |
| **Complement** | `A · A' = 0` | `A + A' = 1` | A variable combined with its opposite yields a constant. |
| **Involution** | `(A')' = A` | | Double negation cancels out. |
| **Commutative** | `A · B = B · A` | `A + B = B + A` | The order of operands does not matter. |
| **Associative** | `(A·B)·C = A·(B·C)` | `(A+B)+C = A+(B+C)` | Grouping of operands does not matter. |
| **Distributive** | `A·(B+C) = A·B + A·C` | `A+(B·C) = (A+B)·(A+C)` | An operation can be distributed over another. |
| **Absorption** | `A · (A+B) = A` | `A + (A·B) = A` | A term can "absorb" a more complex one containing it. |
| **De Morgan's** | `(A · B)' = A' + B'` | `(A + B)' = A' · B'` | Provides a way to convert between AND/OR forms under negation. |

## 3. XOR and XNOR Properties
-   **XOR (Exclusive OR):** `A ⊕ B = A'B + AB'`. The output is True if the inputs are different. It's a fundamental part of adders and parity checkers.
-   **XNOR (Exclusive NOR):** `A ⊙ B = AB + A'B'`. The output is True if the inputs are the same. It acts as an equality checker.

## 4. Canonical Forms: SOP and POS

Any Boolean function can be expressed in a standard, or "canonical," form. This is useful for formal analysis and simplification.

-   **Sum of Products (SOP):** The function is written as an OR of several AND terms (called **minterms**). Each minterm corresponds to a row in the truth table where the function's output is **1**.
    -   Example: `F = A'BC + AB'C + ABC'`
-   **Product of Sums (POS):** The function is written as an AND of several OR terms (called **maxterms**). Each maxterm corresponds to a row in the truth table where the function's output is **0**.
    -   Example: `F = (A+B+C) · (A+B'+C)`

## 5. Algebraic Simplification Techniques

Using the identities above, we can simplify complex expressions to reduce the number of gates in a circuit.

| Common Pattern | Simplified Form | Justification |
| :--- | :--- | :--- |
| `A + A'B` | `A + B` | Distributive Law: `(A + A')(A + B) = 1 · (A + B) = A + B` |
| `A(A' + B)` | `AB` | Distributive Law: `A·A' + A·B = 0 + A·B = AB` |
| `(A+B)(A+C)` | `A + BC` | Distributive Law (POS form) |

## 6. Functional Completeness

A set of logic gates is "functionally complete" if any possible Boolean function can be implemented using only gates from that set.
-   The set `{AND, OR, NOT}` is functionally complete.
-   The **NAND** gate is a **universal gate**; by itself, it is functionally complete.
-   The **NOR** gate is also a universal gate.

This is why many digital systems can be built using only one type of gate, simplifying manufacturing.

## 7. Hazards and Glitches
A **hazard** is a potential for a temporary, unwanted signal transition (a "glitch") at a circuit's output. It's caused by different propagation delays through different logic paths.
-   **Static Hazard:** The output should remain constant but momentarily changes.
-   Can be fixed by adding a **redundant logic term** (the "consensus term") that overlaps the other terms and covers the transition.

## 8. Pitfalls & Tips
| Issue | Advice |
|-------|--------|
| Forgetting the second distributive law: `A + BC = (A+B)(A+C)`. | This is less intuitive but crucial for converting between SOP and POS. |
| Errors in applying De Morgan's law. | "Break the line, change the sign." Invert each variable and change the operator (AND to OR, or vice-versa). |
| Simplifying based on intuition instead of laws. | Always be able to justify a simplification step with a specific algebraic law. |

---
Prev ← `01_number_systems.md` | Next → `03_combinational_circuits.md` | Index: `README.md`
