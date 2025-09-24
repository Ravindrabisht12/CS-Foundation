# 02. Pointers and Memory Management

## 1. What is a Pointer?
A **pointer** is a variable that stores the **memory address** of another variable. Pointers are one of the most powerful and defining features of C. They allow for direct memory manipulation, dynamic memory allocation, and efficient handling of complex data structures.

**Declaration:**
```c
int *p; // p is a pointer to an integer
```
- The `*` indicates that `p` is a pointer.
- `int` specifies the type of data that `p` points to.

## 2. Pointer Operators
- **`&` (Address-of operator):** Returns the memory address of a variable.
- **`*` (Dereference/Indirection operator):** Accesses the value stored at the address held by the pointer.

**Example:**
```c
int var = 10;
int *p;      // Declare a pointer to an int

p = &var;    // Assign the address of 'var' to 'p'

printf("Address of var: %p\n", &var);
printf("Address stored in p: %p\n", p);
printf("Value of var: %d\n", var);
printf("Value pointed to by p: %d\n", *p); // Dereferencing p

*p = 20; // Change the value at the address p points to
printf("New value of var: %d\n", var); // Prints 20
```

## 3. Pointer Arithmetic
You can perform limited arithmetic operations on pointers. When you increment a pointer, it moves forward by the size of the data type it points to.
```c
int arr[] = {10, 20, 30};
int *p = arr; // A pointer to the first element

p++; // p now points to the second element (arr[1])
// The address in p increased by sizeof(int)
```

## 4. Pointers and Arrays
In C, an array name is essentially a constant pointer to its first element.
```c
int arr[3] = {10, 20, 30};

// These are all equivalent ways to access the first element
arr[0];
*arr;

// These are all equivalent ways to access the second element
arr[1];
*(arr + 1);
```

## 5. Pointers and Functions
Pointers are crucial for allowing functions to modify their arguments. This is known as **pass-by-reference**.

```c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y); // Pass the addresses of x and y
    // Now x is 20 and y is 10
    return 0;
}
```

## 6. Dynamic Memory Allocation
This allows you to allocate memory at runtime, which is essential for data structures that can grow or shrink, like linked lists. This memory is allocated from the **heap**.

- **`#include <stdlib.h>`** is required.

| Function | Description |
|---|---|
| **`malloc(size_t size)`** | Allocates a block of memory of `size` bytes. Returns a `void*` pointer to the block, or `NULL` if allocation fails. The memory is uninitialized. |
| **`calloc(size_t num, size_t size)`** | Allocates memory for an array of `num` elements of `size` bytes each. Returns a `void*` pointer. The memory is initialized to zero. |
| **`realloc(void *ptr, size_t new_size)`** | Resizes a previously allocated memory block. |
| **`free(void *ptr)`** | Deallocates a block of memory, returning it to the heap. |

**Example using `malloc`:**
```c
int *arr;
int n = 5;

// Allocate memory for 5 integers
arr = (int*) malloc(n * sizeof(int));

if (arr == NULL) {
    // Handle allocation failure
    return 1;
}

// Use the allocated memory
for (int i = 0; i < n; i++) {
    arr[i] = i + 1;
}

// IMPORTANT: Free the memory when done
free(arr);
```
**Memory Leak:** Failing to `free` dynamically allocated memory results in a memory leak, where the program holds onto memory it no longer needs.

## 7. Common Pointer Types
- **`NULL` Pointer:** A pointer that does not point to any valid memory location. It's good practice to initialize pointers to `NULL`.
- **`void` Pointer:** A generic pointer that can hold the address of any data type. It must be cast to a specific type before being dereferenced.
- **Dangling Pointer:** A pointer that points to a memory location that has been deallocated (`free`d). Accessing a dangling pointer leads to undefined behavior.

---
Prev ← `01_c_programming_basics.md` | Next → `03_recursion.md` | Index: `README.md`
