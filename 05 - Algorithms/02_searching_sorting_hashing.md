# 02. Searching, Sorting, and Hashing

## 1. Searching Algorithms
Searching is the process of finding an item with specified properties from a collection of items.

### a) Linear Search
- **Algorithm:** Sequentially checks each element of the list until a match is found or the whole list has been searched.
- **Data Structure:** Works on any linear data structure (e.g., unsorted array).
- **Time Complexity:**
  - **Worst Case:** `O(n)` (element is at the end or not present).
  - **Best Case:** `O(1)` (element is at the beginning).
  - **Average Case:** `O(n)`.

### b) Binary Search
- **Prerequisite:** The data must be **sorted**.
- **Algorithm:** Repeatedly divides the search interval in half. Compares the target value to the middle element; if they are not equal, the half in which the target cannot lie is eliminated.
- **Time Complexity:** `O(log n)` - very efficient.

## 2. Sorting Algorithms
Sorting is the process of arranging items in a specific order (e.g., ascending or descending).

### Comparison-Based Sorting
These algorithms compare elements to decide the order. The theoretical lower bound for comparison-based sorting is `O(n log n)`.

| Algorithm | Time Complexity (Avg/Worst) | Space Complexity | Stable? | Notes |
|---|---|---|---|---|
| **Bubble Sort** | `O(n²)` / `O(n²)` | `O(1)` | Yes | Simple but highly inefficient. Swaps adjacent elements if they are in the wrong order. |
| **Insertion Sort** | `O(n²)` / `O(n²)` | `O(1)` | Yes | Efficient for small or nearly sorted datasets. Builds the final sorted array one item at a time. |
| **Selection Sort** | `O(n²)` / `O(n²)` | `O(1)` | No | Repeatedly finds the minimum element from the unsorted part and puts it at the beginning. |
| **Merge Sort** | `O(n log n)` / `O(n log n)` | `O(n)` | Yes | A **Divide and Conquer** algorithm. Stable and reliable performance, but requires extra space. |
| **Quick Sort** | `O(n log n)` / `O(n²)` | `O(log n)` | No | A **Divide and Conquer** algorithm. Very fast on average, but the worst case occurs with sorted/reverse-sorted data. The choice of pivot is crucial. |
| **Heap Sort** | `O(n log n)` / `O(n log n)` | `O(1)` | No | Uses a heap data structure. Good worst-case performance and in-place. |

- **Stability:** A sorting algorithm is stable if it preserves the relative order of equal-valued elements.

### Non-Comparison-Based Sorting (Linear Time Sorting)
These algorithms work by making assumptions about the data (e.g., they are integers within a specific range).

| Algorithm | Time Complexity | Notes |
|---|---|---|
| **Counting Sort** | `O(n + k)` | `k` is the range of the input. Works by counting the number of objects having distinct key values. Not in-place. |
| **Radix Sort** | `O(d * (n + b))` | `d` is the number of digits, `b` is the base. Sorts integers by processing individual digits. |
| **Bucket Sort** | `O(n + k)` | `k` is the number of buckets. Distributes elements into a number of buckets, then sorts each bucket individually. |

## 3. Hashing
Hashing is a technique used to map keys of any arbitrary size to a fixed-size table (a **hash table** or **hash map**). This is done using a **hash function**.

- **Hash Function:** A function that computes an index (a "hash code") from a key, where the value corresponding to the key can be stored. A good hash function distributes keys uniformly across the table.
- **Hash Table:** A data structure that implements an associative array, mapping keys to values.

**Time Complexity:**
- **Average Case (Search, Insert, Delete):** `O(1)` - extremely fast.
- **Worst Case:** `O(n)` - occurs when all keys map to the same index.

### Collision Handling
A **collision** occurs when two different keys hash to the same index.

- **a) Separate Chaining (Open Hashing):**
  - Each cell of the hash table points to a linked list of records that have the same hash index.
  - This is a very common and effective technique.

- **b) Open Addressing (Closed Hashing):**
  - All elements are stored in the hash table itself. When a collision occurs, it "probes" for the next open slot in the table.
  - **Linear Probing:** Look sequentially for the next empty slot. Suffers from "primary clustering."
  - **Quadratic Probing:** Look for slots at `i²` intervals (`h+1`, `h+4`, `h+9`, ...).
  - **Double Hashing:** Use a second hash function to determine the step size for probing. This is one of the most effective methods.

---
Prev ← `01_analysis_of_algorithms.md` | Next → `03_algorithm_design_techniques.md` | Index: `README.md`
