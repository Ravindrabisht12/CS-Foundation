# 05. Structs and Unions

## 1. What is a Struct?
A **structure (`struct`)** is a user-defined data type in C that allows you to group together variables of different data types under a single name. It is used to represent a record or a collection of related data items.

**Example:** To represent a `Student`, you might want to store their name (a string), roll number (an integer), and marks (a float).

**Defining a Struct:**
```c
struct Student {
    char name[50];
    int roll_number;
    float marks;
};
```

**Declaring a Struct Variable:**
```c
struct Student s1; // Declares a variable 's1' of type 'struct Student'
```

## 2. Accessing Struct Members
The members of a struct variable are accessed using the **dot (`.`) operator**.
```c
strcpy(s1.name, "Alice");
s1.roll_number = 101;
s1.marks = 88.5;
```

## 3. Pointers to Structs
Pointers to structs are very common, especially in data structures like linked lists and trees.

```c
struct Student s1 = {"Bob", 102, 91.0};
struct Student *ptr; // Declare a pointer to a struct Student

ptr = &s1; // Assign the address of s1 to the pointer
```
To access members using a pointer, you can use the dereference operator `(*)` and the dot operator `(.)`, but this is clumsy: `(*ptr).roll_number`.

C provides a more elegant syntax: the **arrow (`->`) operator**.
```c
printf("Roll Number: %d\n", ptr->roll_number); // Accesses roll_number via pointer
printf("Marks: %.2f\n", ptr->marks);
```

## 4. `typedef` for Cleaner Code
Using `typedef` allows you to create an alias (a new name) for a data type. It's commonly used with structs to avoid repeatedly typing `struct Student`.

```c
typedef struct {
    char name[50];
    int roll_number;
    float marks;
} Student; // 'Student' is now an alias for the struct type

// Now you can declare variables more cleanly
Student s2;
s2.roll_number = 103;
```

## 5. What is a Union?
A **union** is similar to a struct in that it groups different data types. However, a union allocates only enough memory to hold its **largest member**. All members of a union share the **same memory location**.

This means you can only use one member of the union at a time. It's a way to use the same memory space for different types of data.

**Defining a Union:**
```c
union Data {
    int i;
    float f;
    char str[20];
};
```
The size of this `union Data` will be 20 bytes (the size of `char str[20]`, its largest member).

**Using a Union:**
```c
union Data data;

data.i = 10;
printf("data.i: %d\n", data.i);

data.f = 220.5;
printf("data.f: %f\n", data.f);

// At this point, data.i is corrupted because the memory was overwritten by the float
printf("data.i after float assignment: %d\n", data.i); // Prints garbage
```

## 6. Struct vs. Union
| Feature | `struct` | `union` |
|---|---|---|
| **Memory** | Total memory is the sum of the sizes of all members. | Memory allocated is the size of the largest member. |
| **Member Storage** | Each member has its own unique memory location. | All members share the same memory location. |
| **Usage** | Can store and access all members simultaneously. | Can only store and access one member at a time. |
| **Purpose** | To group related but distinct data items. | To use a single memory space for multiple data types (memory saving). |

## 7. Self-Referential Structures
A struct can contain a pointer to a struct of its own type. This is the fundamental concept behind dynamic data structures like linked lists and trees.

```c
typedef struct Node {
    int data;
    struct Node *next; // A pointer to the next node in the list
} Node;
```
Here, each `Node` contains some data and a pointer that can link it to another `Node`, forming a chain.

---
Prev ← `04_arrays.md` | Next → `06_stacks.md` | Index: `README.md`
