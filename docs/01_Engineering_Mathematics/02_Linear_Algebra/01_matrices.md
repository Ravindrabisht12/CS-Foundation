# 01. Matrices

A **matrix** is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns.

## 1. Basic Definitions
- **Dimensions:** An `m × n` matrix has `m` rows and `n` columns.
- **Square Matrix:** A matrix where `m = n`.
- **Identity Matrix (I):** A square matrix with 1s on the main diagonal and 0s elsewhere. It is the multiplicative identity.
- **Zero Matrix:** A matrix with all its entries being zero.
- **Transpose (Aᵀ):** The transpose of a matrix `A` is obtained by swapping the rows and columns.

## 2. Matrix Operations
- **Addition and Subtraction:** Performed element-wise. Matrices must have the same dimensions.
- **Scalar Multiplication:** Multiplying a matrix by a scalar (a number) involves multiplying every element of the matrix by that scalar.
- **Matrix Multiplication:**
  - To multiply two matrices, `A` (`m × n`) and `B` (`n × p`), the number of columns in `A` must equal the number of rows in `B`.
  - The resulting matrix `C` will have dimensions `m × p`.
  - The element `C(i, j)` is the dot product of the `i`-th row of `A` and the `j`-th column of `B`.
  - Matrix multiplication is **not commutative** (i.e., `AB ≠ BA` in general).

## 3. Special Types of Matrices
- **Symmetric Matrix:** A square matrix that is equal to its transpose (`A = Aᵀ`).
- **Skew-Symmetric Matrix:** A square matrix such that `A = -Aᵀ`. The main diagonal elements must be zero.
- **Diagonal Matrix:** A square matrix where all off-diagonal elements are zero.
- **Upper Triangular Matrix:** A square matrix where all elements below the main diagonal are zero.
- **Lower Triangular Matrix:** A square matrix where all elements above the main diagonal are zero.
- **Orthogonal Matrix:** A square matrix `Q` such that its transpose is equal to its inverse (`Qᵀ = Q⁻¹`), which means `Q * Qᵀ = I`.

## 4. Rank of a Matrix
- The **rank** of a matrix is the maximum number of linearly independent row (or column) vectors in the matrix.
- It can be found by reducing the matrix to its **row echelon form** and counting the number of non-zero rows.

---
Next → `02_determinants.md` | Index: `README.md`
