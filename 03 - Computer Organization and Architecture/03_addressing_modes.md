# 07. Addressing Modes

## 1. What are Addressing Modes?
**Addressing modes** are the different ways an instruction can specify the location of its operands. An operand is the data that is being operated on. Operands can be in registers, in memory, or be a constant value embedded in the instruction itself.

The choice of addressing modes in an Instruction Set Architecture (ISA) is a major design decision that affects:
-   **Code Density:** Complex modes can perform more work with fewer instructions, making the code smaller.
-   **Hardware Complexity:** More modes require more complex control logic to decode and execute.
-   **Programming Flexibility:** A rich set of modes can make it easier for compilers to generate efficient code for various high-level language constructs (like arrays, pointers, and structs).

## 2. Common Addressing Modes
| Mode | Example | Meaning | Typical Use Case |
|----------------------|-----------------------|----------------------------------------------------------------|--------------------------------|
| **Immediate** | `ADD R1, #5` | The operand is a constant value (`5`) contained within the instruction. | Defining constants, counters. |
| **Register** | `ADD R1, R2` | The operand is in a register (`R2`). | Accessing local variables. |
| **Direct (Absolute)** | `MOV R1, [1000]` | The instruction contains the full memory address of the operand. | Accessing global/static variables. |
| **Register Indirect** | `MOV R1, [R2]` | The operand is in memory at the address held in a register (`R2`). | Pointers. |
| **Base + Displacement** | `MOV R1, 8(R2)` | The effective address is the sum of a base register (`R2`) and a constant offset (`8`). | Struct fields, stack frame access. |
| **Indexed** | `MOV R1, (R2 + R3)` | The effective address is the sum of two registers. | Array access where one reg is base, other is index. |
| **Scaled Index** | `MOV R1, (R2+R3*4)` | Same as indexed, but one register is scaled by the element size (e.g., 4 for integers). | Efficient array access. |
| **PC Relative** | `BEQ label` | The effective address is the Program Counter plus a signed offset. | Position-independent code, branches. |
| **Auto-Increment** | `MOV R1, (R2)+` | The operand is at the address in `R2`, which is then automatically incremented by the data size. | Looping through arrays. |
| **Auto-Decrement** | `MOV R1, -(R2)` | `R2` is first decremented, then used as the address for the operand. | Stack operations (push). |

## 3. Effective Address (EA) Calculation
The **Effective Address** is the final memory address of an operand after all addressing mode calculations are complete.

| Mode | EA Formula |
|----------------------|------------------------------------|
| Direct | `address_field` |
| Register Indirect | `[R]` |
| Base + Displacement | `[R_base] + sign_extend(imm)` |
| Indexed | `[R1] + [R2]` |
| Scaled Index | `[Base] + [Index] * Scale + Disp` |
| PC Relative | `PC + sign_extend(Disp)` |

## 4. Why PC-Relative Branching is Common
-   **Position-Independent Code (PIC):** The branch target is specified as an offset from the current instruction. This allows the program to be loaded anywhere in memory without needing to change the branch target addresses.
-   **Efficiency:** Most branches are to nearby locations, so a smaller offset field in the instruction is sufficient, saving bits.

## 5. Stack Addressing
The stack is typically managed using a stack pointer (SP) register with auto-increment and auto-decrement-like operations.
-   **Push:** `SP ← SP - size`; `Memory[SP] ← value` (assuming a stack that grows downwards).
-   **Pop:** `value ← Memory[SP]`; `SP ← SP + size`.

## 6. Example Problem
Given instruction: `LOAD R1, 12(R2)`
-   The contents of register `R2` are `2000`.
-   The addressing mode is **Base + Displacement**.
-   The **Effective Address** is calculated: `EA = [R2] + 12 = 2000 + 12 = 2012`.
-   The processor fetches the value from memory location `2012`. If `memory[2012]` contains the value `37`, then `R1` will be updated to `37`.

## 7. Addressing Mode Trade-offs
-   **RISC Philosophy:** Emphasizes simplicity. Typically includes only a few essential modes: Immediate, Register, and Base + Displacement. Other modes are synthesized by sequences of simple instructions. This simplifies the hardware and allows for faster, pipelined execution.
-   **CISC Philosophy:** Provides a rich set of addressing modes to match high-level language constructs directly. This can lead to more compact code but requires more complex control logic (often microcoded).

## 8. Exam Tips
-   Always distinguish between the **address** of an operand and the **value** of the operand.
-   The first step for any memory access is to calculate the **Effective Address (EA)**.
-   Pay close attention to **sign extension** when dealing with displacement or immediate fields.
-   For PC-relative addressing, remember that the PC is usually pointing to the *next* instruction (`PC+4` or `PC+instruction_size`) when the offset is calculated.

---
Prev ← `02_isa_machine_instructions.md` | Next → `04_alu_integer_arithmetic.md` | Index: `README.md`
