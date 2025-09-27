# 11. Binary Heaps

## 1. What is a Binary Heap?
A binary heap is a **complete binary tree** that satisfies the **heap property**. It is most commonly used to implement **priority queues**.

- **Complete Binary Tree:** A binary tree where all levels are completely filled, except possibly the last level, which is filled from left to right. This structure allows a heap to be efficiently stored in an **array**.

- **Heap Property:**
  1.  **Min-Heap:** The value of each node is **less than or equal to** the value of its children. As a result, the **root node is the minimum** element in the heap.
  2.  **Max-Heap:** The value of each node is **greater than or equal to** the value of its children. As a result, the **root node is the maximum** element in the heap.

*Note: There is no required relationship between sibling nodes.*

## 2. Array Representation
Because a heap is a complete binary tree, it can be stored compactly in an array without needing explicit pointers. For a node at index `i`:
- **Parent:** `(i - 1) / 2`
- **Left Child:** `2 * i + 1`
- **Right Child:** `2 * i + 2`

## 3. Basic Operations
The height of a heap with `n` elements is `log₂(n)`. Operations typically involve traversing the height of the tree.

### a) Insertion (`insert`)
- **Time Complexity:** `O(log n)`
- **Algorithm:**
  1. Add the new element to the end of the array (the next available spot in the tree).
  2. **Heapify-Up (or Percolate-Up):** Compare the new element with its parent. If it violates the heap property (e.g., it's smaller than its parent in a min-heap), swap them.
  3. Repeat this process until the element reaches its correct position or becomes the root.

### b) Deletion of Root (`extractMin` / `extractMax`)
- **Time Complexity:** `O(log n)`
- **Algorithm:**
  1. The root contains the element to be extracted. Replace the root with the **last element** in the array.
  2. Remove the last element from the array.
  3. **Heapify-Down (or Percolate-Down):** The new root may violate the heap property. Compare it with its children.
  4. If it violates the property, swap it with the **smaller** (for a min-heap) or **larger** (for a max-heap) of its children.
  5. Repeat this process until the element "sinks" to its correct position.

### c) Get Min/Max (`getMin` / `getMax`)
- **Time Complexity:** `O(1)`
- Simply return the element at the root of the heap (the first element of the array).

## 4. Building a Heap (`buildHeap`)
Given an array of elements, you can turn it into a heap in-place.
- **Naive Method:** Start with an empty heap and insert each element one by one. This takes `O(n log n)` time.
- **Efficient Method (`heapify`):**
  - **Time Complexity:** `O(n)`
  - **Algorithm:**
    1. Start from the last non-leaf node in the tree. The index of this node is `(n/2) - 1`.
    2. Call `heapify-down` on this node.
    3. Move backwards through the array, calling `heapify-down` on each node until you reach the root.
    - This is more efficient because `heapify-down` on lower-level nodes does less work.

## 5. Heap Sort
A heap can be used to create an efficient sorting algorithm.
- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(1)` (in-place)
- **Algorithm (for ascending sort using a max-heap):**
  1. **Build a max-heap** from the input array. `O(n)`
  2. The largest element is now at the root. Swap the root element with the last element of the array.
  3. The largest element is now in its correct sorted position. "Remove" it from the heap by decreasing the heap's size by one.
  4. The new root may violate the heap property. Call **`heapify-down`** on the root to restore the property. `O(log n)`
  5. Repeat steps 2-4 until the heap is empty.

## 6. Applications of Heaps
- **Priority Queues:** The most common application. Heaps provide an efficient way to insert elements and always extract the one with the highest (or lowest) priority.
- **Heap Sort:** An efficient in-place sorting algorithm.
- **Graph Algorithms:** Used in algorithms like Dijkstra's shortest path and Prim's minimum spanning tree to efficiently retrieve the next vertex to process.
- **Finding the k-th largest/smallest element** in an array.

---
Prev ← `10_binary_search_trees.md` | Next → `12_graphs.md` | Index: `README.md`
