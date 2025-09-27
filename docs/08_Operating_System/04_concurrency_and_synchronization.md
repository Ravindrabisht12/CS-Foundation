# 04. Concurrency and Synchronization

Concurrency is the execution of multiple instruction sequences at the same time. In an operating system, this happens when several processes or threads are running in parallel.

## 1. The Critical Section Problem
When multiple processes access and manipulate the same shared data, the final outcome depends on the particular order in which the access takes place. This is called a **race condition**.

- **Critical Section:** A segment of code in a process where shared resources are accessed.
- **The Critical Section Problem:** To design a protocol that cooperating processes can use to ensure that when one process is executing in its critical section, no other process is allowed to execute in its critical section.

A solution must satisfy three requirements:
1.  **Mutual Exclusion:** If a process is in its critical section, no other process can be in its critical section.
2.  **Progress:** If no process is in its critical section and some processes wish to enter, then only those processes that are not in their remainder sections can participate in the decision of which will enter its critical section next, and this selection cannot be postponed indefinitely.
3.  **Bouded Waiting:** There must be a bound on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

## 2. Synchronization Tools

### a) Mutex Locks
- A **Mutex** (Mutual Exclusion) is the simplest synchronization tool.
- It's a lock that a process must **acquire** before entering a critical section and **release** when it exits.
- Only one process can hold the lock at a time.
- It uses **busy waiting** (a spinlock), where a process repeatedly checks for the lock to become available. This wastes CPU cycles.

### b) Semaphores
- A semaphore is a more sophisticated synchronization tool that does not require busy waiting.
- It is an integer variable `S` that is accessed only through two atomic operations:
  - **`wait(S)`** (or `P(S)`):
    ```
    S--;
    if (S < 0) {
        // add this process to a waiting queue
        // block the process
    }
    ```
  - **`signal(S)`** (or `V(S)`):
    ```
    S++;
    if (S <= 0) {
        // remove a process from the waiting queue
        // wakeup that process
    }
    ```
- **Types of Semaphores:**
  - **Counting Semaphore:** The value can range over an unrestricted domain. Used to control access to a resource with multiple instances.
  - **Binary Semaphore:** The value can only be 0 or 1. It behaves like a mutex lock but without busy waiting.

### c) Monitors
- A monitor is a high-level synchronization construct that provides a convenient and effective mechanism for process synchronization.
- It is an abstract data type where only one process can be active within the monitor at a time.
- It consists of shared private data and procedures that operate on that data.
- To allow a process to wait inside the monitor, a monitor uses **condition variables**. A process can invoke `wait()` on a condition variable, which suspends it. Another process can invoke `signal()` on the same condition variable to resume one of the waiting processes.

## 3. Classic Synchronization Problems
These are standard problems used to test and demonstrate the effectiveness of synchronization schemes.

- **The Bounded-Buffer (Producer-Consumer) Problem:**
  - A producer process produces items and places them in a buffer. A consumer process consumes items from the buffer.
  - The problem is to ensure that the producer doesn't try to add to a full buffer and the consumer doesn't try to remove from an empty buffer.
  - Solved using semaphores.

- **The Readers-Writers Problem:**
  - A shared data set is accessed by multiple processes. Some processes only read the data (readers), and some only write (writers).
  - The problem is to allow multiple readers to access the data concurrently, but only one writer at a time, and no reader can be active while a writer is active.
  - Solved using semaphores.

- **The Dining-Philosophers Problem:**
  - A classic problem illustrating the challenges of deadlock and starvation.
  - Five philosophers sit at a round table with five chopsticks between them. A philosopher must pick up both adjacent chopsticks to eat.
  - The problem is to design a protocol that allows philosophers to eat without causing deadlock (where everyone picks up one chopstick and waits forever for the other) or starvation.

---
Prev ← `03_cpu_scheduling.md` | Next → `05_deadlock.md` | Index: `README.md`
