# 01. Logic

Logic is the study of reasoning and argumentation. In computer science, it provides a formal basis for proving the correctness of programs and for artificial intelligence.

## 1. Propositional Logic
Propositional logic deals with **propositions**, which are declarative statements that are either true or false.

- **Connectives:**
  - **Negation (¬):** NOT (e.g., ¬P)
  - **Conjunction (∧):** AND (e.g., P ∧ Q)
  - **Disjunction (∨):** OR (e.g., P ∨ Q)
  - **Implication (→):** IF...THEN... (e.g., P → Q)
  - **Biconditional (↔):** IF AND ONLY IF (e.g., P ↔ Q)

- **Truth Tables:** A table that shows the truth value of a compound proposition for all possible truth values of its simple components.

- **Tautology, Contradiction, Contingency:**
  - **Tautology:** A proposition that is always true (e.g., P ∨ ¬P).
  - **Contradiction:** A proposition that is always false (e.g., P ∧ ¬P).
  - **Contingency:** A proposition that is neither a tautology nor a contradiction.

- **Logical Equivalence:** Two propositions are logically equivalent if they have the same truth table. Example: `P → Q` is equivalent to `¬P ∨ Q`.

## 2. First-Order Logic (Predicate Logic)
First-order logic is an extension of propositional logic that allows for more expressive statements. It introduces variables, predicates, and quantifiers.

- **Predicates:** A property or relationship that can be affirmed of an object or objects. For example, `IsGreaterThan(x, y)`.

- **Quantifiers:**
  - **Universal Quantifier (∀):** "For all". `∀x P(x)` means that `P(x)` is true for every `x` in the domain.
  - **Existential Quantifier (∃):** "There exists". `∃x P(x)` means that there is at least one `x` in the domain for which `P(x)` is true.

**Example:**
- The statement "Every student in this class has studied calculus" can be written as:
  `∀x (S(x) → C(x))`
  where `S(x)` is the predicate "x is a student in this class" and `C(x)` is the predicate "x has studied calculus".

- The statement "Some student in this class has visited Mexico" can be written as:
  `∃x (S(x) ∧ M(x))`
  where `S(x)` is "x is a student in this class" and `M(x)` is "x has visited Mexico".

---
Next → `02_sets_relations_functions.md` | Index: `README.md`
