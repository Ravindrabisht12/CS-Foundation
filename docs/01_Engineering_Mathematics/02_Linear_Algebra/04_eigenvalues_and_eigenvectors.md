# 04. Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors are special properties of a square matrix. They have important applications in many areas of science and engineering, such as stability analysis, vibration analysis, and data analysis (e.g., Principal Component Analysis).

## 1. Definition
For a given `n × n` square matrix `A`, a non-zero vector `v` is an **eigenvector** of `A` if multiplying `A` by `v` is equivalent to scaling `v` by a scalar `λ`.

`Av = λv`

- `v` is the eigenvector.
- `λ` is the **eigenvalue** corresponding to the eigenvector `v`.

Geometrically, an eigenvector of a matrix is a vector whose direction is unchanged when the linear transformation represented by the matrix is applied to it. It is only scaled by the eigenvalue.

## 2. Finding Eigenvalues and Eigenvectors

1.  **Find the Eigenvalues (λ):**
    - The defining equation is `Av = λv`.
    - This can be rewritten as `Av - λIv = 0`, where `I` is the identity matrix.
    - This simplifies to `(A - λI)v = 0`.
    - For this equation to have a non-zero solution for `v`, the matrix `(A - λI)` must be singular, which means its determinant must be zero.
    - `det(A - λI) = 0`
    - This equation is called the **characteristic equation** of the matrix `A`. Solving it gives the eigenvalues `λ`.

2.  **Find the Eigenvectors (v):**
    - For each eigenvalue `λ` found in the previous step, substitute it back into the equation `(A - λI)v = 0`.
    - Solve this system of linear equations to find the non-zero vector(s) `v`. The set of all solutions for a given `λ` forms the **eigenspace** for that eigenvalue.

## 3. Properties of Eigenvalues
For an `n × n` matrix `A`:
1.  The sum of the eigenvalues is equal to the **trace** of the matrix (the sum of the main diagonal elements).
    - `Σ λᵢ = tr(A)`
2.  The product of the eigenvalues is equal to the **determinant** of the matrix.
    - `Π λᵢ = det(A)`
3.  The eigenvalues of a triangular matrix are its diagonal elements.
4.  If `λ` is an eigenvalue of `A`, then `kλ` is an eigenvalue of `kA`.
5.  If `λ` is an eigenvalue of `A`, then `λᵏ` is an eigenvalue of `Aᵏ`.
6.  If `λ` is an eigenvalue of an invertible matrix `A`, then `1/λ` is an eigenvalue of `A⁻¹`.
7.  A matrix is singular if and only if it has an eigenvalue of 0.
8.  The eigenvalues of a real symmetric matrix are always real.

---
Prev ← `03_system_of_linear_equations.md` | Next → `05_lu_decomposition.md` | Index: `README.md`
