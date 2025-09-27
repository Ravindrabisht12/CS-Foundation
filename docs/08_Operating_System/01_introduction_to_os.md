# 01. Introduction to Operating Systems

## 1. What is an Operating System (OS)?
An Operating System is **system software** that acts as an intermediary between the computer user and the computer hardware. It manages the computer's hardware and provides a platform for application programs to run.

**Two main goals of an OS:**
1.  **Convenience:** Make the computer system easier to use. It hides the complex details of the hardware from the user and application programs.
2.  **Efficiency:** Manage the hardware resources (CPU, memory, I/O devices) efficiently to ensure good performance.

## 2. Functions of an Operating System
- **Process Management:** Manages the creation, deletion, and execution of processes. It handles scheduling and synchronization.
- **Memory Management:** Allocates and deallocates memory space to programs as needed. It keeps track of which parts of memory are currently being used and by whom.
- **File System Management:** Organizes files and directories on secondary storage. It controls access to files and manages storage space.
- **I/O Device Management:** Manages communication with I/O devices like disks, printers, and keyboards through their respective device drivers.
- **Security and Protection:** Prevents unauthorized access to programs and data. It ensures that different processes running concurrently do not interfere with each other.
- **Networking:** Provides the ability for computers to communicate with each other over a network.

## 3. User and Kernel Mode
To ensure protection, the OS distinguishes between two modes of operation:
- **User Mode:** The mode in which application programs run. In this mode, direct access to hardware and critical instructions is restricted.
- **Kernel Mode (or Supervisor Mode):** The mode in which the OS kernel runs. In this mode, the code has complete access to all hardware and can execute any instruction.

The transition from user mode to kernel mode occurs when an application needs to perform a privileged operation, which it does by making a **system call**.

## 4. System Calls
A system call is the programmatic way in which a computer program requests a service from the kernel of the operating system. It's the interface between a process and the OS.

**Examples of System Calls:**
- `fork()`: To create a new process.
- `read()`, `write()`: To read from or write to a file.
- `open()`, `close()`: To open or close a file.
- `malloc()`: To allocate memory.

## 5. Types of Operating Systems
- **Batch OS:** Jobs with similar needs are batched together and run as a group. No direct user interaction.
- **Multiprogramming OS:** Keeps several jobs in main memory at once. When one job has to wait for I/O, the OS switches to another job, increasing CPU utilization.
- **Time-Sharing (Multitasking) OS:** A logical extension of multiprogramming where the CPU switches between jobs so frequently that users can interact with each job while it is running.
- **Real-Time OS (RTOS):** Used in systems where time constraints are critical, such as in industrial control systems or robotics. It must process information and produce a response within a specified time.
- **Distributed OS:** Manages a group of independent computers and makes them appear to be a single computer.
- **Network OS:** Provides file sharing, printer sharing, and other services across a network of computers.

---
Next → `02_processes_and_threads.md` | Index: `README.md`
