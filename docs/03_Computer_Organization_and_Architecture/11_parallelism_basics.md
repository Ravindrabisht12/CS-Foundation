# 15. Parallelism Basics

## 1. Forms of Parallelism
| Type | Description | Example |
|------|-------------|---------|
| ILP (Instruction-Level) | Overlap independent instructions | Pipelining, superscalar |
| DLP (Data-Level) | Same op on many data | SIMD vector units |
| TLP (Thread-Level) | Multiple threads/processes | Multicore |
| MLP (Memory-Level) | Concurrent memory ops | Multiple outstanding misses |

## 2. Flynn's Taxonomy
| Class | Streams |
|-------|---------|
| SISD | Single instr, single data |
| SIMD | Single instr, multiple data |
| MISD | Rare |
| MIMD | Multiple instr, multiple data |

## 3. Vector Processing
Vector register holds multiple elements; reduces loop overhead.

## 4. Multicore Scaling Limitations
- Amdahl's Law limits speedup
- Synchronization & communication overhead
- Memory bandwidth contention

## 5. Cache Coherence (Mention)
MESI states: Modified, Exclusive, Shared, Invalid.

## 6. GPU vs CPU (Brief)
GPU: Many simple cores, high DLP.
CPU: Few complex cores, lower latency, high ILP.

## 7. Exam Tips
- Often only conceptual questions appear.
- Distinguish ILP (compiler/hardware) vs TLP (OS/architecture scheduling).

---
Prev ← `10_io_interrupts_dma.md` | Next → `12_performance_patterns.md` | Index: `README.md`
