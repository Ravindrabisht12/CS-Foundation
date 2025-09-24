# 06. Fixed-Point Arithmetic

## 1. What is Fixed-Point Representation?

Fixed-point is a method for representing fractional numbers using a fixed number of bits for the integer part and a fixed number of bits for the fractional part. For the scope of most introductory digital logic courses, **"fixed-point" is often used synonymously with "integer" arithmetic**, where the binary point is implicitly fixed at the far right (i.e., there are zero fractional bits).

This section focuses on how standard arithmetic operations (addition, subtraction, multiplication, division) are performed on signed and unsigned integers in a digital system.

**Key Number Systems:**
| Type | Range (n bits) | Notes |
|------|----------------|-------|
| Unsigned | 0 to 2^n − 1 | Represents only non-negative values. Used for memory addresses, counters. |
| Sign-Magnitude | −(2^(n−1) − 1) to +(2^(n−1) − 1) | Simple concept (sign bit + value), but has two zeros (+0, -0) and complex hardware. |
| 1's Complement | Same as Sign-Magnitude | Also has two zeros. Negation is simple (invert all bits). Requires "end-around carry" for addition. |
| **2's Complement** | **−2^(n−1) to +(2^(n−1) − 1)** | **The standard for modern computers.** Has a single zero, simplifies hardware for addition and subtraction. |

## 2. The Power of 2's Complement
2's complement is the dominant system because it makes subtraction as easy as addition.

**Negation:** To find the negative of a number, **invert all the bits and add 1**.
- Example (8 bits): To get -5 from 5 (`0000 0101`):
  1. Invert bits: `1111 1010`
  2. Add 1: `1111 1011` (which is -5)

**Key Property:** A + (-B) is the same as A - B. This means an adder circuit can perform subtraction with only minor extra logic (an inverter and a way to force a carry-in of 1).

## 3. Addition & Subtraction
**Addition:** Performed as a standard binary addition.
**Subtraction:** To compute `A - B`, the hardware computes `A + (2's complement of B)`.

**Overflow Detection (for signed 2's complement):**
Overflow occurs when the result of an operation is too large to fit in the available bits. It can be detected with a simple rule:
> If you add two numbers of the **same sign** and the result has the **opposite sign**, an overflow has occurred.
- `(+A) + (+B) = (-C)` -> Overflow
- `(-A) + (-B) = (+C)` -> Overflow
- Adding numbers of opposite signs can **never** cause an overflow.

## 4. Multiplication
The fundamental method is **shift-and-add**. For each '1' in the multiplier, the multiplicand is added to a running total (partial product), and the partial product is shifted.

**Booth's Algorithm:** A more efficient method that can handle signed numbers directly. It works by scanning the multiplier bits and recoding them. It's particularly effective at skipping over long strings of 1s.
- Recoding based on bit pairs (current & previous):
  - `00` or `11`: Do nothing (skip).
  - `01`: Add the multiplicand.
  - `10`: Subtract the multiplicand.

## 5. Division
Division is the most complex operation. The basic method is **restoring division**, which is analogous to long division by hand.
1.  Subtract the divisor from the dividend.
2.  If the result is positive, the quotient bit is 1.
3.  If the result is negative, the quotient bit is 0, and you must **restore** the dividend by adding the divisor back.
4.  Shift and repeat.

Non-restoring division is a faster alternative that avoids the restoration step.

## 6. Shift Operations
Shifts are fundamental for multiplication, division, and bit manipulation.
| Type | Effect | Use Case |
|------|--------|----------|
| **Logical Shift** | Fills with 0s. | Unsigned multiplication/division by 2. |
| **Arithmetic Shift** | On right shift, preserves the sign bit. | Signed division by 2. |

## 7. ALU Building Blocks
An Arithmetic Logic Unit (ALU) is the core of a CPU that performs these operations.
- **Adder/Subtractor:** A key component, often built from a chain of full adders. A single control signal (e.g., `Sub`) can make it do both: `A + (B XOR Sub) + Sub`.
- **Logic Unit:** Performs bitwise `AND`, `OR`, `XOR`, `NOT`.
- **Shifter:** Performs logical and arithmetic shifts.

## 8. Overflow vs. Carry-Out
These are two different flags with different meanings.
| Flag | Meaning |
|---------|-----------|
| **Carry-Out** | Indicates that an **unsigned** addition resulted in a value greater than 2^n - 1. It's the bit that "falls off" the end. |
| **Overflow** | Indicates that a **signed** operation produced a result that is outside the valid 2's complement range. |

## 9. Example
8-bit signed addition: `0111 1110` (126) + `0000 0111` (7)
-   `126 + 7 = 133`.
-   The 8-bit signed range is -128 to +127.
-   The binary result is `1000 0101`, which is -123 in 2's complement.
-   This is an **overflow** because we added two positive numbers and got a negative result.

## 10. Pitfalls & Tips
| Pitfall | Advice |
|---------|--------|
| Confusing carry-out with signed overflow. | They are different. Use the sign rule for signed overflow. |
| Forgetting to sign-extend during arithmetic right shifts. | The MSB must be replicated to preserve the number's sign. |
| Errors in Booth's algorithm. | Always remember to consider the bit to the right of the current bit pair (the "previous" bit). |

---
Prev ← `05_sequential_circuits.md` | Next → `07_floating_point_basics.md` | Index: `README.md`
