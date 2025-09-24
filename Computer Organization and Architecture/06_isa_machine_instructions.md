# 06. Instruction Set Architecture (ISA) & Machine Instructions

## 1. What is an ISA?
The **Instruction Set Architecture (ISA)** is the interface between the hardware and the software. It is the part of the processor that is visible to the programmer or compiler writer. The ISA defines the set of all commands (instructions) that a processor can understand and execute.

Think of it as the "user manual" for the CPU. It specifies:
-   **The set of instructions:** What operations the CPU can perform.
-   **Data types:** The size and format of data (e.g., 8-bit byte, 32-bit integer, 64-bit float).
-   **Registers:** The number and type of programmable registers available.
-   **Instruction formats:** How instructions are encoded into binary.
-   **Addressing modes:** How the location of an operand is specified.
-   **Memory model:** How memory is organized and accessed.

Any two processors that implement the same ISA can run the same machine code, even if their underlying hardware (microarchitecture) is completely different.

## 2. Machine Instructions
Machine instructions are the fundamental commands that make up a computer program. They are encoded in binary and are categorized by their function.

| Category | Purpose | Examples |
|--------------------|------------------------------------------------|-----------------------------|
| **Data Movement** | Move data between registers and memory. | `LOAD`, `STORE`, `MOVE` |
| **Arithmetic/Logic** | Perform calculations and logical operations. | `ADD`, `SUB`, `AND`, `OR`, `SHIFT` |
| **Control Flow** | Change the sequence of instruction execution. | `BRANCH`, `JUMP`, `CALL`, `RETURN` |
| **System** | Manage the system or interact with the OS. | `TRAP`, `INT` (Interrupt) |

## 3. Instruction Format Fields
An instruction is a sequence of bits divided into fields.
| Field | Purpose |
|-------------|----------------------------------------------------------------|
| **Opcode** | Specifies the operation to be performed (e.g., ADD, LOAD). |
| **Operands** | Specify the source and destination of the data. These can be registers, memory locations, or immediate values. |
| **Immediate** | A constant value embedded directly in the instruction. |
| **Address** | A memory address or an offset for calculating an address. |

**Example (MIPS R-type format):**
`opcode (6) | rs (5) | rt (5) | rd (5) | shamt (5) | funct (6)`
-   `opcode`: Defines the instruction class.
-   `rs`, `rt`: Source registers.
-   `rd`: Destination register.
-   `shamt`: Shift amount.
-   `funct`: Specifies the exact operation for this class.

## 4. RISC vs. CISC Philosophies
| Aspect | RISC (Reduced Instruction Set Computer) | CISC (Complex Instruction Set Computer) |
|----------------------|----------------------------------------------------------------|-----------------------------------------------------------------|
| **Philosophy** | Keep the instruction set small and simple. | Provide a large set of powerful, complex instructions. |
| **Instruction Length** | Fixed (e.g., 32 bits). | Variable. |
| **Addressing Modes** | Few, simple modes. | Many, complex modes. |
| **Implementation** | Usually hardwired control. Easier to pipeline. | Often uses microcode. Harder to pipeline effectively. |
| **CPI (Cycles/Instr)** | Aims for 1 in an ideal pipeline. | Varies widely; complex instructions take many cycles. |
| **Examples** | MIPS, ARM, RISC-V | Intel x86, VAX |

## 5. Endianness
Endianness refers to the order in which bytes of a multi-byte word are stored in memory.
-   **Big-Endian:** The most significant byte is stored at the lowest memory address. (e.g., `0x12345678` stored as `12 34 56 78`).
-   **Little-Endian:** The least significant byte is stored at the lowest memory address. (e.g., `0x12345678` stored as `78 56 34 12`).

## 6. Condition Codes / Flags
Many ISAs use a special status register with flags that are set by the ALU after an operation.
-   **Z (Zero Flag):** Set if the result is zero.
-   **N (Negative Flag):** Set if the result is negative.
-   **C (Carry Flag):** Set if an unsigned operation resulted in a carry out.
-   **V (Overflow Flag):** Set if a signed operation resulted in an overflow.
These flags are then used by conditional branch instructions. Some RISC ISAs (like MIPS) avoid a dedicated flag register and use "compare and branch" instructions instead.

## 7. Register Types
-   **GPR (General-Purpose Registers):** Used for general data manipulation.
-   **Special-Purpose Registers:**
    -   `PC` (Program Counter): Holds the address of the next instruction.
    -   `SP` (Stack Pointer): Points to the top of the stack.
    -   `IR` (Instruction Register): Holds the current instruction being executed.
    -   `SR` or `PSW` (Status Register / Program Status Word): Contains flags.
-   **Floating-Point Registers:** A separate register file for floating-point operations.

## 8. Immediate Encoding Limits
The size of the immediate field in an instruction limits the range of constants that can be used. For example, a 16-bit signed immediate field has a range of -32,768 to +32,767. Larger constants must be loaded from memory or constructed using multiple instructions (e.g., `LUI` - Load Upper Immediate).

## 9. Example Instruction Execution
-   `ADD R1, R2, R3`: `R1 ← R2 + R3`. The ALU adds the contents of R2 and R3, and the result is written to R1.
-   `LW R4, 8(R5)`: `R4 ← Memory[R5 + 8]`. The ALU calculates the effective address by adding 8 to the contents of R5. The value at this memory address is loaded into R4.
-   `BEQ R1, R2, label`: `if (R1 == R2) then PC ← label`. The ALU subtracts R2 from R1. If the Zero flag is set, the PC is updated to the branch target address.

## 10. ISA Design Trade-offs
-   **More registers** → Fewer memory accesses, but more bits needed to specify registers.
-   **Fewer addressing modes** → Simpler control logic and faster decoding.
-   **Fixed-length instructions** → Simpler fetch and decode logic, but can waste space.
-   **Variable-length instructions** → More compact code, but more complex fetch and decode.

## 11. Typical GATE Problems
-   **Calculate opcode bits:** If an ISA has 100 instructions, it needs at least `⌈log₂(100)⌉ = 7` bits for the opcode.
-   **Field partitioning:** A 32-bit instruction with 64 registers (6 bits per register specifier) and a 16-bit immediate field leaves `32 - 6 - 6 - 16 = 4` bits for the opcode.

## 12. Micro-operations Sequence Example (Load)
1.  `MAR ← PC` (Send PC to memory address register)
2.  `MDR ← Memory[MAR]`; `PC ← PC + 4` (Read instruction, increment PC)
3.  `IR ← MDR` (Load instruction into IR)
4.  Decode instruction in IR.
5.  `ALU_out ← Reg[rs] + sign_extend(imm)` (Calculate effective address)
6.  `MAR ← ALU_out`
7.  `MDR ← Memory[MAR]` (Read data from memory)
8.  `Reg[rt] ← MDR` (Write data to register)

## 13. Exam Tips
-   Always calculate the number of bits required for a field using `⌈log₂(N)⌉`.
-   Pay close attention to sign extension for immediate values.
-   Distinguish between the steps of effective address calculation and the actual memory access.

---
Prev ← `05_cpu_org_performance.md` | Next → `07_addressing_modes.md`
