# 03. Partially Ordered Sets (Posets) and Lattices

## 1. Partially Ordered Sets (Posets)
A **partial order** is a binary relation on a set that is **reflexive, antisymmetric, and transitive**.
- A set `S` together with a partial ordering relation `R` is called a **partially ordered set** or **poset**, denoted as `(S, R)`.
- The relation is often denoted by `≤` (read "precedes").

**Example:** The "less than or equal to" relation on the set of integers is a partial order. The "divides" relation on the set of positive integers is also a partial order.

- **Comparable vs. Incomparable:** In a poset, two elements `a` and `b` are **comparable** if either `a ≤ b` or `b ≤ a`. Otherwise, they are **incomparable**.
- **Total Order:** If every pair of elements in a poset is comparable, the order is called a **total order** or **linear order**.

- **Hasse Diagrams:** A graphical representation of a finite poset.
  - Each element is represented by a dot (vertex).
  - If `y` covers `x` (i.e., `x ≤ y`, `x ≠ y`, and there is no `z` such that `x ≤ z ≤ y`), then a line segment is drawn from `x` up to `y`.
  - Reflexive and transitive links are omitted.

- **Special Elements in a Poset:**
  - **Maximal Element:** An element that is not less than any other element.
  - **Minimal Element:** An element that is not greater than any other element.
  - **Greatest Element (Top):** An element that is greater than every other element.
  - **Least Element (Bottom):** An element that is less than every other element.
  - **Upper Bound:** An element `u` is an upper bound of a subset `A` if `a ≤ u` for all `a ∈ A`.
  - **Lower Bound:** An element `l` is a lower bound of a subset `A` if `l ≤ a` for all `a ∈ A`.
  - **Least Upper Bound (LUB or Supremum):** The upper bound that is less than all other upper bounds.
  - **Greatest Lower Bound (GLB or Infimum):** The lower bound that is greater than all other lower bounds.

## 2. Lattices
A **lattice** is a poset in which every pair of elements has both a **least upper bound (LUB)** and a **greatest lower bound (GLB)**.

- **LUB** is also called the **join** of the two elements, denoted by `a ∨ b`.
- **GLB** is also called the **meet** of the two elements, denoted by `a ∧ b`.

**Example:** The power set of a set `S`, ordered by set inclusion `⊆`, is a lattice. For any two subsets `A` and `B`, their join is `A ∪ B` and their meet is `A ∩ B`.

- **Properties of Lattices:**
  - Idempotent: `a ∨ a = a`, `a ∧ a = a`
  - Commutative: `a ∨ b = b ∨ a`, `a ∧ b = b ∧ a`
  - Associative: `(a ∨ b) ∨ c = a ∨ (b ∨ c)`, `(a ∧ b) ∧ c = a ∧ (b ∧ c)`
  - Absorption: `a ∨ (a ∧ b) = a`, `a ∧ (a ∨ b) = a`

- **Types of Lattices:**
  - **Distributive Lattice:** A lattice where the distributive laws hold: `a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)`.
  - **Complemented Lattice:** A bounded lattice (has a greatest and least element) where every element `a` has a **complement** `a'` such that `a ∨ a' = 1` (top) and `a ∧ a' = 0` (bottom).
  - **Boolean Algebra:** A complemented, distributive lattice.

---
Prev ← `02_sets_relations_functions.md` | Next → `04_algebraic_structures.md` | Index: `README.md`
