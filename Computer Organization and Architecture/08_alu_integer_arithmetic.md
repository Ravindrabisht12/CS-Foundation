# 08. ALU & Integer Arithmetic

## 1. ALU Functions
Addition, subtraction, logical ops, shifts, set-on-condition, increment/decrement.

## 2. Addition & Subtraction
Subtraction A - B = A + (2's complement of B).
Carry vs Borrow: In 2's complement use overflow rules.

## 3. Overflow Detection (2's Complement)
Add two positives yield negative OR two negatives yield positive.
Formula: Overflow = Carry into MSB XOR Carry out of MSB.

## 4. Fast Adders
| Type | Idea | Delay |
|------|------|-------|
| Ripple | Chain carries | O(n) |
| Carry Lookahead | Parallel generate/propagate | O(log n) practical |
| Carry Select | Precompute for carry 0/1 then select | ~O(√n) |
| Carry Skip | Skip blocks if propagate all 1 | Hybrid |

## 5. Multiplication (Unsigned) - Shift/Add
Iterate bits of multiplier:
If bit=1: add (multiplicand << position)

Booth Algorithm (signed): Encode runs of 1s to reduce adds.
- Pairs bits (current, previous) to decide add/sub/none.

## 6. Division (Restoring Simplified)
1. Align divisor
2. Subtract, if negative restore and shift
3. Record quotient bits.

## 7. Arithmetic Shift vs Logical Shift
Logical shift fills zeros.
Arithmetic right shift replicates sign bit.

## 8. Set-on-Less-Than (SLT)
Perform subtraction; check sign of result adjusted for overflow.

## 9. Status Flags Side Effects
ALU sets Z,N,C,V; some ISAs require explicit compare.

## 10. Example: 8-bit Overflow
0111 1110 (126) + 0000 0111 (7) = 1000 0101 (-123) → Overflow.

## 11. Booth Encoding Table
| (bit_i, bit_{i-1}) | Action |
|--------------------|--------|
| 00 | 0 |
| 01 | +Multiplicand << i |
| 10 | -Multiplicand << i |
| 11 | 0 |

## 12. Multiplication Latency
Sequential iterative: n cycles.
Array multiplier: O(n) area & O(n) time (but combinational).
Wallace tree: reduce partial products in O(log n) stages.

## 13. Exam Tips
- Overflow only for signed.
- Unsigned carry out indicates overflow (unsigned sense).
- Memorize quick adders difference.

---
Prev ← `07_addressing_modes.md` | Next → `09_floating_point.md`
