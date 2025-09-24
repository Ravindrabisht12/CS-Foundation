# 09. Trees

## 1. What is a Tree?
A tree is a **non-linear, hierarchical data structure** consisting of nodes connected by edges. Unlike arrays or linked lists, which are linear, a tree represents a hierarchy.

## 2. Terminology
- **Node:** The fundamental part of a tree that stores data.
- **Edge:** The connection between two nodes.
- **Root:** The topmost node in the tree. A tree has only one root.
- **Parent:** A node that has a child node.
- **Child:** A node that has a parent node.
- **Siblings:** Nodes that share the same parent.
- **Leaf Node:** A node with no children.
- **Internal Node:** A node with at least one child.
- **Path:** A sequence of nodes and edges from one node to another.
- **Height of a Node:** The number of edges on the longest path from the node down to a leaf. The height of a leaf is 0.
- **Height of a Tree:** The height of the root node.
- **Depth of a Node:** The number of edges from the root to the node. The depth of the root is 0.
- **Degree of a Node:** The number of children a node has.

## 3. Binary Tree
A **binary tree** is a specific type of tree in which each node can have at most **two** children, referred to as the *left child* and the *right child*.

**Node Structure:**
```c
typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} Node;
```

### Types of Binary Trees
- **Full Binary Tree:** Every node has either 0 or 2 children.
- **Complete Binary Tree:** All levels are completely filled except possibly the last level, which is filled from left to right. This property is crucial for **Heaps**.
- **Perfect Binary Tree:** A full binary tree where all leaf nodes are at the same level.
- **Skewed Binary Tree:** A tree where each node has only one child (either all left or all right), resembling a linked list.

## 4. Tree Traversal Algorithms
Traversal is the process of visiting (e.g., printing) each node in the tree exactly once. The three main traversal methods are defined recursively:

### a) In-order Traversal
1.  Traverse the left subtree.
2.  Visit the root.
3.  Traverse the right subtree.
**Mnemonic:** **LNR** (Left, Node, Right)
*In a Binary Search Tree, an in-order traversal visits the nodes in ascending order.*

```c
void inorder(Node *root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
```

### b) Pre-order Traversal
1.  Visit the root.
2.  Traverse the left subtree.
3.  Traverse the right subtree.
**Mnemonic:** **NLR** (Node, Left, Right)
*Useful for creating a copy of the tree.*

```c
void preorder(Node *root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}
```

### c) Post-order Traversal
1.  Traverse the left subtree.
2.  Traverse the right subtree.
3.  Visit the root.
**Mnemonic:** **LRN** (Left, Right, Node)
*Useful for deleting nodes in a tree (you delete children before the parent).*

```c
void postorder(Node *root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}
```

### d) Level-order Traversal
This is a non-recursive traversal that visits nodes level by level, from left to right. It is implemented using a **Queue**.

## 5. Properties of Binary Trees
- Maximum number of nodes at level `l` is `2^l` (assuming root is at level 0).
- Maximum number of nodes in a binary tree of height `h` is `2^(h+1) - 1`.
- Minimum height of a binary tree with `n` nodes is `floor(log₂(n))`.

---
Prev ← `08_linked_lists.md` | Next → `10_binary_search_trees.md` | Index: `README.md`
