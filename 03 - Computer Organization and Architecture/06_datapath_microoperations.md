# 10. Datapath & Micro-operations

## 1. What is a Datapath?
The **datapath** is the collection of hardware elements within a CPU that perform data processing operations. It is the "brawn" of the processor, containing the functional units required to execute instructions. Think of it as the network of roads and factories through which data travels and is transformed.

Key components of a datapath include:
-   **ALU (Arithmetic Logic Unit):** Performs calculations like addition, subtraction, AND, OR, etc.
-   **Registers:** A set of high-speed storage locations for holding data temporarily (e.g., General Purpose Registers (GPRs), Program Counter (PC), Instruction Register (IR)).
-   **Multiplexers (Muxes):** Used to select one of several inputs to be routed to a destination.
-   **Buses:** The pathways that connect the various components and allow data to be transferred between them.

The datapath itself does not know *what* to do; it only provides the capability. The **Control Unit** tells it what to do.

## 2. What are Micro-operations?
A **micro-operation** is the most elementary operation that can be performed on the data stored in registers. Each step of an instruction's execution cycle is composed of a sequence of micro-operations.

**Categories of Micro-operations:**
-   **Register Transfer:** Move data between registers (e.g., `R2 ← R1`).
-   **Arithmetic:** Perform arithmetic on data in registers (e.g., `R3 ← R1 + R2`).
-   **Logic:** Perform bitwise logical operations (e.g., `R1 ← R1 AND R2`).
-   **Shift:** Shift the contents of a register (e.g., `R4 ← shr(R4)`).

The control unit issues signals that cause these micro-operations to occur in the correct sequence. For example, to execute `R3 ← R1 + R2`, the control unit would configure the ALU to perform addition and select R1 and R2 as inputs, with R3 as the destination.

## 3. Single-Cycle vs. Multi-Cycle Datapath
There are two primary approaches to designing a datapath and its control.

| Aspect | Single-Cycle Datapath | Multi-Cycle Datapath |
|--------|-----------------------|----------------------|
| **Concept** | Every instruction executes in exactly one long clock cycle. | An instruction is broken down into multiple steps, each taking one shorter clock cycle. |
| **Cycle Time** | Determined by the slowest instruction (e.g., a load from memory). | Determined by the slowest functional unit (e.g., ALU or memory access). |
| **Hardware** | Requires duplicate hardware (e.g., separate adders for PC increment and ALU operations) because everything happens at once. | Allows hardware reuse (e.g., a single ALU can be used for multiple purposes across different cycles). |
| **CPI** | Always 1. | Varies by instruction. Simple instructions take fewer cycles than complex ones. |
| **Performance** | Can be inefficient because simple, fast instructions are forced to take as long as the slowest one. | Generally more efficient as the clock cycle is shorter and instruction time varies with complexity. |

## 4. Typical RISC Datapath Components
-   **Program Counter (PC):** Holds the address of the next instruction to be fetched.
-   **Instruction Memory:** Stores the program's instructions.
-   **Register File:** A collection of registers with multiple read/write ports (e.g., 2 read ports, 1 write port).
-   **ALU:** The main computational unit.
-   **Data Memory:** Stores the program's data.
-   **Sign/Zero Extender:** Extends immediate values to the full bit-width of the datapath.

## 5. Control Signals
The control unit generates signals that direct the datapath's operation.
| Signal | Purpose | Example Action |
|--------|---------|----------------|
| **RegDst** | Selects the destination register for a write operation. | For an R-type instruction, write to `rd`; for a load, write to `rt`. |
| **RegWrite** | Enables the write operation on the register file. | Set to 1 for instructions that modify a register (R-type, load). |
| **ALUSrc** | Selects the second operand for the ALU. | Choose between a register (`rt`) or a sign-extended immediate value. |
| **MemRead** | Enables a read from data memory. | Set to 1 for a `load` instruction. |
| **MemWrite** | Enables a write to data memory. | Set to 1 for a `store` instruction. |
| **MemtoReg** | Selects the value to be written back to the register file. | Choose between the ALU result or the data from memory. |
| **PCSrc** | Selects the source for the next PC value. | Choose between `PC+4` or the branch target address. |

## 6. Example Instruction Flow (Load Word)
A `LW R_t, offset(R_s)` instruction is executed through a sequence of micro-operations:
1.  **Fetch:** `IR ← Memory[PC]`, `PC ← PC + 4`
2.  **Decode:** The control unit decodes the opcode and sets the control signals.
3.  **Execute:** The ALU calculates the effective address: `Address ← R_s + sign_extend(offset)`.
4.  **Memory:** The data at the calculated address is read from memory: `Data ← Memory[Address]`.
5.  **Write Back:** The fetched data is written into the destination register: `R_t ← Data`.

## 7. Pipelined Datapath Registers
In a pipelined datapath, registers are placed between stages to hold the intermediate results for the next stage. These are named for the stages they connect: `IF/ID`, `ID/EX`, `EX/MEM`, `MEM/WB`.

## 8. Microprogramming (Brief)
Instead of being hardwired, the control unit can be a "mini-processor" that executes a sequence of **microinstructions** from a control store (ROM). Each microinstruction specifies the control signals for one clock cycle. This is more flexible and common in CISC architectures.

## 9. Example Control Table Fragment
This table shows how the control unit would set signals for different instruction types.
| Instr | RegWrite | MemRead | MemWrite | Branch | ALUSrc | MemtoReg |
|-------|----------|---------|----------|--------|--------|----------|
| R-type | 1 | 0 | 0 | 0 | 0 | 0 |
| LW | 1 | 1 | 0 | 0 | 1 | 1 |
| SW | 0 | 0 | 1 | 0 | 1 | X |
| BEQ | 0 | 0 | 0 | 1 | 0 | X |

## 10. Exam Tips
-   Trace the path of data for a specific instruction (like `LW`, `SW`, or `ADD`) through the datapath diagram.
-   Understand which control signals are active for each instruction type.
-   In a multi-cycle datapath, identify which hardware units can be reused across different cycles.
-   For pipeline questions, know which stage produces a required value. This is key for understanding forwarding.

---
Prev ← `05_floating_point.md` | Next → `07_control_unit.md` | Index: `README.md`
