# 07. Queues

## 1. What is a Queue?
A queue is a linear data structure that follows the **FIFO (First-In, First-Out)** principle.

Think of a line of people waiting for a ticket. The first person to join the line is the first person to be served.

## 2. Basic Operations
A queue has two primary operations:
- **`enqueue` (or `add`)**: Adds an element to the **rear** (end) of the queue.
- **`dequeue` (or `remove`)**: Removes an element from the **front** (start) of the queue.

**Other common operations:**
- **`peek` or `front`**: Returns the front element without removing it.
- **`isEmpty`**: Checks if the queue is empty.
- **`isFull`**: Checks if the queue is full (for array-based implementations).

Like stacks, all primary queue operations (`enqueue`, `dequeue`, `peek`, `isEmpty`) are **`O(1)`** time complexity.

## 3. Implementation
### a) Array Implementation (Simple)
A simple array implementation can be inefficient. If we fix the front at index 0, `dequeue` becomes an `O(n)` operation because all remaining elements must be shifted.

### b) Circular Array Implementation
This is the standard and efficient way to implement a queue with an array. It treats the array as a circle, where the end wraps around to the beginning.
- Two pointers, `front` and `rear`, are used.
- `front` points to the first element.
- `rear` points to the position where the *next* element will be added.

```c
#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front, rear;
    int count;
} Queue;

void init(Queue *q) {
    q->front = 0;
    q->rear = 0;
    q->count = 0;
}

int isEmpty(Queue *q) {
    return q->count == 0;
}

int isFull(Queue *q) {
    return q->count == MAX_SIZE;
}

void enqueue(Queue *q, int value) {
    if (isFull(q)) return; // Handle overflow
    q->items[q->rear] = value;
    q->rear = (q->rear + 1) % MAX_SIZE; // Wrap around
    q->count++;
}

int dequeue(Queue *q) {
    if (isEmpty(q)) return -1; // Handle underflow
    int value = q->items[q->front];
    q->front = (q->front + 1) % MAX_SIZE; // Wrap around
    q->count--;
    return value;
}
```

### c) Linked List Implementation
A flexible implementation where the queue can grow dynamically.
- Two pointers, `front` and `rear`, track the head and tail of the list.

```c
typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node *front, *rear;
} Queue;

void enqueue(Queue *q, int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = NULL;
    if (q->rear == NULL) { // If queue is empty
        q->front = q->rear = newNode;
        return;
    }
    q->rear->next = newNode;
    q->rear = newNode;
}

int dequeue(Queue *q) {
    if (q->front == NULL) return -1; // Underflow
    Node* temp = q->front;
    int value = temp->data;
    q->front = q->front->next;
    if (q->front == NULL) { // If queue becomes empty
        q->rear = NULL;
    }
    free(temp);
    return value;
}
```

## 4. Types of Queues
- **Circular Queue:** The array-based implementation described above.
- **Priority Queue:** Each element has a priority associated with it. Elements with higher priority are dequeued before elements with lower priority. Often implemented using a **Heap**.
- **Double-Ended Queue (Deque):** A queue where elements can be added or removed from either the front or the rear.

## 5. Applications of Queues
- **Resource Sharing:** Managing access to a shared resource (e.g., a printer queue).
- **Scheduling:** CPU scheduling, disk scheduling.
- **Asynchronous Data Transfer:** Used in buffers for streaming data (e.g., pipes, file I/O).
- **Graph Algorithms:** **Breadth-First Search (BFS)** uses a queue to explore neighbor nodes.
- **Operating Systems:** Used for managing processes, handling interrupts.

---
Prev ← `06_stacks.md` | Next → `08_linked_lists.md` | Index: `README.md`
