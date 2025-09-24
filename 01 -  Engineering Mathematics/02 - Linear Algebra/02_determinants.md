# 02. Determinants

The **determinant** is a scalar value that can be computed from the elements of a square matrix. It is denoted as `det(A)` or `|A|`.

## 1. Calculation
- **For a 2x2 Matrix:**
  - If `A = [[a, b], [c, d]]`, then `det(A) = ad - bc`.

- **For a 3x3 Matrix (and larger):**
  - The determinant can be calculated using **cofactor expansion**.
  - The cofactor `Cᵢⱼ` of an element `aᵢⱼ` is `(-1)ⁱ⁺ʲ` times the determinant of the submatrix obtained by deleting the `i`-th row and `j`-th column.
  - The determinant is the sum of the products of the elements of any row or column with their corresponding cofactors.
  - `det(A) = Σ aᵢⱼ * Cᵢⱼ` (summing over `j` for a fixed `i`, or over `i` for a fixed `j`).

## 2. Properties of Determinants
1.  `det(Aᵀ) = det(A)`.
2.  If a matrix has a row or column of zeros, its determinant is 0.
3.  If two rows or columns of a matrix are identical, its determinant is 0.
4.  If we swap two rows or columns of a matrix, the determinant is multiplied by -1.
5.  If we multiply a single row or column by a scalar `k`, the determinant is multiplied by `k`.
6.  `det(kA) = kⁿ * det(A)` for an `n × n` matrix `A`.
7.  The determinant of a triangular (upper or lower) or diagonal matrix is the product of its diagonal elements.
8.  `det(AB) = det(A) * det(B)`.
9.  `det(A⁻¹) = 1 / det(A)`.
10. If we add a multiple of one row to another row (or one column to another column), the determinant does not change. This is a key property used in Gaussian elimination.

## 3. Invertibility
- A square matrix `A` is **invertible** (or non-singular) if and only if `det(A) ≠ 0`.
- If `det(A) = 0`, the matrix is **non-invertible** (or singular).

---
Prev ← `01_matrices.md` | Next → `03_system_of_linear_equations.md` | Index: `README.md`
