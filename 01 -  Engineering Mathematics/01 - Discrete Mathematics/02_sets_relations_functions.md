# 02. Sets, Relations, and Functions

## 1. Sets
A **set** is an unordered collection of distinct objects, called **elements** or **members**.

- **Notation:** `{a, b, c}`
- **Cardinality `|A|`:** The number of elements in a set A.
- **Power Set `P(A)`:** The set of all subsets of A. If `|A| = n`, then `|P(A)| = 2ⁿ`.

- **Set Operations:**
  - **Union (A ∪ B):** The set of elements that are in A, or in B, or in both.
  - **Intersection (A ∩ B):** The set of elements that are in both A and B.
  - **Difference (A - B):** The set of elements that are in A but not in B.
  - **Complement (A'):** The set of all elements in the universal set U that are not in A.
  - **Cartesian Product (A × B):** The set of all ordered pairs `(a, b)` where `a ∈ A` and `b ∈ B`.

## 2. Relations
A **binary relation** `R` from a set A to a set B is a subset of the Cartesian product `A × B`. If `(a, b) ∈ R`, we say `a` is related to `b`.

- **Properties of Relations** on a set A (a relation from A to A):
  - **Reflexive:** `(a, a) ∈ R` for every `a ∈ A`.
  - **Symmetric:** If `(a, b) ∈ R`, then `(b, a) ∈ R`.
  - **Antisymmetric:** If `(a, b) ∈ R` and `(b, a) ∈ R`, then `a = b`.
  - **Transitive:** If `(a, b) ∈ R` and `(b, c) ∈ R`, then `(a, c) ∈ R`.

- **Equivalence Relation:** A relation that is **reflexive, symmetric, and transitive**. It partitions the set into disjoint **equivalence classes**.

## 3. Functions
A **function** `f` from a set A to a set B is a special type of relation where every element in A is associated with exactly one element in B. We write `f: A → B`.
- **Domain:** The set A.
- **Codomain:** The set B.
- **Range:** The set of all values in B that `f` actually maps to.

- **Types of Functions:**
  - **One-to-One (Injective):** Every element in the codomain is mapped to by at most one element in the domain. If `f(a) = f(b)`, then `a = b`.
  - **Onto (Surjective):** Every element in the codomain is mapped to by at least one element in the domain. The range is equal to the codomain.
  - **One-to-One and Onto (Bijective):** The function is both injective and surjective. A bijective function has an **inverse function** `f⁻¹`.

---
Prev ← `01_logic.md` | Next → `03_posets_and_lattices.md` | Index: `README.md`
