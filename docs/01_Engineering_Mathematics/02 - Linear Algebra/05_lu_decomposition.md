# 05. LU Decomposition

**LU decomposition** is a method in numerical analysis and linear algebra to factorize a square matrix `A` into the product of a **lower triangular matrix (L)** and an **upper triangular matrix (U)**.

`A = LU`

- **L:** A lower triangular matrix, which has 1s on its main diagonal.
- **U:** An upper triangular matrix, which is the row echelon form of `A`.

## 1. Why is LU Decomposition Useful?
LU decomposition is particularly useful for solving a system of linear equations `Ax = b`.
1.  First, we write `A = LU`, so the system becomes `LUx = b`.
2.  Let `Ux = y`. The system simplifies to `Ly = b`.
3.  We can solve `Ly = b` for `y` using **forward substitution**, since `L` is lower triangular.
4.  Once `y` is known, we can solve `Ux = y` for `x` using **back substitution**, since `U` is upper triangular.

This process is computationally more efficient than finding the inverse of `A`, especially when solving the system for multiple different `b` vectors, as the decomposition `A = LU` only needs to be computed once.

## 2. How to Find L and U
LU decomposition is essentially the process of **Gaussian elimination**. The matrix `U` is the final upper triangular matrix obtained after performing Gaussian elimination on `A`. The matrix `L` is constructed from the multipliers used during the elimination process.

**Example:**
Consider the matrix `A`. We want to reduce it to an upper triangular matrix `U`.
`A = [[2, 1], [4, 5]]`

1.  **Step 1: Eliminate `a₂₁`**
    - We want to make the element at row 2, col 1 zero.
    - The operation is `R₂ → R₂ - 2 * R₁`.
    - The multiplier used is `2`.
    - The resulting matrix is `U = [[2, 1], [0, 3]]`.

2.  **Step 2: Construct L**
    - `L` is a lower triangular matrix with 1s on the diagonal.
    - The entry `l₂₁` (row 2, col 1) is the multiplier we used in Step 1, which is `2`.
    - So, `L = [[1, 0], [2, 1]]`.

3.  **Verification:**
    - `LU = [[1, 0], [2, 1]] * [[2, 1], [0, 3]] = [[2, 1], [4, 5]] = A`.

For larger matrices, the process continues, and the multipliers used to eliminate each element below the diagonal are placed in the corresponding positions in the `L` matrix.

**Note:** LU decomposition without pivoting (swapping rows) may not exist for every square matrix.

---
Prev ← `04_eigenvalues_and_eigenvectors.md` | Index: `README.md`
