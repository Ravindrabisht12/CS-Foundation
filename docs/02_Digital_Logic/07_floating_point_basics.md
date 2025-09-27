# 07. Floating-Point Representation (IEEE 754)

## 1. Why Floating-Point?

Fixed-point (integer) arithmetic is fast and simple, but it has a limited range. To represent very large numbers (like the distance to a star) or very small numbers (like the size of an atom) without requiring an enormous number of bits, we use **floating-point representation**.

It is the computer equivalent of **scientific notation**.

-   **Scientific Notation:** `6.022 x 10^23`
-   **Floating-Point:** `(-1)^S × Significand × 2^Exponent`

The **IEEE 754 standard** is the universal format for floating-point numbers used by virtually all modern processors. It defines precise layouts for storing these numbers and rules for arithmetic.

## 2. IEEE 754 Standard Layouts

A floating-point number is broken into three parts:
1.  **Sign (S):** 1 bit (0 for positive, 1 for negative).
2.  **Exponent (E):** A biased integer that stores the power of 2.
3.  **Fraction (F) / Mantissa:** The fractional part of the significand.

| Format | Sign Bits | Exponent Bits | Fraction Bits | Total Bits | Exponent Bias |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Single Precision** | 1 | 8 | 23 | 32 | **127** |
| **Double Precision** | 1 | 11 | 52 | 64 | **1023** |

**Value of a Normalized Number:**
The value is calculated as: **V = (-1)^S × (1.F) × 2^(E - Bias)**

-   **"1.F"**: This is the **normalized significand**. The '1.' is an *implicit* or *hidden* bit that is not actually stored, saving a bit of space and providing extra precision.
-   **"E - Bias"**: The stored exponent is "biased" to allow for both positive and negative exponents without needing a separate sign bit for the exponent itself.

## 3. Special Cases: Beyond Normal Numbers

The IEEE 754 standard reserves certain exponent values to represent special numbers.

| Stored Exponent (E) | Fraction (F) | Meaning | Value |
| :--- | :--- | :--- | :--- |
| All 0s | 0 | **Zero** | ±0 |
| All 0s | Non-zero | **Subnormal (Denormalized)** | (-1)^S × **0.F** × 2^(**1** - Bias) |
| All 1s | 0 | **Infinity** | ±∞ |
| All 1s | Non-zero | **Not a Number (NaN)** | NaN |

-   **Subnormal Numbers:** These fill the gap between zero and the smallest normal number, allowing for "gradual underflow." Note the implicit bit is **0** and the exponent is fixed.
-   **Infinity:** Represents results of operations like `1 / 0` or overflow.
-   **NaN:** Represents results of invalid operations like `0 / 0` or `sqrt(-1)`.

## 4. Floating-Point Addition (Conceptual Steps)

1.  **Compare & Align Exponents:** The number with the smaller exponent must be denormalized by shifting its significand to the right until its exponent matches the larger one.
2.  **Add Significands:** Add the two significands together.
3.  **Normalize the Result:** The result may need to be shifted left or right to restore the "1.F" format. The exponent is adjusted accordingly.
4.  **Round the Result:** The result may have more bits than can be stored. It must be rounded to fit. The default is "round to nearest, ties to even."
5.  **Check for Overflow/Underflow:** If the final exponent is too large, it's an overflow (to infinity). If it's too small, it's an underflow (to zero or a subnormal).

## 5. Rounding Modes
-   **Round to Nearest, ties to even (Default):** The most common and statistically unbiased mode.
-   **Round toward 0 (Truncate):** Simply chops off extra bits.
-   **Round toward +∞ (Ceiling):** Always rounds up.
-   **Round toward -∞ (Floor):** Always rounds down.

## 6. Example: Decoding a Single-Precision Number
Let's decode the 32-bit hex value `0x41200000`.

1.  **Binary:** `0 10000010 01000000000000000000000`
2.  **Split:**
    -   Sign (S) = `0` (Positive)
    -   Exponent (E) = `10000010` = 130
    -   Fraction (F) = `01000...`
3.  **Calculate:**
    -   Value = `(-1)^0 × (1.0100...)_2 × 2^(130 - 127)`
    -   Value = `1 × (1 + 0*2^-1 + 1*2^-2)_2 × 2^3`
    -   Value = `1.25_10 × 8`
    -   Value = `10.0`

## 7. Precision and Machine Epsilon
Floating-point numbers are not perfectly precise. **Machine epsilon** is the gap between 1.0 and the next representable number. For single precision, it's `2^-23`. This defines the limit of relative precision.

## 8. Pitfalls
| Pitfall | Clarification |
|---------|--------------|
| Expecting exact decimal representation. | Many common decimal fractions (like 0.1) are repeating fractions in binary and cannot be stored exactly. |
| `(a + b) + c` is not always equal to `a + (b + c)`. | Rounding errors can accumulate differently depending on the order of operations. |
| Confusing NaN and Infinity. | Overflow results in Infinity. Mathematically invalid operations (like `0/0`) result in NaN. |

## 9. Conversion Outline (Decimal → IEEE 754)
1.  Convert the absolute decimal value to binary.
2.  Normalize it into the `1.F × 2^E` format.
3.  Calculate the biased exponent: `Stored E = True E + Bias`.
4.  Fill in the fraction bits (rounding if necessary).
5.  Set the sign bit.

## 10. Quick Tips
-   Memorize the biases: **127** for single, **1023** for double.
-   Remember the special exponent values (all 0s and all 1s).
-   Subnormal numbers have an implicit leading **0**, not 1.

---
Prev ← `06_fixed_point_arithmetic.md` | Back to Index: `README.md`
