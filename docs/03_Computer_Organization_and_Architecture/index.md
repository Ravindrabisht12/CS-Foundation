# Computer Organization & Architecture (COA)

A structured, exam‑oriented yet concept‑deep roadmap for mastering COA (GATE / technical interviews / fundamentals). Navigate sequentially or jump via the topic index.

## Study Roadmap (Recommended Order)
1. CPU Organization & Performance Metrics
2. Instruction Set Architecture (ISA) & Machine Instructions
3. Addressing Modes
4. Arithmetic Logic Unit (ALU) & Integer Arithmetic
5. Floating Point Representation & Arithmetic (IEEE‑754)
6. Datapath & Micro-operations
7. Hardwired vs Microprogrammed Control Unit
8. Instruction Pipelining & Hazards
9. Memory Hierarchy (Cache, Main Memory, Virtual Memory)
10. I/O Systems (Interrupts, DMA, Buses)
11. Parallelism Basics (ILP, SIMD/MIMD overview)
12. Performance Tuning & Typical GATE Problem Patterns

> Extra topics (Parallelism, Performance tuning) included for completeness & intuition though core GATE weight centers around ISA, Pipelining, and Memory.

## Quick Topic Index
| # | Topic | Link |
|---|-------|------|
|01| CPU Organization & Performance | [📖 Study Material](01_cpu_org_performance) |
|02| ISA & Machine Instructions | [📖 Study Material](02_isa_machine_instructions) |
|03| Addressing Modes | [📖 Study Material](03_addressing_modes) |
|04| ALU & Integer Arithmetic | [📖 Study Material](04_alu_integer_arithmetic) |
|05| Floating Point | [📖 Study Material](05_floating_point) |
|06| Datapath & Micro-operations | [📖 Study Material](06_datapath_microoperations) |
|07| Control Unit (Hardwired vs Microprogrammed) | [📖 Study Material](07_control_unit) |
|08| Pipelining & Hazards | [📖 Study Material](08_pipelining_hazards) |
|09| Memory Hierarchy | [📖 Study Material](09_memory_hierarchy) |
|10| I/O, Interrupts & DMA | [📖 Study Material](10_io_interrupts_dma) |
|11| Parallelism Basics | [📖 Study Material](11_parallelism_basics) |
|12| Performance Patterns & Tips | [📖 Study Material](12_performance_patterns) |
|📚| External Resources | [📚 Additional Resources](RESOURCES) |

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

## Get Started
👉 **Quick start**: Begin with [CPU Organization & Performance](01_cpu_org_performance)
📚 **Need help?**: Check our [Resources & Practice Guide](RESOURCES)

## About File Structure
- **index.md**: Main navigation page (this file) with clickable links
- **README.md**: Backup/fallback content for compatibility
