# Computer Organization & Architecture (COA)

A structured, exam‑oriented yet concept‑deep roadmap for mastering COA (GATE / technical interviews / fundamentals). Navigate sequentially or jump via the topic index.

## Study Roadmap (Recommended Order)
1. Number Systems & Data Representation
2. Boolean Algebra & Logic Gates
3. Combinational Circuits
4. Sequential Circuits & FSMs
5. CPU Organization & Performance Metrics
6. Instruction Set Architecture (ISA) & Machine Instructions
7. Addressing Modes
8. Arithmetic Logic Unit (ALU) & Integer Arithmetic
9. Floating Point Representation & Arithmetic (IEEE‑754)
10. Datapath & Micro-operations
11. Hardwired vs Microprogrammed Control Unit
12. Instruction Pipelining & Hazards
13. Memory Hierarchy (Cache, Main Memory, Virtual Memory)
14. I/O Systems (Interrupts, DMA, Buses)
15. Parallelism Basics (ILP, SIMD/MIMD overview)
16. Performance Tuning & Typical GATE Problem Patterns

> Extra topics (Parallelism, Performance tuning) included for completeness & intuition though core GATE weight centers around 6–14.

## Quick Topic Index
| # | Topic | File |
|---|-------|------|
|01| Number Systems & Data Representation | `01_number_systems.md` |
|02| Boolean Algebra & Logic Gates | `02_boolean_algebra.md` |
|03| Combinational Circuits | `03_combinational_circuits.md` |
|04| Sequential Circuits & FSMs | `04_sequential_circuits.md` |
|05| CPU Organization & Performance | `05_cpu_org_performance.md` |
|06| ISA & Machine Instructions | `06_isa_machine_instructions.md` |
|07| Addressing Modes | `07_addressing_modes.md` |
|08| ALU & Integer Arithmetic | `08_alu_integer_arithmetic.md` |
|09| Floating Point | `09_floating_point.md` |
|10| Datapath & Micro-operations | `10_datapath_microoperations.md` |
|11| Control Unit (Hardwired vs Microprogrammed) | `11_control_unit.md` |
|12| Pipelining & Hazards | `12_pipelining_hazards.md` |
|13| Memory Hierarchy | `13_memory_hierarchy.md` |
|14| I/O, Interrupts & DMA | `14_io_interrupts_dma.md` |
|15| Parallelism Basics | `15_parallelism_basics.md` |
|16| Performance Patterns & Tips | `16_performance_patterns.md` |
|R| External Resources | `RESOURCES.md` |

## How to Use
- First pass: Read summaries + solved examples.
- Second pass: Attempt end questions without looking.
- Final revision: Recreate key formulas table from memory.

## High-Yield Formula Snapshot (Preview)
| Concept | Formula / Rule | Notes |
|---------|----------------|-------|
| CPI | Avg CPI = Σ (Instruction Type Fraction × CPI) | Use for CPU time |
| CPU Time | T = (Instr Count × CPI × Cycle Time) | Or / Clock Rate |
| Amdahl | Speedup = 1 / ( (1 - f) + f/s ) | f = fraction improved |
| Cache AMAT | AMAT = Hit Time + Miss Rate × Miss Penalty | Include write-back cost if asked |
| Address bits | = log2(Addressable Units) | Usually bytes |
| DRAM Access | t_access ≈ Row Access + Column Access | Over-simplified |
| Pipeline Speedup | ≈ n / (1 + stall cycles fraction) | Ideal = n | 

Full derivations inside topic files.

## Revision Strategy
- Spaced repetition: (Day 0, Day 2, Day 7, Day 21) for formula recall.
- Practice: At least 40 cache + 30 pipeline + 20 ISA problems.
- Maintain an error log: Track misconception categories.

## External Links (Full list in `RESOURCES.md`)
- Patterson & Hennessy slides (searchable PDF)
- IEEE 754 Standard (overview articles)
- Cache visualization tools

Proceed to `01_number_systems.md` →
