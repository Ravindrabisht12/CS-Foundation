# 08. Linked Lists

## 1. What is a Linked List?
A linked list is a **linear, dynamic data structure** where elements are not stored in contiguous memory locations. Instead, each element (called a **node**) contains the data and a **pointer** to the next node in the sequence.

This structure allows for efficient insertions and deletions without the need to shift elements.

## 2. Structure of a Node
A node is the basic building block of a linked list. It is typically a `struct` with at least two members:
1.  **`data`**: The value stored in the node.
2.  **`next`**: A pointer to the next node in the list.

```c
typedef struct Node {
    int data;
    struct Node *next;
} Node;
```
The list is accessed through a pointer to the first node, commonly called the **`head`**. The last node's `next` pointer is `NULL`, indicating the end of the list.

## 3. Types of Linked Lists
### a) Singly Linked List
- Each node points only to the next node in the list.
- Traversal is only possible in one direction (forward).

### b) Doubly Linked List
- Each node has two pointers: one to the **next** node and one to the **previous** node.
- Allows for traversal in both forward and backward directions.
- Deletion can be more efficient as you don't need to keep track of the previous node during traversal.
```c
typedef struct DNode {
    int data;
    struct DNode *next;
    struct DNode *prev;
} DNode;
```

### c) Circular Linked List
- The `next` pointer of the last node points back to the `head` node instead of being `NULL`.
- The list forms a circle.
- Useful for applications where you need to cycle through the elements continuously (e.g., round-robin scheduling).

## 4. Basic Operations
(Examples for a Singly Linked List)

- **Traversal:** Iterating through the list from the head to the end. `O(n)`
  ```c
  void traverse(Node *head) {
      Node *current = head;
      while (current != NULL) {
          printf("%d -> ", current->data);
          current = current->next;
      }
      printf("NULL\n");
  }
  ```
- **Insertion:**
  - **At the beginning:** `O(1)`
    ```c
    Node* insertAtBeginning(Node *head, int data) {
        Node *newNode = (Node*)malloc(sizeof(Node));
        newNode->data = data;
        newNode->next = head;
        return newNode; // The new node is now the head
    }
    ```
  - **At the end:** `O(n)` (unless you keep a `tail` pointer, then `O(1)`)
  - **At a specific position:** `O(n)`
- **Deletion:**
  - **From the beginning:** `O(1)`
  - **From the end:** `O(n)`
  - **From a specific position:** `O(n)`
- **Search:** `O(n)`

## 5. Arrays vs. Linked Lists
| Feature | Array | Linked List |
|---|---|---|
| **Size** | Fixed. | Dynamic. Can grow and shrink at runtime. |
| **Memory Allocation** | Static (stack) or contiguous block on the heap. | Dynamic (heap), non-contiguous. |
| **Random Access** | `O(1)` - `arr[i]` is a direct calculation. | `O(n)` - Must traverse from the head to get to the i-th element. |
| **Insertion/Deletion** | Inefficient (`O(n)`) as it requires shifting elements. | Efficient (`O(1)`) if the node to be modified is known. |
| **Memory Overhead** | None. | Extra memory is required for the `next` (and `prev`) pointers. |
| **Cache Performance** | Good, due to contiguous memory (good spatial locality). | Poor, as nodes can be scattered in memory. |

## 6. Applications of Linked Lists
- **Implementing other data structures:** Stacks, queues, and hash tables (for collision handling) can be implemented using linked lists.
- **Dynamic memory management:** Maintaining lists of free memory blocks.
- **Music/Photo Playlists:** The "next" and "previous" functionality is a natural fit for a doubly linked list.
- **Undo functionality:** A linked list can store a history of states.

---
Prev ← `07_queues.md` | Next → `09_trees.md` | Index: `README.md`
