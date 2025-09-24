# 07. Virtual Memory

Virtual memory is a technique that allows the execution of processes that are not completely in main memory. This allows the logical address space of a process to be much larger than the physical address space.

## 1. Benefits of Virtual Memory
- A program can be larger than the physical memory.
- It allows processes to share files and memory easily.
- It provides a mechanism for process creation that is more efficient.

## 2. Demand Paging
Demand paging is the most common implementation of virtual memory. It is similar to a paging system with swapping.

- **Principle:** Load pages into memory only when they are needed (on demand).
- **Process:** When a process tries to access a page that is not in memory, a **page fault** occurs.
- **Page Fault Handling:**
  1. The MMU hardware traps to the operating system.
  2. The OS checks if the memory access was valid.
  3. If valid, the OS finds the required page on the backing store (disk).
  4. It finds a free frame in physical memory. (If no frame is free, it uses a page replacement algorithm to select a "victim" frame).
  5. It loads the required page from the disk into the free/victim frame.
  6. It updates the page table to reflect the new page-frame mapping.
  7. It restarts the instruction that was interrupted by the trap.

### Valid-Invalid Bit
A **valid-invalid bit** is associated with each page table entry.
- **`valid` (v):** The associated page is in memory.
- **`invalid` (i):** The page is not in memory (or the page is not in the process's logical address space).

Initially, all entries are set to `i`. When a page is brought into memory, the bit is set to `v`. A page fault occurs when an access is made to a page with its bit set to `i`.

## 3. Page Replacement
If no free frame is available when a page fault occurs, the OS must select an existing frame to be replaced. This is called **page replacement**.

The goal of a page replacement algorithm is to select a victim page that will not be used for the longest period of time, thereby minimizing the number of future page faults.

### Page Replacement Algorithms
- **a) First-In, First-Out (FIFO):**
  - Replaces the oldest page in memory.
  - **Problem:** Suffers from **Belady's Anomaly**, where increasing the number of allocated frames can, in some cases, increase the number of page faults.

- **b) Optimal (OPT or MIN):**
  - Replaces the page that will not be used for the longest period of time.
  - **Optimality:** Guarantees the lowest possible page-fault rate.
  - **Problem:** It is impossible to implement as it requires future knowledge of the reference string. It is used as a benchmark for other algorithms.

- **c) Least Recently Used (LRU):**
  - Replaces the page that has not been used for the longest period of time.
  - It is an approximation of the optimal algorithm, based on the idea that the past is a good predictor of the future.
  - **Implementation:** Can be implemented with a counter for each page or by maintaining a stack of page numbers. These implementations have high overhead.

- **d) LRU Approximations:**
  - **Reference Bit Algorithm:** Each page has a reference bit, initially 0. When the page is accessed, the bit is set to 1. The OS periodically clears the bits. A page with a reference bit of 0 is a candidate for replacement.
  - **Second-Chance Algorithm:** A FIFO-based algorithm that uses a reference bit. If the oldest page has a reference bit of 1, it gets a "second chance" (its bit is cleared, and it's moved to the back of the queue).

- **e) Counting-Based Algorithms:**
  - **Least Frequently Used (LFU):** Replaces the page with the smallest access count.
  - **Most Frequently Used (MFU):** Replaces the page with the largest access count, based on the argument that the page with the smallest count was probably just brought in and has yet to be used.

## 4. Thrashing
- A process is **thrashing** if it is spending more time paging than executing.
- This happens when a process does not have enough frames to hold all the pages for its current working set of memory.
- It leads to a high page-fault rate, low CPU utilization, and the OS might think it needs to increase the degree of multiprogramming, making the problem even worse.
- **Solution:** Use a local replacement algorithm and a working-set model to determine how many frames a process needs.

---
Prev ← `06_memory_management.md` | Next → `08_file_systems.md` | Index: `README.md`
