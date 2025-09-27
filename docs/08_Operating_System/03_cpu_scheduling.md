# 03. CPU Scheduling

CPU scheduling is the process of selecting a process from the **ready queue** and allocating the CPU to it. The goal is to maximize CPU utilization and provide a good user experience.

## 1. Scheduling Criteria
- **CPU Utilization:** Keep the CPU as busy as possible.
- **Throughput:** The number of processes that complete their execution per time unit.
- **Turnaround Time:** The interval from the time of submission of a process to the time of completion. (Waiting Time + Execution Time).
- **Waiting Time:** The amount of time a process spends waiting in the ready queue.
- **Response Time:** The time from the submission of a request until the first response is produced (important for interactive systems).

The goal is to maximize CPU utilization and throughput, and minimize turnaround time, waiting time, and response time.

## 2. Preemptive vs. Non-Preemptive Scheduling
- **Non-Preemptive:** Once the CPU has been allocated to a process, it keeps the CPU until it releases it, either by terminating or by switching to the waiting state.
- **Preemptive:** The CPU can be taken away from a running process and allocated to another process (e.g., when a higher-priority process enters the ready queue).

## 3. Scheduling Algorithms

### a) First-Come, First-Served (FCFS)
- **Type:** Non-Preemptive.
- **Algorithm:** The process that requests the CPU first is allocated the CPU first. Implemented with a simple FIFO queue.
- **Problem:** Suffers from the **convoy effect**, where a long process can make shorter processes wait for a long time, leading to high average waiting time.

### b) Shortest-Job-First (SJF)
- **Type:** Can be Preemptive or Non-Preemptive.
- **Algorithm:** The CPU is allocated to the process with the smallest next CPU burst.
- **Optimality:** SJF is provably optimal in that it gives the minimum average waiting time for a given set of processes.
- **Problem:** It's impossible to know the length of the next CPU burst. It is usually predicted based on previous bursts.
- **Preemptive SJF** is also known as **Shortest-Remaining-Time-First (SRTF)**.

### c) Priority Scheduling
- **Type:** Can be Preemptive or Non-Preemptive.
- **Algorithm:** A priority is associated with each process, and the CPU is allocated to the process with the highest priority.
- **Problem:** Can lead to **starvation** (or indefinite blocking), where low-priority processes may never execute.
- **Solution:** **Aging**, a technique of gradually increasing the priority of processes that wait in the system for a long time.

### d) Round Robin (RR)
- **Type:** Preemptive.
- **Algorithm:** Designed for time-sharing systems. Each process gets a small unit of CPU time, called a **time quantum** (or time slice), usually 10-100 milliseconds. After this time has elapsed, the process is preempted and added to the end of the ready queue.
- **Performance:**
  - If the time quantum is very large, RR behaves like FCFS.
  - If the time quantum is very small, the overhead of context switching becomes too high.
- **Advantage:** Provides good response time and fairness.

### e) Multilevel Queue Scheduling
- The ready queue is partitioned into several separate queues.
- For example, a **foreground (interactive)** queue and a **background (batch)** queue.
- Each queue has its own scheduling algorithm (e.g., RR for foreground, FCFS for background).
- Scheduling must be done between the queues, typically a fixed-priority preemptive scheduling.

### f) Multilevel Feedback Queue Scheduling
- Similar to multilevel queue scheduling, but it allows a process to **move between queues**.
- This is the most general and complex scheduling algorithm.
- It can be configured to prevent starvation and adapt to the behavior of processes (e.g., a process that uses too much CPU time can be moved to a lower-priority queue).

---
Prev ← `02_processes_and_threads.md` | Next → `04_concurrency_and_synchronization.md` | Index: `README.md`
