# 02. Boolean Algebra & Logic Gates

## 1. Core Postulates
Variables take values 0 or 1. Operators: AND (·), OR (+), NOT (¯ or '), XOR (⊕).

## 2. Fundamental Laws
| Law | Form |
|-----|------|
| Identity | A+0=A , A·1=A |
| Null | A+1=1 , A·0=0 |
| Idempotent | A+A=A , A·A=A |
| Involution | (A')'=A |
| Complement | A+A'=1 , A·A'=0 |
| Commutative | A+B=B+A , A·B=B·A |
| Associative | (A+B)+C=A+(B+C) |
| Distributive | A(B+C)=AB+AC , A+BC=(A+B)(A+C) |
| Absorption | A+AB=A , A(A+B)=A |
| DeMorgan | (AB)'=A'+B' , (A+B)'=A'B' |

## 3. XOR & XNOR
A⊕B = A'B + AB'. Useful: parity, adders. A⊕B⊕C = odd parity.

## 4. Canonical Forms
- Minterm: AND of all variables (or complements) representing 1-output rows.
- Maxterm: OR of all variables representing 0-output rows.

f(A,B,C)=Σm(1,4,6,7) = ΠM(0,2,3,5).

## 5. K-Map Simplification (up to 5 variables typical)
Grouping rules:
- Power-of-2 sized groups (1,2,4,8,...)
- Wrap-around allowed
- Larger group ⇒ more simplification

Example 4-variable grouping ASCII (1s):

AB\CD | 00 01 11 10
------|-------------
00    | 0  1  1  0
01    | 0  1  1  0
11    | 0  0  0  0
10    | 0  1  1  0

Groups: 8-cell vertical ⇒ expression reduces.

## 6. Don't Cares (d)
Treat as 0 or 1 to maximize grouping. Use only if it enlarges groups.

## 7. Gate Delays & Hazards
- Propagation delay: input change → output stable.
- Static hazard: output should remain constant but glitches.
- Avoid hazards by including consensus term.
Example: F = AB' + A'B has hazard at transition; XOR implementation more robust using gates having balanced delays.

## 8. Common Optimizations
| Pattern | Simplifies To | Reason |
|---------|---------------|--------|
| A + A'B | A + B | (A + A')(A + B) |
| A(A'+B) | AB | A·A' =0 |
| (A+B)(A+C) | A + BC | Distributive reverse |

## 9. Multi-Level vs Two-Level
- Two-level (SOP/POS) minimal literal count good for PLA.
- Multi-level may reduce total gates fan-in complexity.

## 10. Universal Gates
- NAND and NOR functionally complete.
- NOT via NAND(A,A).

## 11. Arithmetic Building Blocks
Half Adder: S = A⊕B, C = AB.
Full Adder: S = A⊕B⊕Cin, Cout = AB + Cin(A⊕B).
Ripple vs Carry Lookahead (speed vs complexity).

## 12. Logic Families (brief)
- CMOS: low static power.
- TTL: legacy, faster older tech.

## 13. Sample Problems
1. Minimize f= Σm(0,2,5,7) with d(1,6): Perform K-map.
2. Implement majority of 3: Output 1 if ≥2 ones: AB + AC + BC.
3. Prove absorption: A + AB = A using distributive.

## 14. Exam Tips
- Practice quick pattern spotting: A + A'B.
- Mark don't cares distinctly in K-map.
- For minimal SOP count number of prime implicants first.

---
Prev ← `01_number_systems.md` | Next → `03_combinational_circuits.md`
