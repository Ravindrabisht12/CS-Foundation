# 03. Combinational Circuits

## 1. Definition
Output depends only on present inputs (no memory). Implemented with logic gates.

## 2. Standard Blocks
| Block | Inputs | Outputs | Function |
|-------|--------|---------|----------|
| Decoder (n→2^n) | n | 2^n | One-hot lines |
| Encoder (2^n→n) | 2^n | n | Reverse decoder |
| Priority Encoder | 2^n | n + valid | Highest priority index |
| Multiplexer (MUX) | 2^n data + n select | 1 | Data selection |
| Demux | 1 + n select | 2^n | Route input to one line |
| Comparator | n+n | 3 / 1 | A=B, A>B, A<B signals |
| Adder | A,B (+Cin) | Sum,Cout | Arithmetic |

## 3. MUX Implementation Trick
Any Boolean function of n vars can be built using a 2^{n-1}:1 MUX selecting minterms, with inputs tied to 0/1 or variables.

## 4. Decoder-Based Realization
f(A,B,C)= Σm(1,4,6) → Use 3→8 decoder, OR selected outputs.

## 5. Adders & Subtractors
Ripple Carry: O(n) delay.
Carry Lookahead:
C1 = G0 + P0 C0
C2 = G1 + P1G0 + P1P0C0
Where G = AB, P = A⊕B.

## 6. Carry Select & Carry Skip
- Trade-off area vs speed
- Carry skip uses propagate block to bypass chain.

## 7. BCD Adder
Add 6 (0110) when sum > 9 or carry out of digit.

## 8. Overflow vs Carry
Unsigned: carry out matters. Signed 2's comp: sign analysis.

## 9. Code Conversion Example
Gray → Binary hardware: cascading XOR chain.

## 10. PLA / PAL
- PLA: programmable AND + OR flexible.
- PAL: fixed OR structure (faster, cheaper).

## 11. Hazards (Combinational)
Add redundant term (consensus) to remove static hazards.
F = AB' + A'B + B'C has potential hazard; identify overlapping implicants.

## 12. Minimization Methods
1. Algebraic
2. K-map (≤5 vars for exam)
3. Quine-McCluskey (conceptual understanding; rarely computed fully in exam)

## 13. Sample Problems
1. Design 8:1 MUX using 2:1 units minimal count (tree structure).
2. Implement f(A,B,C,D)= Σm(0,2,5,7,8,10,13,15) with 4:16 decoder.
3. Derive delay of ripple adder with gate delay t: ≈ n·t (worst-case).

## 14. Exam Tips
- Memorize majority function; often reused.
- Spot propagate/generate quickly.
- Distinguish carry vs overflow carefully.

---
Prev ← `02_boolean_algebra.md` | Next → `04_sequential_circuits.md`
