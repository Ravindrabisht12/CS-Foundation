# 05. CPU Organization & Performance Metrics

## 1. CPU Components (High Level)
- ALU: arithmetic / logic
- Registers: fast storage (PC, IR, MAR, MDR, GPRs)
- Control Unit: orchestrates micro-operations
- Buses: internal data / address / control lines

## 2. Performance Equation
CPU Time = Instruction Count × CPI × Clock Cycle Time
= Instruction Count × (Σ (Instruction Type Frequency × CPI)) / Clock Rate

MIPS = Instruction Count / (Execution Time × 10^6)
Be cautious: Higher MIPS ≠ faster if instruction work differs.

## 3. Amdahl's Law
Speedup_total = 1 / ((1 - f) + f / s)
Where f = fraction improved, s = speedup of improved part.

## 4. Benchmark Pitfalls
- Mixing different workloads
- Using MIPS across ISAs misleading

## 5. CPI Breakdown Example
Instruction mix:
| Type | Fraction | CPI |
|------|----------|-----|
| ALU | 50% | 1 |
| Load | 20% | 2 |
| Store | 10% | 2 |
| Branch | 20% | 3 |
Average CPI = 0.5*1 + 0.2*2 + 0.1*2 + 0.2*3 = 1.7.

## 6. Register vs Memory Access
- Register file read: 1 cycle typical
- Memory access: multi-cycle (cache dependent)

## 7. Instruction Execution Cycle (Simplified)
Fetch → Decode → Read Operands → Execute → Memory → Write Back.

## 8. Micro-operations Examples
- PC → MAR
- Memory[MAR] → MDR
- MDR → IR
- PC + 4 → PC

## 9. Control Signals (examples)
- RegWrite, MemRead, MemWrite, ALUSrc, Branch, PCSrc

## 10. Example Speedup Calculation
Original time: 10s. 40% part gains 3x speedup.
New time = 10 × ( (1 - 0.4) + 0.4/3 ) = 10 × (0.6 + 0.1333) = 7.333s → Speedup ≈1.36x.

## 11. Power Consideration (brief)
Dynamic Power ≈ C × V² × f × activity.

## 12. Exam Tips
- Always separate instruction count vs CPI vs clock.
- Normalize comparisons to execution time.
- Amdahl: diminishing returns as f shrinks.

---
Next → `02_isa_machine_instructions.md` | Index: `README.md`
