# 04. Sequential Circuits & FSMs

## 1. Concept
Outputs depend on present inputs + past history (state). Implemented with storage elements (latches / flip-flops).

## 2. Latches vs Flip-Flops
| Type | Trigger | Sensitive To |
|------|---------|--------------|
| SR Latch | Level | S,R inputs |
| D Latch | Level | Enable |
| D Flip-Flop | Edge | Rising/falling clock |
| JK Flip-Flop | Edge | J,K |
| T Flip-Flop | Edge | Toggle on T=1 |

## 3. Flip-Flop Characteristic Equations
| FF | Equation |
|----|----------|
| D | Q(next)=D |
| T | Q⊕T |
| JK | JQ' + K'Q |
| SR | S + R'Q (invalid S=R=1) |

Conversions: To implement one FF type using another derive excitation table.

## 4. Timing Parameters
| Parameter | Meaning |
|-----------|---------|
| Setup Time (t_su) | Data stable before clock edge |
| Hold Time (t_h) | Data stable after edge |
| Clock-to-Q (t_cq) | Propagation delay to output |
| Skew | Difference in arrival time of clock edges |

Max Frequency: f_max ≈ 1 / (t_cq + t_comb + t_su + skew_margin)

## 5. Metastability
Occurs if setup/hold violated. Use synchronizer chain (2 FF) for async inputs.

## 6. Finite State Machines
- Moore: output depends only on state.
- Mealy: output depends on state + input (can be faster, more hazard prone).

## 7. State Minimization
Merge equivalent states (same output + same next state behavior).

## 8. State Assignment
Binary or one-hot. One-hot uses more FFs but simpler logic (common in FPGAs).

## 9. Counters
- Ripple (asynchronous): simpler, cumulative delay.
- Synchronous: simultaneous clock, faster.
- Mod-m counter design: ensure terminal count resets.

## 10. Shift Registers
- Serial in / serial out (SISO)
- Serial in / parallel out (SIPO)
- Parallel in / serial out (PISO)
- Bidirectional shifts (barrel shifter for multi-bit in 1 cycle)

## 11. Sample Problem (Timing)
Given t_cq=2ns, t_comb=5ns, t_su=1ns, skew=0.5ns ⇒ T_min ≈ 2+5+1+0.5=8.5ns ⇒ f_max ≈117.6 MHz.

## 12. Hazards in Mealy Machines
Output changes mid-cycle if input glitches; convert to Moore if stability required.

## 13. Exam Tips
- Always write present/next state table first.
- Watch for unreachable states → remove.
- Derive FF excitation (e.g., for T: T = Q ⊕ Q_next).

---
Prev ← `03_combinational_circuits.md` | Next → `05_cpu_org_performance.md`
