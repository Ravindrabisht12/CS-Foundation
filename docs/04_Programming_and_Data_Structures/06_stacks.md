# 06. Stacks

## 1. What is a Stack?
A stack is a linear data structure that follows a particular order in which operations are performed. The order is **LIFO (Last-In, First-Out)**.

Think of a stack of plates. You can only add a new plate to the top, and you can only remove the top plate. The last plate you put on is the first one you take off.

## 2. Basic Operations
A stack has two primary operations:
- **`push`**: Adds an element to the top of the stack.
- **`pop`**: Removes the element from the top of the stack.

**Other common operations:**
- **`peek` or `top`**: Returns the top element without removing it.
- **`isEmpty`**: Checks if the stack is empty.
- **`isFull`**: Checks if the stack is full (only for array-based implementations).

All primary stack operations (`push`, `pop`, `peek`, `isEmpty`) are **`O(1)`** time complexity, meaning they take a constant amount of time regardless of the stack's size.

## 3. Implementation
A stack can be implemented using either an array or a linked list.

### a) Array Implementation
A simple and efficient way to implement a stack if the maximum size is known beforehand.
- An array stores the elements.
- An integer variable, often called `top`, keeps track of the index of the top element.

```c
#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

void init(Stack *s) {
    s->top = -1; // -1 indicates an empty stack
}

int isEmpty(Stack *s) {
    return s->top == -1;
}

int isFull(Stack *s) {
    return s->top == MAX_SIZE - 1;
}

void push(Stack *s, int value) {
    if (isFull(s)) {
        // Handle stack overflow
        return;
    }
    s->items[++(s->top)] = value;
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        // Handle stack underflow
        return -1; // Or some error code
    }
    return s->items[(s->top)--];
}
```

### b) Linked List Implementation
A more flexible implementation where the stack can grow dynamically.
- Each element is a node in a linked list.
- The `top` of the stack is the head of the list.

```c
typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* top;
} Stack;

void push(Stack *s, int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = s->top;
    s->top = newNode;
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        // Handle underflow
        return -1;
    }
    Node* temp = s->top;
    int poppedValue = temp->data;
    s->top = s->top->next;
    free(temp);
    return poppedValue;
}
```

## 4. Applications of Stacks
- **Function Call Management:** The call stack is used to manage active function calls, storing local variables and return addresses.
- **Expression Evaluation:**
  - **Infix to Postfix/Prefix Conversion:** Stacks are used to convert standard arithmetic expressions into postfix (Reverse Polish Notation) or prefix form.
  - **Postfix Expression Evaluation:** A stack can easily evaluate a postfix expression.
- **Balancing Symbols:** Checking for balanced parentheses, brackets, and braces in code.
- **Undo/Redo Functionality:** In text editors, each action can be pushed onto a stack. An "undo" operation is simply a pop.
- **Backtracking Algorithms:** Such as in maze-solving or Depth-First Search (DFS) in a graph.

---
Prev ← `05_structs_unions.md` | Next → `07_queues.md` | Index: `README.md`
