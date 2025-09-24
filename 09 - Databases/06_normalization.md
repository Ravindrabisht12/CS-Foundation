# 06. Normalization

Normalization is the process of organizing the columns (attributes) and tables (relations) of a relational database to minimize data redundancy. It involves dividing larger tables into smaller, well-structured tables and defining relationships between them.

The main goals of normalization are:
- To eliminate redundant data.
- To reduce data modification issues (insertion, deletion, and update anomalies).
- To simplify and clarify the data structure.

## 1. Functional Dependency (FD)
A functional dependency is a constraint between two sets of attributes in a relation.
- An FD `X → Y` holds over a relation `R` if, for any two tuples `t₁` and `t₂` in `R` that have the same value for attributes `X` (`t₁[X] = t₂[X]`), they must also have the same value for attributes `Y` (`t₁[Y] = t₂[Y]`).
- We say that `X` **functionally determines** `Y`.
- **Example:** In a `Student` table, `student_id → name` because each student ID corresponds to exactly one name.

## 2. Normal Forms

### a) First Normal Form (1NF)
- **Rule:** A relation is in 1NF if all its attributes have **atomic** (indivisible) values.
- This means no multi-valued attributes or repeating groups.
- **Example:** If a `Student` table has a `phone_numbers` column that stores multiple numbers in a single field, it violates 1NF. To fix this, you would create a separate `Student_Phone` table.

### b) Second Normal Form (2NF)
- **Prerequisite:** The relation must be in 1NF.
- **Rule:** A relation is in 2NF if it has **no partial dependencies**.
- A **partial dependency** occurs when a non-prime attribute (an attribute that is not part of any candidate key) is functionally dependent on only a part of a composite candidate key.
- This rule applies only to relations with composite primary keys.
- **Example:** Consider a table `Enrollment(student_id, course_id, student_name)`. The primary key is `(student_id, course_id)`.
  - `student_name` depends only on `student_id`, which is a part of the primary key. This is a partial dependency.
  - **Solution:** Decompose the table into `Student(student_id, student_name)` and `Enrollment(student_id, course_id)`.

### c) Third Normal Form (3NF)
- **Prerequisite:** The relation must be in 2NF.
- **Rule:** A relation is in 3NF if it has **no transitive dependencies**.
- A **transitive dependency** exists when a non-prime attribute depends on another non-prime attribute, rather than directly on the primary key.
  - If `A → B` and `B → C` are FDs, then `A → C` is a transitive dependency (where A is the primary key).
- **Example:** Consider `Student(student_id, major, major_hod)`.
  - `student_id → major`
  - `major → major_hod` (Head of Department for the major)
  - Here, `major_hod` depends on `student_id` transitively through `major`.
  - **Solution:** Decompose into `Student(student_id, major_id)` and `Major(major_id, major_hod)`.

### d) Boyce-Codd Normal Form (BCNF)
- **Prerequisite:** The relation must be in 3NF.
- **Rule:** A relation is in BCNF if for every non-trivial functional dependency `X → Y`, `X` must be a **superkey**.
- BCNF is a stricter version of 3NF. Most relations in 3NF are also in BCNF.
- A 3NF table that is not in BCNF may have issues if it has multiple overlapping candidate keys.
- **Example:** Consider `Student_Course(student_id, course_id, instructor_name)` where a student can take multiple courses and an instructor teaches only one course.
  - FDs: `(student_id, course_id) → instructor_name` and `instructor_name → course_id`.
  - Candidate Keys: `(student_id, course_id)` and `(student_id, instructor_name)`.
  - The FD `instructor_name → course_id` violates BCNF because `instructor_name` is not a superkey.
  - **Solution:** Decompose into `Student_Instructor(student_id, instructor_name)` and `Instructor_Course(instructor_name, course_id)`.

---
Prev ← `05_sql.md` | Next → `07_file_organization_and_indexing.md` | Index: `README.md`
