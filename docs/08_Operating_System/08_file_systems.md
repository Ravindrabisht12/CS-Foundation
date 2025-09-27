# 08. File Systems

A file system provides the mechanism for online storage and access to both data and programs. It resides on secondary storage (disks).

## 1. File Concept
- A **file** is a named collection of related information that is recorded on secondary storage.
- From a user's perspective, a file is the smallest allotment of logical secondary storage.

### File Attributes
- **Name:** The symbolic file name.
- **Identifier:** A unique tag (number) that identifies the file within the file system.
- **Type:** For systems that support different file types.
- **Location:** A pointer to a device and to the location of the file on that device.
- **Size:** The current size of the file.
- **Protection:** Controls who can do reading, writing, executing.
- **Time, date, and user identification:** Information for creation, last modification, and last use.

## 2. Directory Structure
A directory is a collection of nodes containing information about all files.

- **Single-Level Directory:** All files are in the same directory. Simple but leads to naming conflicts.
- **Two-Level Directory:** Each user has their own user file directory (UFD).
- **Tree-Structured Directory:** The most common structure. Directories can contain files and other subdirectories, forming a tree.
- **Acyclic-Graph Directory:** Allows directories to share subdirectories and files. This is achieved using **links** or **shortcuts**.
- **General Graph Directory:** A more flexible structure that allows cycles, but it is more complex to manage (e.g., ensuring that garbage collection is possible).

## 3. File Allocation Methods
This describes how disk blocks are allocated for files.

### a) Contiguous Allocation
- Each file occupies a set of **contiguous** blocks on the disk.
- **Advantages:** Simple, and offers excellent read performance (minimal disk head movement).
- **Disadvantages:** Suffers from **external fragmentation**. It can be difficult to find space for a new file or for a file to grow.

### b) Linked Allocation
- Each file is a linked list of disk blocks; the disk blocks may be scattered anywhere on the disk.
- The directory contains a pointer to the first and last blocks of the file. Each block contains a pointer to the next block.
- **Advantages:** Solves the external fragmentation problem. Files can grow easily.
- **Disadvantages:**
  - No random access; sequential access is required to find the i-th block.
  - Pointers require space in each block.
  - Low reliability (if one pointer is lost, the rest of the file is lost).
- **Variation:** **File Allocation Table (FAT)**, used by MS-DOS. A section of the disk at the beginning of each partition is set aside to contain the table, which has one entry for each disk block and is indexed by block number.

### c) Indexed Allocation
- Brings all the pointers for a file together into one location: the **index block**.
- Each file has its own index block, which is an array of disk-block addresses. The i-th entry in the index block points to the i-th block of the file.
- **Advantages:** Supports direct access, without suffering from external fragmentation.
- **Disadvantages:**
  - Wasted space for the index block if the file is small.
  - For large files, a single index block may not be enough. This can be solved with schemes like a **linked scheme** (linking multiple index blocks) or a **multilevel index** (an index block that points to other index blocks).

## 4. Disk Scheduling
The OS is responsible for using hardware efficiently. For the disk drive, this means having a fast access time and disk bandwidth. Access time has two major components:
- **Seek Time:** The time for the disk arm to move the heads to the cylinder containing the desired sector.
- **Rotational Latency:** The additional time waiting for the disk to rotate the desired sector to the disk head.

Disk scheduling algorithms aim to minimize seek time.

### Disk Scheduling Algorithms
- **FCFS (First-Come, First-Served):** Simple but generally does not provide the best service.
- **SSTF (Shortest Seek Time First):** Selects the request with the minimum seek time from the current head position. It's a form of SJF scheduling and may cause starvation.
- **SCAN (Elevator Algorithm):** The disk arm starts at one end of the disk and moves toward the other end, servicing requests as it goes. When it gets to the other end, the head movement is reversed.
- **C-SCAN (Circular SCAN):** Provides a more uniform wait time. The head moves from one end to the other, servicing requests. When it reaches the end, it immediately returns to the beginning of the disk without servicing any requests on the return trip.
- **LOOK and C-LOOK:** Versions of SCAN and C-SCAN where the arm only goes as far as the last request in each direction, instead of all the way to the end of the disk.

---
Prev ← `07_virtual_memory.md` | Index: `README.md`
