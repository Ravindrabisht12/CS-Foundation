# 03. Combinational Logic Circuits

## 1. What is a Combinational Circuit?

A combinational logic circuit is a fundamental building block of digital electronics. Its defining characteristic is that its **outputs are determined exclusively by its current inputs**.

Think of it as a "pure" function in programming:
- **No Memory:** It has no memory of past inputs or states. The output for a given set of inputs will always be the same, regardless of what came before.
- **Stateless:** It does not store any information.
- **Instantaneous (in theory):** The outputs change as soon as the inputs change (though in reality, there is a small propagation delay).

This is in direct contrast to *sequential circuits*, which have memory and whose outputs depend on both current inputs and the stored state.

**Examples:** A simple light switch is analogous. The light is on or off based only on the current position of the switch, not its history.

## 2. Standard Combinational Modules
Combinational circuits are the workhorses of digital logic, used to perform arithmetic, data routing, and selection. Below are the most common standard modules.
| Circuit | Function | Notes |
|---------|----------|-------|
| Half Adder | Sum, Carry of 2 bits | S=A⊕B, C=AB |
| Full Adder | Adds 3 bits (A,B,Cin) | Cascadable |
| Decoder (n→2^n) | One-hot select | Build large via hierarchies |
| Encoder | Inverse of decoder | Add priority for multiple inputs |
| Multiplexer | Select one input | Universal function element |
| Demultiplexer | Route input to one line | Opposite of MUX |
| Comparator | A=B, A>B, A<B | Subtraction-based or magnitude logic |
| Priority Encoder | Highest-order input index | Generates valid + code |

## 3. MUX as Universal Logic
To implement f(x,y,z): Use x,y as select lines; feed constant/variable forms for data inputs based on truth table rows where select matches.

## 4. Decoder + OR Implementation
f(A,B,C)=Σm(1,4,6) → 3→8 decoder + OR gate combining outputs 1,4,6.

## 5. Adders
Ripple Carry: Cin ripples; delay O(n).
Carry Lookahead: Use P=A⊕B, G=AB to compute carries in parallel.
C1=G0+P0C0; C2=G1 + P1G0 + P1P0C0.

## 6. Subtractor
A−B = A + (2's complement of B).
Borrow logic if separate design (rare in modern ALU vs unified adder/subtractor with XOR on B input + initial carry 1).

## 7. Carry Select / Skip Concepts
- Carry Select: Precompute sum for carry 0 and 1, choose.
- Carry Skip: Detect propagate condition for block → skip.

## 8. Code Conversion Circuits
Binary ↔ Gray: chain XOR network.
BCD incrementer: detect 1010–1111 patterns and add 0110 adjust.

## 9. Hazards & Glitches
Glitch arises from unequal path delays → static hazard if output supposed constant. Add redundant implicant.

## 10. Design Procedure Example
Problem: 3-bit input produce 1 if number is prime (2,3,5,7). Inputs ABC.
Numbers: 0–7; primes: 2(010),3(011),5(101),7(111) → Σm(2,3,5,7).
K-map minimize.

## 11. Sample Problems
1. Implement 4:1 MUX using two 2:1 MUX + one 2:1 at top.
2. Design majority-of-4 (≥3 ones): Σm(7,11,13,14,15).
3. Show delay difference ripple vs CLA for 16 bits (qualitative: ripple 16 gate levels, CLA ~ log groups + logic overhead).

## 12. Pitfalls & Tips
| Pitfall | Solution |
|---------|----------|
| Using too many gates when MUX easier | Check if variable count <= select lines |
| Forget enable pin on decoder | Tie correctly or treat as gating input |
| Overlooking hazard | Add consensus term | 

---
Prev ← `02_boolean_algebra.md` | Next → `04_logic_minimization.md` | Index: `README.md`
