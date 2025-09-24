# 05. Deadlock

A **deadlock** is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource that is held by another process in the set.

**Example:** Two processes, P1 and P2, and two resources, R1 and R2.
- P1 holds R1 and is waiting for R2.
- P2 holds R2 and is waiting for R1.
Neither process can proceed, and they will wait forever.

## 1. Conditions for Deadlock
A deadlock can arise if and only if four conditions hold simultaneously in a system:

1.  **Mutual Exclusion:** At least one resource must be held in a non-sharable mode. Only one process at a time can use the resource.
2.  **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.
3.  **No Preemption:** A resource can be released only voluntarily by the process holding it, after that process has completed its task.
4.  **Circular Wait:** A set of waiting processes `{P₀, P₁, ..., Pₙ}` must exist such that `P₀` is waiting for a resource held by `P₁`, `P₁` is waiting for a resource held by `P₂`, ..., `Pₙ₋₁` is waiting for a resource held by `Pₙ`, and `Pₙ` is waiting for a resource held by `P₀`.

## 2. Methods for Handling Deadlocks

### a) Deadlock Prevention
- Ensure that the system can never enter a deadlock state by making sure that at least one of the four necessary conditions cannot hold.
- **Break Mutual Exclusion:** Not always possible (e.g., a printer cannot be shared).
- **Break Hold and Wait:**
  - Protocol 1: A process must request and be allocated all its resources before it begins execution.
  - Protocol 2: A process can request resources only when it has none.
  - Both protocols lead to low resource utilization and potential starvation.
- **Break No Preemption:** If a process holding resources requests another resource that cannot be immediately allocated, all resources it is currently holding are preempted (released).
- **Break Circular Wait:** Impose a total ordering of all resource types and require that each process requests resources in an increasing order of enumeration.

### b) Deadlock Avoidance
- Requires the OS to be given additional information in advance concerning which resources a process will request and use during its lifetime.
- The OS uses this information to decide for each request whether or not the process should wait.
- A request is only granted if the system will remain in a **safe state**.
- **Safe State:** A state is safe if the system can allocate resources to each process (up to its maximum) in some order and still avoid a deadlock.

- **Banker's Algorithm:** The classic deadlock avoidance algorithm. When a process requests a resource, the system checks if granting the request will leave the system in a safe state. If it does, the request is granted; otherwise, the process must wait.

### c) Deadlock Detection and Recovery
- Allow the system to enter a deadlock state, detect it, and then recover.
- **Detection:**
  - Use a **Wait-For Graph**. A deadlock exists if and only if there is a cycle in the graph.
  - The system can periodically run an algorithm to check for cycles.
- **Recovery:**
  - **Process Termination:** Abort one or more processes to break the circular wait. This can be difficult as you might lose work.
  - **Resource Preemption:** Preempt some resources from some processes and give them to other processes. This is also complex and may require rolling back a process to a safe state.

### d) Deadlock Ignorance
- Many modern operating systems, including UNIX and Windows, simply **ignore the problem**.
- They assume that deadlocks will occur very rarely and that the overhead of prevention, avoidance, or detection is too high.
- It is then up to the application developer to handle any deadlocks that might occur.

---
Prev ← `04_concurrency_and_synchronization.md` | Next → `06_memory_management.md` | Index: `README.md`
