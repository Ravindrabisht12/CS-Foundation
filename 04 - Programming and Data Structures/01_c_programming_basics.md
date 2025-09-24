# 01. C Programming Fundamentals

## 1. Basic Structure of a C Program
```c
#include <stdio.h> // Preprocessor directive to include standard I/O functions

// main is the entry point of every C program
int main() {
    // Your code goes here
    printf("Hello, World!\n"); // A statement to print text
    return 0; // Return 0 to indicate successful execution
}
```

## 2. Variables and Data Types
A variable is a name for a storage area. In C, variables must be declared before they are used.

| Data Type | Description | Size (Typical) | Example |
|---|---|---|---|
| `int` | Integers | 4 bytes | `int age = 25;` |
| `float` | Single-precision floating-point | 4 bytes | `float price = 19.99;` |
| `double` | Double-precision floating-point | 8 bytes | `double pi = 3.1415926535;` |
| `char` | Single character | 1 byte | `char grade = 'A';` |
| `_Bool` | Boolean value (requires `<stdbool.h>`) | 1 byte | `bool is_valid = true;` |

**Qualifiers:**
- `short`, `long`: Modify integer sizes.
- `signed`, `unsigned`: Determine if a variable can hold negative values.
- `const`: Makes a variable read-only.

## 3. Operators
| Category | Operators | Example |
|---|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` (modulo) | `int c = a + b;` |
| **Relational** | `==`, `!=`, `>`, `<`, `>=`, `<=` | `if (a > b)` |
| **Logical** | `&&` (AND), `||` (OR), `!` (NOT) | `if (x > 0 && y > 0)` |
| **Bitwise** | `&`, `|`, `^` (XOR), `~` (NOT), `<<`, `>>` | `int flags = 0b1010;` |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=`, `%=` | `x += 5;` (same as `x = x + 5;`) |
| **Increment/Decrement**| `++`, `--` | `count++;` |
| **Ternary** | `? :` | `int max = (a > b) ? a : b;` |

## 4. Control Flow
- **`if-else` Statement:**
  ```c
  if (score >= 90) {
      printf("Grade A\n");
  } else if (score >= 80) {
      printf("Grade B\n");
  } else {
      printf("Grade C\n");
  }
  ```
- **`switch` Statement:** For multi-way branching based on an integer value.
  ```c
  switch (day) {
      case 1: printf("Monday"); break;
      case 7: printf("Sunday"); break;
      default: printf("Invalid day");
  }
  ```
- **`for` Loop:**
  ```c
  for (int i = 0; i < 10; i++) {
      printf("%d ", i);
  }
  ```
- **`while` Loop:**
  ```c
  int i = 0;
  while (i < 10) {
      printf("%d ", i);
      i++;
  }
  ```
- **`do-while` Loop:** Executes at least once.
  ```c
  do {
      // code
  } while (condition);
  ```
- **`break` and `continue`:**
  - `break`: Exits a loop or `switch` statement.
  - `continue`: Skips the current iteration and proceeds to the next.

## 5. Functions
A function is a block of code that performs a specific task.
```c
// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3); // Function call
    printf("Result: %d\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
```
- **Pass by Value:** By default, C passes arguments by value. The function receives a *copy* of the argument, so modifying it inside the function does not affect the original variable.
- **Pass by Reference (emulated):** To modify the original variable, you must pass a *pointer* to it.

## 6. Input/Output
- **`printf()`:** Formatted output.
  - `%d` for int, `%f` for float/double, `%c` for char, `%s` for string.
- **`scanf()`:** Formatted input.
  ```c
  int age;
  printf("Enter your age: ");
  scanf("%d", &age); // Note the '&' to pass the address of the variable
  ```

## 7. Preprocessor Directives
- `#include`: Includes a header file.
- `#define`: Defines a macro or constant.
  ```c
  #define PI 3.14159
  #define MAX(a, b) ((a) > (b) ? (a) : (b))
  ```
- `#ifdef`, `#ifndef`, `#endif`: Conditional compilation.

---
Next → `02_pointers_and_memory.md` | Index: `README.md`
