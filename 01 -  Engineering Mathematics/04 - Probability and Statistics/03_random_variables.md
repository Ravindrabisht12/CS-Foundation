# 03. Random Variables

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It's a function that maps the outcomes in the sample space to real numbers.

Random variables are typically denoted by capital letters (e.g., `X`, `Y`), while their specific values are denoted by lowercase letters (e.g., `x`, `y`).

## 1. Discrete Random Variables
A random variable is **discrete** if it can take on a finite or countably infinite number of distinct values.

**Examples:**
- The outcome of a single die roll: `X` can be `{1, 2, 3, 4, 5, 6}`.
- The number of heads in three coin flips: `X` can be `{0, 1, 2, 3}`.
- The number of emails you receive in an hour.

### Probability Mass Function (PMF)
The **PMF** of a discrete random variable `X` gives the probability that `X` is exactly equal to some value `x`.
`p(x) = P(X = x)`

Properties of a PMF:
1.  `p(x) ≥ 0` for all `x`.
2.  The sum of the probabilities over all possible values of `x` is 1: `Σ p(x) = 1`.

## 2. Continuous Random Variables
A random variable is **continuous** if it can take on any value within a given range or interval.

**Examples:**
- The height of a person.
- The temperature of a room.
- The time it takes to run a race.

### Probability Density Function (PDF)
For a continuous random variable, the probability of it taking on any single specific value is zero (`P(X = x) = 0`). Instead, we talk about the probability of the variable falling within an interval.

The **PDF**, denoted `f(x)`, describes the relative likelihood for a random variable to take on a given value. The area under the curve of the PDF over an interval gives the probability of the variable falling in that interval.

`P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx`

Properties of a PDF:
1.  `f(x) ≥ 0` for all `x`.
2.  The total area under the curve is 1: `∫ f(x) dx = 1` (over the entire range of `x`).

## 3. Expectation (Mean)
The **expected value** or **mean** of a random variable `X`, denoted `E[X]` or `μ`, is the long-run average value of repetitions of the experiment it represents.

- **For a discrete random variable:**
  `E[X] = Σ x * P(X = x)` (the weighted average of the possible values)

- **For a continuous random variable:**
  `E[X] = ∫ x * f(x) dx`

---
Prev ← `02_conditional_probability_and_bayes_theorem.md` | Next → `04_common_distributions.md` | Index: `README.md`
