# 02. Conditional Probability and Bayes' Theorem

## 1. Conditional Probability
**Conditional probability** is the probability of an event occurring, given that another event has already occurred.

The conditional probability of event `A` occurring given that event `B` has occurred is denoted `P(A|B)` and is calculated as:

`P(A|B) = P(A ∩ B) / P(B)`

- `P(A ∩ B)` is the probability that both events `A` and `B` occur (their intersection).
- `P(B)` is the probability of the given event `B`. We assume `P(B) > 0`.

This formula essentially re-scales the probability of the intersection by making the "given" event `B` the new, smaller sample space.

### Independence
Two events `A` and `B` are **independent** if the occurrence of one does not affect the probability of the other. In this case:
- `P(A|B) = P(A)`
- This leads to the multiplication rule for independent events: `P(A ∩ B) = P(A) * P(B)`.

## 2. Bayes' Theorem
Bayes' Theorem is a fundamental theorem in probability theory that describes how to update the probability of a hypothesis based on new evidence. It relates the conditional probabilities of two events.

The theorem states:

`P(A|B) = [P(B|A) * P(A)] / P(B)`

### Interpretation of Terms
- **`P(A|B)` (Posterior):** The probability of hypothesis `A` being true, given the evidence `B`. This is what we are trying to calculate.
- **`P(B|A)` (Likelihood):** The probability of observing the evidence `B`, given that the hypothesis `A` is true.
- **`P(A)` (Prior):** The initial probability of the hypothesis `A` being true, before considering the evidence.
- **`P(B)` (Marginal Likelihood / Evidence):** The total probability of observing the evidence `B`. This can be calculated using the law of total probability: `P(B) = P(B|A) * P(A) + P(B|A') * P(A')`.

### Why is it Important?
Bayes' Theorem is the mathematical foundation for "learning from experience." It provides a formal way to combine prior knowledge with new evidence. It is used extensively in fields like:
- **Machine Learning:** Naive Bayes classifiers.
- **Medical Diagnosis:** Updating the probability of a disease given test results.
- **Spam Filtering:** Updating the probability that an email is spam given the words it contains.

---
Prev ← `01_basics_of_probability.md` | Next → `03_random_variables.md` | Index: `README.md`
