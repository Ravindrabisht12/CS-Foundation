# 01. Limits, Continuity, and Differentiability

These three concepts are the bedrock of calculus. They are sequential, meaning continuity depends on the existence of a limit, and differentiability depends on continuity.

## 1. Limits
A **limit** of a function `f(x)` as `x` approaches a certain value `c` is the value that `f(x)` gets closer and closer to. It's about the journey, not the destination. The function doesn't actually have to equal the limit at that point.

`lim f(x) = L`
`x→c`

- **Left-Hand Limit (LHL):** The value the function approaches as `x` comes from the left side (`x < c`). Denoted `x → c⁻`.
- **Right-Hand Limit (RHL):** The value the function approaches as `x` comes from the right side (`x > c`). Denoted `x → c⁺`.

For a limit to exist at `x = c`, the LHL must equal the RHL.
`LHL = RHL = L`

## 2. Continuity
A function is **continuous** at a point `x = c` if there are no interruptions, holes, or jumps in the graph at that point. Formally, three conditions must be met:
1.  `f(c)` is defined (the point exists).
2.  `lim f(x)` as `x→c` exists (the LHL equals the RHL).
3.  `lim f(x)` as `x→c` is equal to `f(c)` (the limit equals the function's value).

In simple terms: "The limit is what you expect the function's value to be, and continuity means your expectation is correct."

## 3. Differentiability
A function is **differentiable** at a point `x = c` if it has a well-defined derivative at that point. Geometrically, this means the graph is "smooth" and does not have any sharp corners or cusps.

- The **derivative** of a function `f(x)` at a point `x=c`, denoted `f'(c)`, represents the **instantaneous rate of change** or the **slope of the tangent line** to the graph at that point.

- It is defined by the limit:
  `f'(c) = lim (f(c+h) - f(c)) / h`
  `h→0`

- For a function to be differentiable at a point, this limit must exist.

## Relationship
The relationship between these concepts is hierarchical:

**Differentiability ⇒ Continuity ⇒ Existence of a Limit**

- If a function is differentiable at a point, it must be continuous at that point.
- If a function is continuous at a point, its limit must exist at that point.

The reverse is not always true:
- A function can be continuous but not differentiable (e.g., `f(x) = |x|` at `x=0`, which has a sharp corner).
- A function can have a limit at a point but not be continuous (e.g., a function with a "hole").

---
Next → `02_maxima_and_minima.md` | Index: `README.md`
