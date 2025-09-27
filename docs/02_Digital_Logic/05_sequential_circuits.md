# 05. Sequential Logic Circuits

## 1. What is a Sequential Circuit?

A sequential logic circuit is a type of digital circuit whose **outputs depend not only on the present value of its inputs but also on its past inputs**. This is the key difference from combinational circuits.

This "memory" of the past is achieved through the use of **storage elements** (like flip-flops or latches).

Key characteristics:
- **State:** The circuit has a "state," which is the information stored in its memory elements at any given time.
- **Memory:** It can store one or more bits of information.
- **Feedback:** There is typically a feedback path from the output of the storage elements back to the input of the combinational logic part of the circuit.

A sequential circuit is fundamentally composed of two parts:
1.  A **combinational logic** section that processes the inputs and the current state.
2.  A **memory element** section that holds the state and updates it based on a clock signal.

**Example:** A TV remote's channel-up button. Pressing it takes you to the *next* channel. The output (the new channel) depends on the input (button press) AND the current state (the current channel).

## 2. Storage Elements: The Heart of Memory
Sequential circuits are built using storage elements that can hold a binary value (0 or 1). These are the fundamental building blocks of memory.
| Element | Type | Trigger | Notes |
|---------|------|---------|-------|
| SR Latch | Level | S,R level | Invalid S=R=1 |
| D Latch | Level | Enable | Pass or hold |
| D Flip-Flop | Edge | Rising/falling edge | Most common |
| JK Flip-Flop | Edge | J,K | Toggle when J=K=1 |
| T Flip-Flop | Edge | T | Toggles if T=1 |

## 3. Characteristic & Excitation
| FF | Characteristic | Excitation (Given Q,Q⁺) |
|----|----------------|-------------------------|
| D | Q⁺=D | D=Q⁺ |
| T | Q⁺=Q⊕T | T=Q⊕Q⁺ |
| JK | Q⁺=JQ'+K'Q | J=Q'Q⁺, K=QQ'⁺ |

## 4. Timing Constraints
| Parameter | Meaning |
|-----------|---------|
| Setup (t_su) | Data stable before clock edge |
| Hold (t_h) | Data stable after edge |
| Clock→Q (t_cq) | Propagation to output |
| Skew | Clock arrival difference |

Max Freq: f_max ≈ 1 / (t_cq + t_comb + t_su + skew_margin).

## 5. FSM Types
| Type | Output Depends On | Pros |
|------|-------------------|------|
| Moore | State | Stable outputs |
| Mealy | State + Input | Fewer states, faster response |

## 6. FSM Design Flow
1. Problem spec → define inputs/outputs.
2. Derive states; remove redundant.
3. State transition diagram / table.
4. Choose encoding (binary / one-hot).
5. Derive next-state & output logic.
6. Implement with chosen FF type.

## 7. State Reduction
Partition states equivalent if outputs equal AND next states fall into same partitions iteratively.

## 8. One-Hot vs Binary
One-hot: N states → N FFs (simple next logic). Binary: ⌈log₂N⌉ FFs (compact, potentially complex logic).

## 9. Counters
- Ripple: asynchronous, cumulative delay.
- Synchronous: all FFs clocked together.
- Mod-m: design sequence, use reset when terminal state reached.

## 10. Shift Registers
SISO, SIPO, PISO, bidirectional. Barrel shifter: multi-bit shift in one cycle via multiplexers.

## 11. Metastability
Occurs if setup/hold violated. Mitigate asynchronous inputs with 2-FF synchronizer chain.

## 12. Sample Timing Example
Given: t_cq=2ns, t_comb=5ns, t_su=1ns, skew=0.5ns → T_min≈8.5ns → f_max≈117.6 MHz.

## 13. Pitfalls & Tips
| Pitfall | Advice |
|---------|--------|
| Missing unreachable states | Identify & remove early |
| Mealy glitches | Synchronize or convert to Moore if output hazard-critical |
| Setup violation | Reduce combinational depth or pipeline |

---
Prev ← `04_logic_minimization.md` | Next → `06_fixed_point_arithmetic.md` | Index: `README.md`
