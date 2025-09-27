# 09. Floating Point Representation & Arithmetic

## 1. IEEE 754 Formats
| Format | Bits | Sign | Exponent | Fraction (Mantissa) | Bias |
|--------|------|------|----------|---------------------|------|
| Half | 16 | 1 | 5 | 10 | 15 |
| Single | 32 | 1 | 8 | 23 | 127 |
| Double | 64 | 1 | 11 | 52 | 1023 |

Value (normalized): (-1)^S × 1.F × 2^{E - Bias}

## 2. Special Exponents
| Exponent Bits | Fraction | Meaning |
|---------------|----------|---------|
| 0 | 0 | Zero (±0) |
| 0 | ≠0 | Subnormal (denormal) value = (-1)^S × 0.F × 2^{1−Bias} |
| All 1s | 0 | Infinity (±∞) |
| All 1s | ≠0 | NaN |

## 3. Steps in FP Addition
1. Align exponents (shift smaller mantissa)
2. Add/subtract significands
3. Normalize (shift & adjust exponent)
4. Round (nearest even typical)
5. Handle overflow/underflow

## 4. Rounding Modes
- Nearest Even (default)
- Toward 0
- Toward +∞
- Toward −∞

## 5. Example (Single Precision)
Binary 1: 0 10000010 01000000000000000000000
=> Sign=0, Exp=130 (bias 127) → E=3, Fraction=0.0100… Value=1.0100₂ × 2^3 = (1.25)×8=10.

## 6. Precision & Error
Machine Epsilon (single) ≈ 2^{-23} ≈ 1.19e−7.

## 7. Ordering Properties
- NaN not equal to any number (even itself).
- +0 and −0 compare equal but sign matters in some ops (division, reciprocals).

## 8. Subnormal Purpose
Preserve gradual underflow; avoid sudden loss of precision near zero.

## 9. Common Pitfalls
| Pitfall | Clarification |
|---------|--------------|
| Adding huge + tiny changes huge | Tiny lost due to alignment shift |
| Overflow vs NaN confusion | Overflow of finite range → ±∞, not NaN |
| Comparing floats exactly | Use tolerance |

## 10. Conversion Outline (Decimal → IEEE 754)
1. Convert absolute value to binary normalized form.
2. Record sign bit.
3. Exponent = actual exponent + bias.
4. Fraction = bits after binary point truncated/rounded to field.

## 11. Exam Tips
- Memorize single precision layout (1 | 8 | 23).
- Bias formula: Bias = 2^{k-1} − 1.
- Distinguish subnormal exponent field = 0.

---
Prev ← `04_alu_integer_arithmetic.md` | Next → `06_datapath_microoperations.md` | Index: `README.md`
