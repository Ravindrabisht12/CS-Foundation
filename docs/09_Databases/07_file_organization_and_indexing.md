# 07. File Organization and Indexing

File organization refers to the way data is physically stored on a storage device (like a disk). Indexing provides mechanisms to speed up data retrieval.

## 1. File Organization

- **Heap File Organization (Unordered):**
  - Records are placed in the file in the order they are inserted.
  - **Insertion:** Very fast. A new record is added at the end of the file.
  - **Search:** Very slow. Requires a linear scan of the entire file.
  - **Deletion:** A record is marked for deletion. The space is reclaimed by a reorganizing process.

- **Sequential File Organization (Ordered):**
  - Records are stored in sorted order based on the value of a **search key**.
  - **Search:** Fast. Binary search can be used to find a record quickly.
  - **Insertion/Deletion:** Slow. Inserting or deleting a record may require moving a large number of other records to maintain the sorted order.

- **Hash File Organization:**
  - A **hash function** is applied to some attribute of a record (the hash key) to determine the block address where the record should be stored.
  - **Insertion/Search/Deletion:** Very fast on average, as it takes constant time to find the block.
  - **Disadvantages:** Prone to **collisions** (when the hash function generates the same address for different keys) and **overflow** (when a block is full).

## 2. Indexing
An index is a data structure that allows for the efficient retrieval of records from a database file. It is an ordered list of values that contains pointers to the location of the records.

### a) Ordered Indices
- **Primary Index:**
  - An index whose search key specifies the **sequential order** of the file.
  - The search key is usually the primary key of the relation.
  - **Dense Index:** An index entry appears for **every** search-key value in the file.
  - **Sparse Index:** An index entry appears for only **some** of the search-key values. It points to the first record of each block. This is only possible if the file is sorted on the search key.

- **Secondary Index:**
  - An index whose search key specifies an order **different** from the sequential order of the file.
  - The search key is often a non-primary key attribute.
  - A secondary index must be a **dense index**.

### b) B-Tree and B+ Tree
These are tree-based data structures that are balanced to keep the path from the root to a leaf node short, even for very large files. They are the most widely used indexing structures in database systems.

- **B-Tree:**
  - A self-balancing search tree.
  - Data pointers (pointers to the actual data records) are stored in **all nodes** of the tree (internal and leaf nodes).
  - This can make traversal faster in some cases, but the internal nodes are larger.

- **B+ Tree:**
  - A variation of the B-Tree.
  - **Data pointers are stored only in the leaf nodes.**
  - Internal nodes store only search-key values and act as a roadmap to the correct leaf node.
  - **All leaf nodes are linked together** in a sequential list. This makes range queries (e.g., "find all students with GPA between 3.0 and 3.5") very efficient.
  - Because internal nodes are smaller (no data pointers), they have a higher **fanout** (more children per node), which means the tree is shorter and wider, reducing the number of I/O operations required to find a record.

**Why B+ Trees are preferred for database indexing:**
1.  The linked list of leaf nodes allows for efficient sequential processing and range queries.
2.  The higher fanout of internal nodes reduces the height of the tree, minimizing disk I/Os.

---
Prev ← `06_normalization.md` | Next → `08_transactions_and_concurrency_control.md` | Index: `README.md`
