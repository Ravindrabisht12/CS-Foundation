# 02. Processes and Threads

## 1. What is a Process?
A **process** is a program in execution. It is the fundamental unit of work in an operating system.

A process is more than just the program code; it also includes:
- **Program Counter:** The address of the next instruction to execute.
- **CPU Registers:** The current values of the processor's registers.
- **Process Stack:** Contains temporary data such as function parameters, return addresses, and local variables.
- **Data Section:** Contains global variables.
- **Heap:** Memory that is dynamically allocated during runtime.

### Process State
As a process executes, it changes state.
- **New:** The process is being created.
- **Ready:** The process is waiting to be assigned to a processor.
- **Running:** Instructions are being executed.
- **Waiting (or Blocked):** The process is waiting for some event to occur (such as an I/O completion).
- **Terminated:** The process has finished execution.

### Process Control Block (PCB)
Each process is represented in the OS by a **Process Control Block (PCB)**. It is a data structure that stores all the information associated with a process, including its state, program counter, CPU registers, scheduling information, memory management information, etc.

## 2. What is a Thread?
A **thread** is a basic unit of CPU utilization. It is a "lightweight process." A process can be composed of one or more threads.

Threads belonging to the same process share:
- Code section
- Data section
- Open files and other OS resources

Each thread has its own:
- **Thread ID**
- **Program Counter**
- **Register Set**
- **Stack**

### Advantages of Threads
- **Responsiveness:** In a multi-threaded application, one thread can continue to run even if another thread is blocked, keeping the application responsive.
- **Resource Sharing:** Threads share memory and resources by default, which is more efficient than sharing between processes.
- **Economy:** It is cheaper to create and switch between threads than between processes.
- **Scalability:** Can take advantage of multi-core processor architectures.

### User Threads vs. Kernel Threads
- **User Threads:** Managed by a user-level library without kernel support. They are fast to create and manage. However, if one user thread performs a blocking system call, the entire process will block.
- **Kernel Threads:** Managed directly by the operating system. They are slower to create and manage, but if one thread blocks, the kernel can schedule another thread from the same process to run.

**Multithreading Models:**
- **Many-to-One:** Maps many user threads to a single kernel thread.
- **One-to-One:** Maps each user thread to a kernel thread (used by Linux, Windows).
- **Many-to-Many:** Multiplexes many user threads to a smaller or equal number of kernel threads.

## 3. Inter-Process Communication (IPC)
IPC provides mechanisms for processes to communicate with each other and synchronize their actions.

- **Shared Memory:**
  - A region of memory is shared by cooperating processes.
  - Processes can exchange information by reading and writing data in the shared region.
  - It is very fast, as communication happens at memory speed.
  - The OS is only involved in establishing the shared memory region; after that, processes are on their own, which means they are responsible for ensuring synchronization.

- **Message Passing:**
  - Processes communicate by exchanging messages.
  - The OS provides system calls for sending and receiving messages (e.g., `send()`, `receive()`).
  - It is easier to implement and synchronize than shared memory, but it is slower due to the overhead of kernel system calls.

---
Prev ← `01_introduction_to_os.md` | Next → `03_cpu_scheduling.md` | Index: `README.md`
