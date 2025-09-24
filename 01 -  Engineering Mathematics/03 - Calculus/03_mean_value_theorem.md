# 03. Mean Value Theorem

The **Mean Value Theorem (MVT)** is a fundamental theorem in calculus that establishes a relationship between the average rate of change of a function over an interval and its instantaneous rate of change at a specific point within that interval.

## 1. Conditions
For the Mean Value Theorem to apply, a function `f(x)` must satisfy two conditions on a closed interval `[a, b]`:
1.  The function `f(x)` must be **continuous** on the closed interval `[a, b]`.
2.  The function `f(x)` must be **differentiable** on the open interval `(a, b)`.

## 2. The Theorem
If the conditions are met, then there exists at least one point `c` in the open interval `(a, b)` such that:

`f'(c) = (f(b) - f(a)) / (b - a)`

### Interpretation
- **`f'(c)`**: This is the **instantaneous rate of change** (the slope of the tangent line) at the point `c`.
- **`(f(b) - f(a)) / (b - a)`**: This is the **average rate of change** (the slope of the secant line connecting the endpoints `(a, f(a))` and `(b, f(b))`).

The theorem guarantees that for any "well-behaved" function, there is at least one point where the slope of the tangent line is parallel to the secant line connecting the endpoints of the interval.

## 3. Rolle's Theorem
Rolle's Theorem is a special case of the Mean Value Theorem. It has one additional condition:
3.  `f(a) = f(b)` (the function has the same value at the endpoints).

If all three conditions are met, then there exists at least one point `c` in `(a, b)` such that:

`f'(c) = 0`

This makes intuitive sense: if a continuous, differentiable function starts and ends at the same height, it must have had a horizontal tangent (a point where its rate of change was zero) somewhere in between.

## 4. Significance
The Mean Value Theorem is crucial for proving many other results in calculus, including:
- If `f'(x) = 0` for all `x` in an interval, then `f(x)` is a constant function on that interval.
- If `f'(x) = g'(x)` for all `x` in an interval, then `f(x)` and `g(x)` differ by a constant. This is fundamental to the concept of indefinite integration.

---
Prev ← `02_maxima_and_minima.md` | Next → `04_integration.md` | Index: `README.md`
