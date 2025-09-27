# 14. I/O, Interrupts & DMA

## 1. I/O Interface Goals
Standardize device communication, decouple CPU from timing specifics.

## 2. I/O Techniques
| Method | Mechanism | CPU Involvement |
|--------|-----------|-----------------|
| Programmed I/O | Poll status register | High |
| Interrupt-Driven | Device signals interrupt | Moderate |
| DMA (Direct Memory Access) | DMA controller transfers blocks | Low |

## 3. Interrupt Cycle (Simplified)
1. Complete current instruction.
2. Save PC (and status) to stack.
3. Vector fetch (get ISR address).
4. Execute ISR.
5. Restore state; return.

## 4. Maskable vs Non-Maskable
- Maskable (INTR): can be disabled during critical code.
- Non-maskable (NMI): high priority events (power fail).

## 5. Interrupt Latency Factors
- Pipeline flush
- Register save overhead
- Interrupt masking delay

## 6. DMA Operation Steps
1. CPU programs DMA controller (source, dest, length).
2. DMA requests bus (bus arbitration).
3. Transfers proceed (burst or cycle stealing).
4. DMA raises interrupt when done.

## 7. Cycle Stealing
DMA takes single bus cycles interleaved with CPU memory cycles (slows CPU somewhat).

## 8. Memory Mapped vs Isolated I/O
| Aspect | Memory Mapped | Isolated (Port) |
|--------|---------------|-----------------|
| Address Space | Shares | Separate |
| Instruction Set | Regular load/store | Special IN/OUT |
| Pros | Uniform addressing | Keeps address space free |

## 9. Priority Handling
Daisy chain or programmable interrupt controller (PIC) resolves simultaneous requests.

## 10. Example Problem
Device requires 2000 I/O operations/second each 400μs CPU if polled.
CPU time used = 2000 × 400μs = 0.8s per second (80% utilization) → Use interrupt.

## 11. Exam Tips
- Identify when DMA saves CPU cycles (large block transfers).
- Distinguish latency vs throughput terms.
- Remember interrupt save/restore overhead affects response time.

---
Prev ← `09_memory_hierarchy.md` | Next → `11_parallelism_basics.md` | Index: `README.md`
