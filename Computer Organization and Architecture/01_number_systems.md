# 01. Number Systems & Data Representation

## 1. Positional Number Systems
| Base | Digits | Example | Conversion Tip |
|------|--------|---------|----------------|
| 2 | 0–1 | 101101₂ | Group to 4 for hex |
| 8 | 0–7 | 675₈ | 3 bits per oct digit |
| 10 | 0–9 | 173 | Standard |
| 16 | 0–9 A–F | 2AF₁₆ | 4 bits per hex digit |

Value of \(d_{n-1}...d_1 d_0\) in base \(r\):  \(\sum_{i=0}^{n-1} d_i r^i\)

## 2. Fast Base Conversions
- Binary ↔ Hex: 4-bit groups
- Binary ↔ Octal: 3-bit groups
- Decimal → Binary (integer): repeated /2 record remainders
- Decimal fraction → Binary: ×2 take integer parts

Example: 13.625₁₀ → Binary
- 13 → 1101
- 0.625 ×2 =1.25 (1) → .25 ×2=0.5 (0) → .5×2=1.0 (1) ⇒ 0.101
→ 1101.101₂

## 3. Signed Integer Representations
| Method | Range (n bits) | +5 (8-bit) | -5 (8-bit) | Notes |
|--------|----------------|-----------|-----------|-------|
| Sign-Magnitude | −(2^{n-1}−1) .. +(2^{n-1}−1) | 00000101 | 10000101 | Two zeros |
| 1's Complement | Same as sign-mag | 00000101 | 11111010 | Two zeros |
| 2's Complement | −2^{n-1} .. +(2^{n-1}−1) | 00000101 | 11111011 | Unique zero |

2's complement of X: invert bits + 1.

Overflow detection (2's complement addition): If carry into MSB ≠ carry out of MSB OR adding two same-sign numbers yields opposite sign result.

## 4. Binary Arithmetic Quick Rules
- Addition: ripple, detect overflow
- Subtraction A−B: A + (2's comp of B)
- Range (n bits, unsigned): 0 .. 2^n −1
- Range (n bits, 2's comp): −2^{n-1} .. 2^{n-1}−1

## 5. BCD (Binary Coded Decimal)
8421 BCD digit weights: 8 4 2 1
- Valid digits: 0000–1001
- After adding digits: if sum > 1001 add 0110 (decimal adjust)

Example: 27 + 35 (BCD)
0010 0111
0011 0101
=0101 1100 (12 in low nibble) → add 0110 ⇒ 0110 0010 = 62

## 6. Gray Code
Consecutive values differ by 1 bit (minimizes error in encoders)
Binary → Gray: g_n = b_n, g_i = b_{i+1} XOR b_i
Gray → Binary: b_n = g_n, b_i = b_{i+1} XOR g_i

## 7. Character Codes
- ASCII: 7-bit (128), extended 8-bit
- Unicode / UTF-8: variable length 1–4 bytes

## 8. Data Sizes
| Term | Bytes |
|------|-------|
| Nibble | 0.5 | 
| Byte | 1 |
| Word | Arch dependent (2,4,8) |
| Kilobyte (binary) | 1024 |
| Kibibyte (IEC) | 1024 | 

## 9. Common Pitfalls
| Pitfall | Clarification |
|---------|--------------|
| Sign bit always 1 means negative | Only true in sign-mag / 1's / 2's comp with non-zero magnitude |
| Overflow when carry out = 1 | Not for unsigned necessarily; for 2's comp use sign analysis |
| Hex fraction groups misaligned | Pad on right for fractional part |

## 10. Sample Problems
1. Represent −37 in 8-bit 2's complement.
   37 = 0010 0101 → invert = 1101 1010 → +1 = 1101 1011.
2. Detect overflow: 0100 0001 + 0100 0001 = 1000 0010 → Adding two positives, result negative ⇒ overflow.
3. Convert 0.3₁₀ to binary (approx): repeating 0.01001… (non-terminating).

## 11. Quick Reference Table
| Quantity | Formula |
|----------|---------|
| Bits needed for N distinct symbols | ⌈log₂ N⌉ |
| Max unsigned with n bits | 2^n − 1 |
| Min 2's comp with n bits | −2^{n−1} |
| Max 2's comp with n bits | 2^{n−1} − 1 |

## 12. Exam Tips
- Practice overflow detection mentally.
- Be comfortable converting fractional values quickly (0.125=0.001₂, 0.75=0.11₂).
- Memorize powers: 2¹⁰ ≈ 10³.

---
Next → `02_boolean_algebra.md`
