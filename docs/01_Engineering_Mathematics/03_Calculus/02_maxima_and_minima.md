# 02. Maxima and Minima

Finding the maximum and minimum values of a function (often called **extrema**) is a common application of derivatives.

## 1. Definitions
- **Local (or Relative) Maximum:** A point `(c, f(c))` is a local maximum if `f(c) ≥ f(x)` for all `x` in some open interval around `c`. It's a "peak" in the graph.
- **Local (or Relative) Minimum:** A point `(c, f(c))` is a local minimum if `f(c) ≤ f(x)` for all `x` in some open interval around `c`. It's a "valley" in the graph.
- **Global (or Absolute) Maximum/Minimum:** The highest/lowest value of the function across its entire domain.

## 2. Critical Points
**Critical points** are the candidates for where local extrema can occur. A point `x = c` is a critical point if either:
1.  `f'(c) = 0` (the tangent line is horizontal).
2.  `f'(c)` is undefined (e.g., a sharp corner or a vertical tangent).

## 3. First Derivative Test
The First Derivative Test helps determine whether a critical point is a local maximum, minimum, or neither. Let `c` be a critical point:

1.  **Local Maximum:** If `f'(x)` changes from **positive to negative** at `c` (the function goes from increasing to decreasing), then `f(c)` is a local maximum.
2.  **Local Minimum:** If `f'(x)` changes from **negative to positive** at `c` (the function goes from decreasing to increasing), then `f(c)` is a local minimum.
3.  **Neither:** If `f'(x)` does not change sign at `c`, it is neither a max nor a min (e.g., a point of inflection).

## 4. Second Derivative Test
The Second Derivative Test is often a quicker way to classify a critical point, provided the second derivative is easy to compute. Let `c` be a critical point where `f'(c) = 0`.

- **Concavity:**
  - If `f''(x) > 0`, the function is **concave up** (like a cup).
  - If `f''(x) < 0`, the function is **concave down** (like a frown).

- **The Test:**
  1.  If `f''(c) > 0` (concave up), then `f(c)` is a **local minimum**.
  2.  If `f''(c) < 0` (concave down), then `f(c)` is a **local maximum**.
  3.  If `f''(c) = 0`, the test is **inconclusive**. You must use the First Derivative Test.

## 5. Finding Global Extrema
To find the global maximum and minimum of a continuous function on a closed interval `[a, b]`:
1.  Find all critical points in the interval `(a, b)`.
2.  Evaluate the function `f(x)` at these critical points.
3.  Evaluate the function at the endpoints of the interval, `f(a)` and `f(b)`.
4.  The largest value from steps 2 and 3 is the global maximum, and the smallest value is the global minimum.

---
Prev ← `01_limits_continuity_differentiability.md` | Next → `03_mean_value_theorem.md` | Index: `README.md`
