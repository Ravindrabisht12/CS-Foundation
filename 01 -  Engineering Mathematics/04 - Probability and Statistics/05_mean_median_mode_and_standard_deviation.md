# 05. Mean, Median, Mode, and Standard Deviation

These are fundamental descriptive statistics used to summarize a set of data or a probability distribution.

## 1. Measures of Central Tendency
These measures describe the "center" or "typical" value of a dataset.

### a. Mean (Average)
- **Description:** The sum of all values divided by the number of values.
- **For a dataset:** `μ = (Σ xᵢ) / n`
- **For a random variable:** This is the **Expected Value**, `E[X]`.
- **Sensitivity:** Highly sensitive to outliers (extreme values).

### b. Median
- **Description:** The middle value in a sorted dataset.
- **Calculation:**
  - If the number of values `n` is odd, the median is the middle value.
  - If `n` is even, the median is the average of the two middle values.
- **Sensitivity:** Robust to outliers. It is not affected by extreme values.

### c. Mode
- **Description:** The value that appears most frequently in a dataset.
- **Properties:** A dataset can have one mode (unimodal), two modes (bimodal), or more (multimodal). It can also have no mode if all values occur with the same frequency.
- **Usefulness:** The only measure of central tendency that can be used for categorical (non-numeric) data.

## 2. Measures of Dispersion (Variability)
These measures describe how "spread out" the data is.

### a. Variance (σ²)
- **Description:** The average of the squared differences from the Mean. It measures how far a set of numbers is spread out from their average value.
- **For a dataset:** `σ² = Σ (xᵢ - μ)² / n`
- **For a random variable:** `Var(X) = E[(X - E[X])²]`
- **Units:** The units are the square of the original data's units (e.g., meters squared if the data is in meters), which can be hard to interpret.

### b. Standard Deviation (σ)
- **Description:** The square root of the variance. It is the most common measure of spread.
- **Calculation:** `σ = √Variance`
- **Interpretation:**
  - A low standard deviation indicates that the data points tend to be very close to the mean.
  - A high standard deviation indicates that the data points are spread out over a wider range of values.
- **Units:** The units are the same as the original data, making it more intuitive to interpret than variance. For a normal distribution, approximately 68% of the data lies within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3.

---
Prev ← `04_common_distributions.md` | Index: `README.md`
