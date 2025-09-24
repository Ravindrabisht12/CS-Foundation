# 16. Performance Patterns & Exam Strategy

## 1. High-Yield Problem Types
| Category | Typical Tasks |
|----------|---------------|
| CPI / Performance | Compute speedup, compare CPUs |
| Pipeline | Stall cycles, speedup, hazard classification |
| Cache | Tag/index/offset bits, AMAT, miss type |
| ISA | Field bit widths, addressing, instruction count |
| Number Systems | Conversion, 2's complement overflow |
| Floating Point | Decode/encode IEEE 754, rounding |

## 2. Formula Consolidation
| Concept | Formula |
|---------|---------|
| CPU Time | IC × CPI × Cycle Time |
| Speedup | OldTime / NewTime |
| Amdahl | 1 / ( (1 - f) + f/s ) |
| CPI_new | CPI_base + Stall/instr |
| AMAT | HitTime + MissRate × MissPenalty |
| Tag Bits | AddressBits − IndexBits − OffsetBits |
| IEEE Bias | 2^{k-1} − 1 (k=exp bits) |

## 3. Quick Mental Anchors
- 2^{10} ≈ 10^3
- Single precision mantissa ≈ 7 decimal digits
- Load-use stall usually 1 cycle in basic 5-stage.

## 4. Error Log Structure
| Date | Topic | Error Type | Root Cause | Fix Action |
|------|-------|-----------|------------|------------|
| 2025-09-24 | Cache | Miscount index bits | Misused block size | Re-derive formula |

## 5. Time Allocation (Revision Session Example 2h)
| Segment | Minutes |
|---------|---------|
| Pipelines | 25 |
| Cache | 25 |
| ISA/Addressing | 15 |
| Number Systems | 10 |
| Floating Point | 15 |
| ALU/Arithmetic | 10 |
| Control/Datapath | 10 |
| Fast mixed practice | 30 |

## 6. Common Traps
| Trap | Avoidance |
|------|-----------|
| Using wrong bias | Write bias at top before converting |
| Confusing miss types | Check if first access ⇒ compulsory |
| Ignoring sign extension | Mark immediate field bits |
| Branch penalty miscalc | Penalty × mispredict fraction |
| Overflow vs Carry | Note signedness context |

## 7. Final Week Checklist
- Redo 50 prior mistakes
- Recreate formula sheet from memory
- Timed mixed sets (30 Q in 45 min)
- Sleep & pacing plan

## 8. Exam Day Micro-Strategy
- First scan for your strong areas (cache/pipeline) → confidence boost
- Mark lengthier multi-step (virtual memory + multi-level cache) for second pass
- Keep scratch page for running Amdahl & CPI formulas

## 9. Minimal Last-Minute Sheet
CPI = Σ fi*CPIi
Speedup = T_old / T_new
AMAT = HT + MR × MP
2's comp overflow: same-sign operands → different-sign result
IEE754: value = (-1)^s × (1.f) × 2^{e-bias}
Tag bits = Addr − (Index + Offset)

## 10. Growth Mindset Note
Track patterns not individual errors: classification accelerates mastery.

---
Prev ← `15_parallelism_basics.md` | Back to Index: `README.md`
