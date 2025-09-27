# 04. Common Probability Distributions

A **probability distribution** specifies the probabilities of all possible outcomes of a random variable.

## 1. Discrete Distributions

### a. Uniform Distribution
- **Description:** All outcomes are equally likely.
- **Example:** A single roll of a fair die, where `P(X=k) = 1/6` for `k` in `{1, 2, 3, 4, 5, 6}`.

### b. Bernoulli Distribution
- **Description:** Represents a single trial with two possible outcomes (success/failure).
- **Parameters:** `p` (probability of success).
- **Example:** A single coin flip. `P(X=1) = p` (Heads), `P(X=0) = 1-p` (Tails).

### c. Binomial Distribution
- **Description:** Represents the number of successes in a fixed number (`n`) of independent Bernoulli trials.
- **Parameters:** `n` (number of trials), `p` (probability of success in each trial).
- **PMF:** `P(X=k) = C(n, k) * pᵏ * (1-p)ⁿ⁻ᵏ`
- **Example:** The number of heads in 10 coin flips.

## 2. Continuous Distributions

### a. Uniform Distribution
- **Description:** All values in a given range `[a, b]` are equally likely. The PDF is a horizontal line over the interval.
- **Parameters:** `a` (lower bound), `b` (upper bound).
- **PDF:** `f(x) = 1 / (b - a)` for `x` in `[a, b]`, and 0 otherwise.
- **Example:** A random number generator that produces numbers between 0 and 1.

### b. Normal (Gaussian) Distribution
- **Description:** The classic "bell curve." It is symmetric around its mean. Many natural phenomena follow this distribution.
- **Parameters:** `μ` (mean), `σ²` (variance).
- **Properties:** The mean, median, and mode are all equal. The shape is determined by the standard deviation `σ`.
- **Standard Normal Distribution:** A special case where `μ=0` and `σ=1`.
- **Example:** Heights, blood pressure, measurement errors.

### c. Exponential Distribution
- **Description:** Describes the time between events in a Poisson process (where events occur at a constant average rate).
- **Parameters:** `λ` (rate parameter; the average number of events per unit of time).
- **Properties:** It is memoryless. The probability of an event occurring in the next interval is independent of how much time has already passed.
- **Example:** The time until the next customer arrives at a store. The lifetime of a lightbulb.

---
Prev ← `03_random_variables.md` | Next → `05_mean_median_mode_and_standard_deviation.md` | Index: `README.md`
