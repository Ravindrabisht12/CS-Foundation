# Digital Logic – Structured Roadmap

This module builds the foundation for Computer Organization. Follow the ordered progression; each topic file contains: definitions, derivations, design patterns, examples, pitfalls, quick questions, and exam tips.

## Topic Order
1. Number Systems & Data Representation
2. Boolean Algebra & Logic Identities
3. Combinational Circuits (Standard Modules & Design)
4. Logic Minimization (K-Map & Quine-McCluskey Intro)
5. Sequential Circuits (Latches, Flip-Flops, FSM Design)
6. Fixed-Point Arithmetic (Signed Representations & Integer ALU)
7. Floating-Point Basics (IEEE 754 Essentials)

## Index
| # | Topic | File |
|---|-------|------|
|01| Number Systems & Data Representation | `01_number_systems.md` |
|02| Boolean Algebra & Logic Identities | `02_boolean_algebra.md` |
|03| Combinational Circuits | `03_combinational_circuits.md` |
|04| Logic Minimization | `04_logic_minimization.md` |
|05| Sequential Circuits | `05_sequential_circuits.md` |
|06| Fixed-Point Arithmetic | `06_fixed_point_arithmetic.md` |
|07| Floating-Point Basics | `07_floating_point_basics.md` |
|R | Resources & Practice | `RESOURCES.md` |

## Core Exam Weight Focus
- High yield: Boolean simplification, K-map grouping, sequential design timing, number conversions, overflow detection.
- Medium: Code conversions, hazards (static/glitch), arithmetic circuits (adders, subtractors), IEEE 754 decoding.

## Snapshot Formulas / Rules
| Concept | Rule |
|---------|------|
| Bits for N states | ⌈log₂ N⌉ |
| 2's Comp Range (n bits) | −2^{n−1} .. 2^{n−1}−1 |
| Overflow (2's add) | Carry into MSB ≠ carry out |
| Gray -> Binary | b_i = b_{i+1} ⊕ g_i |
| Propagate / Generate | P = A⊕B, G = AB |
| IEEE 754 Value | (−1)^s × (1.f) × 2^{e−bias} (normalized) |

## Strategy
First Pass: Read definitions + solved examples
Second Pass: Design from requirements (truth table → minimized → gate/netlist)
Third Pass: Timed mixed mini-sets (10–15 questions)

Quick start → Open `01_number_systems.md`.
