# 01. Number Systems & Data Representation

## 1. What are Number Systems?

A number system is a way of writing or expressing numbers. While we use the **decimal (base-10)** system in everyday life, digital computers use a **binary (base-2)** system because it's easy to represent with electrical signals (e.g., high voltage = 1, low voltage = 0).

Understanding how to convert between different number systems is a fundamental skill in digital logic and computer architecture.

-   **Positional Notation:** The value of a digit depends on its position. In the number 123, the '1' represents 100, the '2' represents 20, and the '3' represents 3.
-   **Base (Radix):** The number of unique digits used in the system. Base-10 uses (0-9), Base-2 uses (0-1).

The most common bases in computing are:
| Base | Name | Digits | Use Case |
| :--- | :--- | :--- | :--- |
| 2 | **Binary** | 0, 1 | The native language of computers. |
| 8 | **Octal** | 0-7 | A compact way to represent binary (groups of 3 bits). |
| 10 | **Decimal** | 0-9 | Human-readable numbers. |
| 16 | **Hexadecimal** | 0-9, A-F | The most common compact way to represent binary (groups of 4 bits). |

## 2. Key Conversion Techniques

-   **Any Base to Decimal:** Multiply each digit by its positional weight (base^position) and sum the results.
    -   Example: `1011₂ = 1*2³ + 0*2² + 1*2¹ + 1*2⁰ = 8 + 0 + 2 + 1 = 11₁₀`
-   **Decimal to Any Base:**
    -   **Integer Part:** Use repeated **division** by the target base. The remainders, read from bottom to top, form the new number.
    -   **Fractional Part:** Use repeated **multiplication** by the target base. The integer parts of the results, read from top to bottom, form the new fraction.
-   **Binary ↔ Hexadecimal:** This is a direct mapping and is extremely common.
    -   To convert binary to hex, group bits in sets of **four** (starting from the binary point) and replace each group with its hex equivalent.
    -   Example: `1101 0110₂ = D6₁₆`
-   **Binary ↔ Octal:** Similar to hex, but group bits in sets of **three**.

## 3. Representing Negative Numbers (Signed Integers)

Computers need a way to represent both positive and negative numbers. For an n-bit number:

| Scheme | Description | Range (n bits) | Key Feature |
| :--- | :--- | :--- | :--- |
| **Sign-Magnitude** | The first bit is the sign (0=pos, 1=neg), the rest is the value. | `-(2^(n-1)-1)` to `+(2^(n-1)-1)` | Simple idea, but has two zeros (+0, -0) and makes hardware complex. |
| **1's Complement** | To negate, flip all the bits. | Same as Sign-Mag | Also has two zeros. Subtraction is slightly complex. |
| **2's Complement** | To negate, **flip all bits and add 1**. | `-2^(n-1)` to `+(2^(n-1)-1)` | **The standard used today.** Has a single zero and makes addition/subtraction hardware very simple. |

## 4. Binary Arithmetic

-   **Addition:** Performed just like decimal addition, but with carries happening on sums of 2 instead of 10.
-   **Subtraction:** In 2's complement, subtraction `A - B` is performed as `A + (2's complement of B)`. This allows the same adder circuit to be used for both operations.
-   **Overflow:** Occurs when the result of a calculation is too large to be represented in the available number of bits.
    -   **Unsigned Overflow:** Detected by a carry-out from the most significant bit.
    -   **Signed (2's Comp) Overflow:** Detected when adding two numbers of the same sign gives a result of the opposite sign.

## 5. Other Important Codes

| Code | Description |
| :--- | :--- |
| **BCD (Binary Coded Decimal)** | Each decimal digit is represented by its own 4-bit binary code. Used in some financial systems where decimal precision is critical. |
| **Gray Code** | An ordering of binary numbers where consecutive values differ by only one bit. Useful for preventing errors in mechanical sensors. |
| **ASCII** | A standard for encoding characters (letters, numbers, symbols) as binary numbers. |

## 6. Quick Reference
| Quantity | Formula |
|----------|---------|
| Number of unique values with n bits | 2^n |
| Number of bits needed for N values | ⌈log₂ N⌉ |
| Max value (unsigned n bits) | 2^n − 1 |
| Range (signed n-bit 2's comp) | −2^(n−1) to 2^(n−1)−1 |

---
Next → `02_boolean_algebra.md` | Back to Index: `README.md`
