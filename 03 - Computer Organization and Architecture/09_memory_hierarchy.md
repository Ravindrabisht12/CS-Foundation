# 13. Memory Hierarchy

## 1. The Memory Problem
Processors are extremely fast, while main memory (DRAM) is relatively slow. If a CPU had to wait for main memory for every instruction and data access, it would spend most of its time idle. This speed gap is known as the **CPU-Memory Gap**.

The memory hierarchy is a solution to this problem. It is a tiered structure of computer storage where each level is a trade-off between speed, cost, and capacity.

## 2. Principle of Locality
The effectiveness of the memory hierarchy relies on the **Principle of Locality**, which describes the memory access patterns of typical programs.
-   **Temporal Locality:** If a program accesses a memory location, it is likely to access that same location again soon. (e.g., loops, reuse of variables).
-   **Spatial Locality:** If a program accesses a memory location, it is likely to access nearby memory locations soon. (e.g., sequential instruction execution, array processing).

By keeping recently and frequently used data in smaller, faster memory levels closer to the CPU, the average memory access time can be significantly reduced.

## 3. Basic Levels
The hierarchy is organized from fastest and smallest to slowest and largest:
1.  **Registers:** Fastest access, part of the CPU, holds current operands.
2.  **L1 Cache (Level 1):** Extremely fast (SRAM), very small (e.g., 32-64 KB), located on the CPU core.
3.  **L2 Cache (Level 2):** Fast (SRAM), larger than L1 (e.g., 256 KB - 4 MB), often on-chip but shared by a few cores.
4.  **L3 Cache (Level 3):** Slower than L2, but much larger (e.g., 8-32 MB), shared by all CPU cores.
5.  **Main Memory (DRAM):** Much larger capacity (e.g., 8-64 GB), but significantly slower than caches.
6.  **Secondary Storage (SSD/HDD):** Non-volatile storage for programs and data (e.g., 256 GB - 4 TB).
7.  **Archival Storage:** Tape, cloud storage for long-term backup.

## 4. Cache Parameters
A cache is a small, fast memory that stores copies of data from frequently used main memory locations.
| Parameter | Meaning |
|-----------|---------|
| **Capacity** | Total data-holding size of the cache (e.g., 32 KB). |
| **Block (Line) Size** | The amount of data transferred between cache and main memory at once (e.g., 64 bytes). Exploits spatial locality. |
| **Associativity** | The number of locations (ways) a block from main memory can be placed in the cache. |
| **Number of Sets** | The cache is divided into sets where blocks are placed. `Sets = Capacity / (Block Size × Associativity)`. |
| **Replacement Policy** | Algorithm to decide which block to evict on a miss when a set is full (e.g., LRU, FIFO, Random). |
| **Write Policy** | How writes to the cache are handled with respect to main memory (write-through or write-back). |
| **Allocation Policy** | Whether a block is loaded into the cache on a write miss (write-allocate or no-write-allocate). |

## 5. Address Breakdown
A memory address is divided into three fields to determine where a block is placed and to verify a hit. For a cache with `B=2^b` bytes per block and `S=2^s` sets:
`[ Tag (t bits) | Index (s bits) | Block Offset (b bits) ]`
-   **Block Offset:** `b = log₂(Block Size)`. Selects the byte within the block.
-   **Index:** `s = log₂(Number of Sets)`. Selects the set in the cache.
-   **Tag:** The remaining bits, stored in the cache to verify that the correct block is present. `t = Address_bits - s - b`.

## 6. Mapping Types
| Mapping | Description | Pros/Cons |
|---------|-------------|-----------|
| **Direct Mapped** | Associativity = 1. Each block from memory maps to exactly one cache line. `Index = (Block Address) mod (Number of Sets)`. | Simple and fast, but prone to **conflict misses** if two frequently used blocks map to the same line. |
| **N-Way Set-Associative** | A block can be placed in any of the `N` lines within its set. `Index = (Block Address) mod (Number of Sets)`. | A good compromise. Reduces conflict misses compared to direct mapped. LRU replacement is feasible for small N. |
| **Fully Associative** | A block can be placed anywhere in the cache (one single set). | Most flexible, eliminates conflict misses. However, requires comparing the tag with every line in the cache simultaneously, making it expensive and slow for large caches. |

## 7. Average Memory Access Time (AMAT)
The key performance metric for a memory system.
**Formula:** `AMAT = Hit Time + Miss Rate × Miss Penalty`
-   **Hit Time:** Time to access data found in the cache.
-   **Miss Rate:** Fraction of accesses that are not found in the cache.
-   **Miss Penalty:** Time required to fetch the block from the next lower level of the memory hierarchy.

For a multi-level cache system:
`AMAT_L1 = HT_L1 + MR_L1 × (AMAT_L2)`
`AMAT_L2 = HT_L2 + MR_L2 × (Miss Penalty_L2)`

## 8. Miss Types (The 3 C's)
| Type | Cause | How to Reduce |
|------|-------|---------------|
| **Compulsory** | The very first access to a block. Also called a "cold start" miss. | Increase block size (prefetches nearby data). |
| **Capacity** | The cache is too small to hold the entire working set of the program. | Increase cache capacity. |
| **Conflict** | Occurs in direct-mapped or set-associative caches when too many active blocks map to the same set. | Increase associativity. |

## 9. Write Policies
-   **Write-Through:** Writes are performed to both the cache and main memory simultaneously. Simple, but can be slow due to memory write latency. Often uses a **write buffer** to hide this latency.
-   **Write-Back:** Writes are only made to the cache. The modified cache block (marked with a "dirty bit") is written back to main memory only when it is evicted. More efficient bandwidth usage, but more complex.

## 10. DRAM Concepts
-   **Row Buffer:** An internal cache in a DRAM chip. Accessing data in an "open" row is much faster (a "row hit") than accessing a new row.
-   **Latency Components:** `t_RAS` (Row Access Strobe), `t_RCD` (RAS to CAS Delay), `t_CAS` (Column Access Strobe).

## 11. Virtual Memory (Brief)
-   Uses main memory as a "cache" for the secondary storage. Data is moved in **pages** (e.g., 4 KB).
-   The **Translation Lookaside Buffer (TLB)** is a cache for the page table to speed up virtual-to-physical address translation.
-   **Effective Access Time (EAT):** `EAT = (1 - p) × (T_mem + T_TLB) + p × (Page Fault Penalty)`, where `p` is the page fault rate.

## 12. Example Calculation
Given: L1 cache with hit time=1ns, miss rate=5%, and a main memory with a miss penalty of 100ns.
`AMAT = 1ns + (0.05 × 100ns) = 1ns + 5ns = 6ns`.

## 13. Cache Coherence (Mention)
In multiprocessor systems, multiple CPUs may have copies of the same data in their caches. Coherence protocols (like **MESI**) are required to ensure that all processors see a consistent view of memory.

## 14. Exam Tips
-   Address breakdown is a very common question. Always start by calculating the number of bits for the offset and index.
-   Be careful to distinguish between block address and byte address.
-   AMAT calculations are fundamental. For multi-level caches, work from the inside out.
-   Understand the trade-offs between capacity, associativity, and block size.

---
Prev ← `08_pipelining_hazards.md` | Next → `10_io_interrupts_dma.md` | Index: `README.md`
