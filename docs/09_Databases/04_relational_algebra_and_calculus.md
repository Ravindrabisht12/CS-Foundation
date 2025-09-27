# 04. Relational Algebra and Calculus

Relational Algebra and Relational Calculus are formal query languages for the relational model. They form the theoretical basis for SQL.

## 1. Relational Algebra
Relational Algebra is a **procedural** query language. It consists of a set of operations that take one or two relations as input and produce a new relation as their result.

### Fundamental Operations
- **Select (σ):** Selects tuples that satisfy a given predicate. It is a unary operation.
  - `σ_{predicate}(Relation)`
  - Example: `σ_{major='CS'}(Student)` - Selects all student tuples where the major is 'CS'.

- **Project (Π):** Selects certain columns from a table and discards the others. It is a unary operation and automatically removes duplicate rows.
  - `Π_{attribute_list}(Relation)`
  - Example: `Π_{name, major}(Student)` - Projects the name and major columns from the Student relation.

- **Union (∪):** Returns a relation containing all tuples that appear in either or both of the two specified relations. The two relations must be **union-compatible** (same number of attributes, and the domains of corresponding attributes are the same).

- **Set Difference (-):** Returns a relation containing all tuples that appear in the first relation but not in the second. The relations must be union-compatible.

- **Cartesian Product (×):** Combines tuples from two relations. It returns a relation whose attributes are all attributes of both relations, and whose tuples are all possible pairings of tuples from the two relations.

- **Rename (ρ):** Renames a relation or its attributes.
  - `ρ_{new_name}(Relation)`

### Additional Operations (derived from fundamental operations)
- **Set Intersection (∩):** Returns a relation containing all tuples that appear in both relations. Can be expressed as `R ∩ S = R - (R - S)`.

- **Join Operations:** Combine related tuples from different relations.
  - **Natural Join (⨝):** A join operation that combines tuples based on the common attributes between two relations. It automatically matches on attributes with the same name and removes the duplicate matching column.
    - `R ⨝ S`
  - **Theta Join (⨝_θ):** A join that combines tuples from two relations based on a specified condition `θ`.
    - `R ⨝_θ S = σ_θ(R × S)`
  - **Equijoin:** A theta join where the condition `θ` only contains equality comparisons.
  - **Outer Joins:** Extend the result of an inner join by including tuples from one or both relations that do not have a matching tuple in the other relation, padding the missing attributes with `NULL`.
    - **Left Outer Join (⟕):** Keeps all tuples from the left relation.
    - **Right Outer Join (⟖):** Keeps all tuples from the right relation.
    - **Full Outer Join (⟗):** Keeps all tuples from both relations.

- **Division (÷):** Used for queries that involve the phrase "for all". For relations `R(A, B)` and `S(B)`, `R ÷ S` returns all tuples `(a)` in `R` such that for every tuple `(b)` in `S`, there is a tuple `(a, b)` in `R`.

## 2. Relational Calculus
Relational Calculus is a **non-procedural** (or declarative) query language. The user specifies *what* data is required without specifying *how* to get it.

### a) Tuple Relational Calculus (TRC)
- Queries are expressed as: `{ t | P(t) }`
- This is the set of all tuples `t` such that predicate `P` is true for `t`.
- `t` is a tuple variable.
- **Example:** Find all students with a major in 'CS'.
  - `{ t | t ∈ Student ∧ t.major = 'CS' }`

### b) Domain Relational Calculus (DRC)
- Queries are expressed as: `{ <x₁, x₂, ..., xₙ> | P(x₁, x₂, ..., xₙ) }`
- This is the set of all tuples `<x₁, ..., xₙ>` such that predicate `P` is true.
- `xᵢ` are domain variables that take on values from an attribute's domain.
- **Example:** Find the names of all students with a major in 'CS'.
  - `{ <name> | ∃id, major (<id, name, major> ∈ Student ∧ major = 'CS') }`

Both forms of relational calculus are equivalent in expressive power to relational algebra.

---
Prev ← `03_relational_model.md` | Next → `05_sql.md` | Index: `README.md`
