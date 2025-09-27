# 03. System of Linear Equations

A system of linear equations is a collection of one or more linear equations involving the same set of variables. It can be represented in matrix form as `Ax = b`.

- `A` is the coefficient matrix.
- `x` is the column vector of variables.
- `b` is the column vector of constants.

## 1. Types of Solutions
A system of linear equations can have:
1.  **No Solution:** The system is **inconsistent**.
2.  **Exactly One Solution:** The system is **consistent** and **independent**.
3.  **Infinitely Many Solutions:** The system is **consistent** and **dependent**.

## 2. Solving Linear Systems
The nature of the solution can be determined by comparing the rank of the coefficient matrix `A` and the augmented matrix `[A|b]`.

- **Augmented Matrix:** The coefficient matrix with the vector `b` appended as an extra column.

- **Using Ranks:**
  - If `rank(A) < rank([A|b])`, the system is inconsistent and has **no solution**.
  - If `rank(A) = rank([A|b]) = n` (where `n` is the number of variables), the system has a **unique solution**.
  - If `rank(A) = rank([A|b]) < n`, the system has **infinitely many solutions**.

- **Gaussian Elimination:** A method to solve systems of linear equations by transforming the augmented matrix into **row echelon form** using elementary row operations. Then, **back substitution** is used to find the solution.

## 3. Homogeneous Systems
A system is **homogeneous** if `b` is the zero vector (`Ax = 0`).
- A homogeneous system always has at least one solution, the **trivial solution** (`x = 0`).
- It has a **non-trivial solution** if and only if `det(A) = 0` (which is equivalent to `rank(A) < n`).

---
Prev ← `02_determinants.md` | Next → `04_eigenvalues_and_eigenvectors.md` | Index: `README.md`
