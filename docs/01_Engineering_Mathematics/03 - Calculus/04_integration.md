# 04. Integration

Integration is one of the two main operations in calculus, the other being differentiation. It can be thought of as the "inverse" of differentiation, or as a way to find the "sum" of infinitely small parts.

## 1. Indefinite Integrals (Antiderivatives)
An **indefinite integral** of a function `f(x)` is another function `F(x)` whose derivative is `f(x)`. It is also called the **antiderivative**.

`∫ f(x) dx = F(x) + C`

- `∫` is the integral symbol.
- `f(x)` is the **integrand**.
- `dx` indicates that the variable of integration is `x`.
- `F(x)` is the antiderivative, where `F'(x) = f(x)`.
- `C` is the **constant of integration**. Since the derivative of a constant is zero, there are infinitely many antiderivatives for any given function, all differing by a constant.

**Example:**
`∫ 2x dx = x² + C` because the derivative of `x² + C` is `2x`.

## 2. Definite Integrals
A **definite integral** represents the signed area under the curve of a function `f(x)` from a starting point `a` to an ending point `b`.

`∫ₐᵇ f(x) dx`

- `a` is the **lower limit** of integration.
- `b` is the **upper limit** of integration.

The result of a definite integral is a single number, not a function.

## 3. The Fundamental Theorem of Calculus
This theorem provides the crucial link between differentiation and integration. It has two parts.

- **Part 1:** If `f` is continuous on `[a, b]`, then the function `g(x) = ∫ₐˣ f(t) dt` is continuous and differentiable on `(a, b)`, and `g'(x) = f(x)`. This shows how to differentiate an integral.

- **Part 2:** If `f` is continuous on `[a, b]` and `F` is an antiderivative of `f` (i.e., `F'(x) = f(x)`), then:
  `∫ₐᵇ f(x) dx = F(b) - F(a)`

This second part gives us a practical way to calculate definite integrals: find the antiderivative, evaluate it at the limits of integration, and subtract.

## 4. Properties of Definite Integrals
1.  `∫ₐᵃ f(x) dx = 0`
2.  `∫ₐᵇ f(x) dx = - ∫ₑᵃ f(x) dx`
3.  `∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ₑᵇ f(x) dx` (for any `c` between `a` and `b`)
4.  `∫ₐᵇ k * f(x) dx = k * ∫ₐᵇ f(x) dx` (where `k` is a constant)
5.  `∫ₐᵇ [f(x) ± g(x)] dx = ∫ₐᵇ f(x) dx ± ∫ₐᵇ g(x) dx`

---
Prev ← `03_mean_value_theorem.md` | Index: `README.md`
