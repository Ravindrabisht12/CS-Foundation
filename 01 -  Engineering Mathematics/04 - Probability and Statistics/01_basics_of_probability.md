# 01. Basics of Probability

Probability is the measure of the likelihood that an event will occur.

## 1. Sample Space and Events
- **Experiment:** A procedure that can be infinitely repeated and has a well-defined set of possible outcomes.
- **Sample Space (S):** The set of all possible outcomes of an experiment.
- **Event (E):** Any subset of the sample space. An event is a set of one or more outcomes.

**Example:** Rolling a standard six-sided die.
- **Sample Space:** `S = {1, 2, 3, 4, 5, 6}`
- **Event:** The event of rolling an even number is `E = {2, 4, 6}`.

## 2. Axioms of Probability
The modern theory of probability is based on three axioms, known as Kolmogorov's Axioms:

Let `E` be an event in the sample space `S`. `P(E)` denotes the probability of event `E`.

1.  **Non-Negativity:** The probability of any event is non-negative.
    `P(E) ≥ 0`

2.  **Unity:** The probability of the entire sample space is 1.
    `P(S) = 1`

3.  **Additivity:** For any sequence of mutually exclusive (disjoint) events `E₁, E₂, E₃, ...`, the probability that any of these events occurs is the sum of their individual probabilities.
    `P(E₁ ∪ E₂ ∪ E₃ ∪ ...) = P(E₁) + P(E₂) + P(E₃) + ...`
    (Two events are mutually exclusive if they cannot happen at the same time, i.e., their intersection is empty: `E₁ ∩ E₂ = ∅`).

## 3. Basic Rules of Probability
From the axioms, we can derive several useful rules:

- **Probability of the Empty Set:** `P(∅) = 0`.
- **Range of Probability:** For any event `E`, `0 ≤ P(E) ≤ 1`.
- **Complement Rule:** The probability that an event `E` does not occur is 1 minus the probability that it does occur.
  `P(E') = 1 - P(E)`
- **Addition Rule (for any two events):**
  `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`
  This accounts for the overlap (intersection) between the two events. If the events are mutually exclusive, `P(A ∩ B) = 0`, and this simplifies to Axiom 3.

---
Next → `02_conditional_probability_and_bayes_theorem.md` | Index: `README.md`
