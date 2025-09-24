# 04. Arrays

## 1. What is an Array?
An array is a simple, **static** data structure that stores a collection of elements of the **same data type** in a **contiguous block of memory**.

- **Static:** The size of the array is fixed at compile time.
- **Same Data Type:** All elements must be `int`, `float`, `char`, etc.
- **Contiguous Memory:** The elements are stored one after another in memory, which allows for efficient access.

## 2. Declaration and Initialization
```c
// Declaration
int numbers[5]; // An array named 'numbers' that can hold 5 integers

// Initialization
int marks[5] = {98, 95, 88, 92, 90}; // Initialize with values
int temps[] = {25, 26, 24}; // Size is automatically determined as 3
```

## 3. Accessing Elements
Array elements are accessed using an **index**, starting from **0**.
```c
int marks[5] = {98, 95, 88, 92, 90};

int first_mark = marks[0]; // Accesses 98
marks[2] = 89; // Changes the third element from 88 to 89
```
The address of an element `arr[i]` can be calculated as:
`Address(arr[i]) = Base_Address(arr) + i * sizeof(element_type)`
This is why array access is a constant time `O(1)` operation.

## 4. Arrays and Pointers
As discussed previously, an array's name acts as a constant pointer to its first element.
```c
int arr[] = {10, 20, 30};
int *ptr = arr; // ptr now points to arr[0]

printf("%d", *(ptr + 2)); // Prints 30
```

## 5. Passing Arrays to Functions
When you pass an array to a function, you are actually passing a **pointer** to its first element. This means the function can modify the original array's contents.

```c
// The function receives a pointer to an integer
void print_array(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int my_array[] = {1, 2, 3, 4, 5};
    print_array(my_array, 5); // Pass the array and its size
    return 0;
}
```
*Note: The `sizeof` operator inside a function will not give you the size of the original array, only the size of the pointer.*

## 6. Multi-dimensional Arrays
C supports arrays with more than one dimension. A 2D array is essentially an "array of arrays".

```c
// A 2D array with 2 rows and 3 columns
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Accessing the element in the first row, second column
int element = matrix[0][1]; // Accesses 2
```
**Memory Layout:** 2D arrays are stored in **row-major order**. This means all elements of the first row are stored contiguously, followed by all elements of the second row, and so on.
For `matrix[2][3]`, the memory looks like: `[1, 2, 3, 4, 5, 6]`

## 7. Strings in C
A string in C is simply an **array of characters** that is terminated by a special **null character `\0`**.

```c
char greeting[] = "Hello"; // The compiler automatically adds '\0' at the end
// Memory: ['H', 'e', 'l', 'l', 'o', '\0']

char name[20];
scanf("%s", name); // Reads a string from input
printf("Hello, %s\n", name);
```
The `<string.h>` header provides many useful functions for string manipulation (`strcpy`, `strlen`, `strcmp`, etc.).

## 8. Advantages and Disadvantages
| Advantages | Disadvantages |
|---|---|
| **Fast Access:** `O(1)` random access due to contiguous memory. | **Fixed Size:** The size cannot be changed after declaration. |
| **Simple to Use:** Easy to declare and access. | **Inefficient Insertions/Deletions:** Inserting or deleting an element in the middle requires shifting subsequent elements, which is an `O(n)` operation. |
| **Good Cache Locality:** Contiguous memory is cache-friendly, leading to better performance. | **Potential for Wasted Space:** If you declare a large array but only use a small portion of it. |

---
Prev ← `03_recursion.md` | Next → `05_structs_unions.md` | Index: `README.md`
