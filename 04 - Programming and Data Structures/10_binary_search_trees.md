# 10. Binary Search Trees (BST)

## 1. What is a Binary Search Tree?
A Binary Search Tree (BST) is a special type of binary tree that satisfies the **BST property**:
1.  For any given node `N`, all values in its **left subtree** are **less than** `N`'s value.
2.  For any given node `N`, all values in its **right subtree** are **greater than** `N`'s value.
3.  Both the left and right subtrees must also be binary search trees.

This property ensures that the tree remains "ordered," which allows for very efficient search operations.

*Note: In some definitions, the property might include "less than or equal to" for the left subtree. For simplicity and GATE, assume no duplicate values unless specified.*

## 2. Basic Operations
The efficiency of BST operations depends on the **height (h)** of the tree.
- In a **balanced** BST, `h ≈ log₂(n)`, and operations are very fast.
- In a **degenerate** (unbalanced) BST, `h ≈ n`, and the tree behaves like a linked list, making operations slow.

### a) Search
- **Time Complexity:** `O(h)`
- **Algorithm:**
  1. Start at the root.
  2. Compare the target value with the current node's value.
  3. If the target is smaller, go to the left child.
  4. If the target is larger, go to the right child.
  5. If they are equal, the value is found.
  6. If you reach a `NULL` node, the value is not in the tree.

```c
Node* search(Node* root, int key) {
    if (root == NULL || root->data == key) {
        return root;
    }
    if (key < root->data) {
        return search(root->left, key);
    }
    return search(root->right, key);
}
```

### b) Insertion
- **Time Complexity:** `O(h)`
- **Algorithm:**
  1. Perform a search for the value to be inserted.
  2. The search will end at a `NULL` pointer location.
  3. Insert the new node at this location.

### c) Deletion
- **Time Complexity:** `O(h)`
- This is the most complex operation. There are three cases for the node to be deleted (`N`):
  1.  **`N` has no children (is a leaf):** Simply remove `N`.
  2.  **`N` has one child:** Replace `N` with its child.
  3.  **`N` has two children:** This is the tricky case.
      - Find the **in-order successor** of `N`. This is the smallest node in `N`'s right subtree (the leftmost node of the right subtree).
      - Copy the value of the in-order successor to `N`.
      - Delete the in-order successor node (which will have at most one child, making it an easier deletion).
      - *Alternatively, you can use the in-order predecessor (largest node in the left subtree).*

## 3. In-order Traversal and BSTs
A key property of BSTs is that an **in-order traversal** visits the nodes in **ascending sorted order**. This is a direct consequence of the BST property.

## 4. Balanced vs. Unbalanced BSTs
- **Balanced BST:** The height of the left and right subtrees of any node differ by at most 1. This keeps the overall height of the tree `O(log n)`.
- **Unbalanced BST:** Can occur if data is inserted in a sorted or nearly sorted order. The tree degenerates into a linked list, and performance drops to `O(n)`.

**Self-Balancing BSTs:** To prevent the worst-case scenario, self-balancing trees automatically adjust their structure during insertions and deletions to maintain balance.
- **AVL Trees:** A strict balancing scheme.
- **Red-Black Trees:** A more relaxed balancing scheme, used in many standard library implementations (e.g., C++ `std::map`).

## 5. Time Complexity Summary
| Operation | Average Case (Balanced) | Worst Case (Unbalanced) |
|---|---|---|
| Search | `O(log n)` | `O(n)` |
| Insertion | `O(log n)` | `O(n)` |
| Deletion | `O(log n)` | `O(n)` |
| Finding Min/Max | `O(log n)` | `O(n)` |

- **Finding Minimum:** Traverse left from the root until you hit `NULL`.
- **Finding Maximum:** Traverse right from the root until you hit `NULL`.

---
Prev ← `09_trees.md` | Next → `11_binary_heaps.md` | Index: `README.md`
