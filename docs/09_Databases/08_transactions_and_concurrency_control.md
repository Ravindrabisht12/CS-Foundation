# 08. Transactions and Concurrency Control

## 1. Transaction Concept
A **transaction** is a logical unit of work that consists of a sequence of operations on a database. For example, transferring funds from one bank account to another is a transaction.

### ACID Properties
To ensure data integrity, transactions must adhere to the ACID properties:

- **Atomicity:** A transaction is an "all or nothing" proposition. It must be performed in its entirety or not at all. If a transaction fails, the database is restored to its state before the transaction began.
- **Consistency:** A transaction must transform the database from one consistent state to another. All integrity constraints must be maintained.
- **Isolation:** Transactions must execute independently of one another. The intermediate state of a transaction should not be visible to other concurrent transactions. The execution of concurrent transactions should be equivalent to some serial execution of those transactions.
- **Durability:** Once a transaction has been successfully committed, its effects are permanent and must survive any subsequent system failure (e.g., power loss or crash).

### Transaction States
- **Active:** The initial state; the transaction is executing.
- **Partially Committed:** After the final statement has been executed.
- **Failed:** After the discovery that normal execution can no longer proceed.
- **Aborted:** After the transaction has been rolled back and the database restored to its state prior to the start of the transaction.
- **Committed:** After successful completion.

## 2. Concurrency Control
Concurrency control is the process of managing simultaneous operations on a database without them interfering with one another.

### Problems with Concurrency
- **Lost Update Problem:** An update made by one transaction is overwritten by another transaction.
- **Dirty Read (Temporary Update) Problem:** A transaction reads data that has been modified by another transaction that has not yet committed. If the other transaction aborts, the first transaction has read "dirty" data.
- **Incorrect Summary Problem:** One transaction is calculating an aggregate summary function on a set of data while other transactions are updating the data.
- **Unrepeatable Read Problem:** A transaction reads the same data item twice and gets different values because another transaction has modified it in between.

### Schedules
A **schedule** specifies the chronological order in which instructions of concurrent transactions are executed.
- **Serial Schedule:** A schedule where instructions of one transaction are executed completely before any instruction of the next transaction begins. Serial schedules are always consistent.
- **Serializable Schedule:** A schedule that is equivalent (in its outcome) to some serial schedule. This is the benchmark for correctness.

## 3. Concurrency Control Protocols

### a) Lock-Based Protocols
- A **lock** is a mechanism to control access to a data item.
- **Shared (S) Lock:** If a transaction has a shared lock on an item, it can read the item but not write it. Multiple transactions can hold a shared lock on the same item simultaneously.
- **Exclusive (X) Lock:** If a transaction has an exclusive lock on an item, it can both read and write the item. Only one transaction can hold an exclusive lock on an item at a time.

- **Two-Phase Locking (2PL) Protocol:** This protocol ensures serializability. It has two phases:
  1.  **Growing Phase:** A transaction can obtain locks but cannot release any locks.
  2.  **Shrinking Phase:** A transaction can release locks but cannot obtain any new locks.
- **Problem with 2PL:** It can lead to **deadlock**.
- **Strict 2PL:** A variation where a transaction holds all its exclusive locks until it commits or aborts. This avoids cascading rollbacks.
- **Rigorous 2PL:** A stricter version where all locks (shared and exclusive) are held until commit/abort.

### b) Timestamp-Based Protocols
- Each transaction is issued a unique **timestamp** when it enters the system.
- The protocol manages concurrent execution by comparing the timestamps of transactions.
- If a transaction `Tᵢ` tries to perform an operation that conflicts with an operation of an older transaction `Tⱼ`, `Tᵢ` is aborted and restarted with a new timestamp.
- This protocol is deadlock-free but can suffer from starvation.

### c) Validation-Based Protocols (Optimistic Concurrency Control)
- Assumes that conflicts are rare and allows transactions to proceed without locking.
- Transactions are executed in three phases:
  1.  **Read Phase:** The transaction reads values from the database and stores the writes it intends to perform in a temporary local storage.
  2.  **Validation Phase:** The system checks if the transaction's modifications would violate serializability.
  3.  **Write Phase:** If validation is successful, the temporary updates are made permanent. If not, the transaction is rolled back.

---
Prev ← `07_file_organization_and_indexing.md` | Index: `README.md`
