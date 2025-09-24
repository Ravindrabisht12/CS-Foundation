# 12. Instruction Pipelining & Hazards

## 1. What is Instruction Pipelining?
Instruction pipelining is a technique used in modern processors to increase **instruction throughput** (the number of instructions completed per unit of time). It works by overlapping the execution of multiple instructions, much like an assembly line in a factory.

Instead of waiting for one instruction to complete all its stages before starting the next, the processor is divided into a series of independent stages. Each stage handles a different part of the instruction processing.

**Analogy:** Imagine a car assembly line with stages for: 1. Building the chassis, 2. Installing the engine, 3. Painting the body, 4. Adding interior. While one car is being painted, the next car is having its engine installed, and another is having its chassis built. All stages are working in parallel on different cars.

**Goal:** The primary goal is **not** to reduce the execution time of a single instruction (this is **latency**), but to increase the total number of instructions finished in a given period.

## 2. Pipeline Stages (Classic 5-Stage RISC)
The instruction execution process is broken down into the following stages:
1.  **IF (Instruction Fetch):** Fetch the instruction from memory (cache).
2.  **ID (Instruction Decode & Register Fetch):** Decode the instruction and read the required operands from the register file.
3.  **EX (Execute):** Perform the arithmetic or logical operation in the ALU.
4.  **MEM (Memory Access):** Read from or write to data memory.
5.  **WB (Write Back):** Write the result back into the register file.

In an ideal pipeline, a new instruction starts every clock cycle, and an instruction finishes every clock cycle.

## 3. Ideal Performance
In a pipeline with `k` stages, the ideal speedup over a non-pipelined processor is `k` times. This is because `k` instructions are being worked on simultaneously.

**Formula:** Ideal Speedup = `k`
*This assumes a large number of instructions and no interruptions.*

## 4. Pipeline Hazards
Hazards are situations that prevent the next instruction in the pipeline from executing during its designated clock cycle. They disrupt the smooth flow of the pipeline and introduce stalls (bubbles), reducing performance.

| Type | Cause | Example |
|------|------|---------|
| **Structural** | Two instructions need the same hardware resource at the same time. | A single memory unit is needed for an instruction fetch (IF) and a data access (MEM) in the same cycle. |
| **Data (RAW)** | An instruction needs the result of a previous, not-yet-completed instruction. | `ADD R1, R2, R3` followed by `SUB R4, R1, R5`. The `SUB` needs the new value of `R1`. |
| **Control** | The pipeline doesn't know which instruction to fetch next due to a branch or jump. | A `BEQ` instruction changes the Program Counter (PC) only after the branch condition is evaluated in the EX stage. |

*(Write-after-read & write-after-write are other data hazards, but are less common in simple pipelines and often handled by the architecture itself).*

## 5. Data Hazard Handling
-   **Forwarding (Bypassing):** The most common solution. The result from a later stage (like EX or MEM) is fed directly back to the input of an earlier stage (like EX), bypassing the register file.
-   **Stall (Bubble):** If forwarding is not possible (e.g., a load-use hazard), the pipeline must be stalled. A "bubble" (effectively a NOP) is inserted to delay the dependent instruction.

**Load-Use Hazard Example:**
```
LW R1, 0(R2)   // Value for R1 is available after the MEM stage
ADD R3, R1, R4  // Needs R1 at the start of its EX stage
```
This requires a one-cycle stall because the data from memory isn't ready in time to be forwarded to the `ADD` instruction's EX stage.

## 6. Control Hazard (Branch Hazard) Handling
-   **Stall:** Freeze the pipeline until the branch outcome is known. This is simple but slow.
-   **Predict Not Taken:** Assume the branch will not be taken and continue fetching instructions sequentially. If the prediction is wrong, flush the incorrectly fetched instructions.
-   **Branch Delay Slot:** An instruction immediately following the branch is always executed, regardless of the branch outcome. The compiler tries to fill this slot with a useful instruction.
-   **Dynamic Prediction:** Use a small hardware table (Branch Target Buffer and prediction logic like a 2-bit saturating counter) to predict the outcome based on past behavior.

## 7. 2-bit Predictor FSM
A common dynamic prediction scheme. Each branch has a 2-bit state:
-   **Strongly Not Taken (00)** → **Weakly Not Taken (01)** → **Weakly Taken (10)** → **Strongly Taken (11)**
-   A correct prediction strengthens the state; a misprediction moves it toward the opposite outcome. This prevents changing the prediction on a single anomalous outcome.

## 8. CPI with Stalls
The presence of stalls increases the effective Cycles Per Instruction (CPI).

**Formula:** Effective CPI = Ideal CPI + (Stall Frequency × Stall Cycles)
*Ideal CPI for a simple pipeline is 1.*

**Example:** Base CPI=1. 20% of instructions are branches, and the branch misprediction rate is 10% with a 2-cycle penalty.
Stall cycles per instruction = 0.20 (branch freq) × 0.10 (mispredict rate) × 2 (penalty) = 0.04
Effective CPI = 1 + 0.04 = 1.04.

## 9. Structural Hazard Example
A classic example is a single-ported memory for both instructions and data. If the `IF` stage and `MEM` stage need to access memory in the same cycle, one must wait. This is solved in modern systems by using separate instruction and data caches (a Harvard architecture at the cache level).

## 10. Pipeline Forwarding Paths (Typical)
-   `EX/MEM.ALUResult` → EX stage operand mux
-   `MEM/WB.Value` → EX stage operand mux

## 11. Branch Penalty
The penalty is the number of instructions that were incorrectly fetched and must be flushed from the pipeline. In a 5-stage pipeline where the branch is resolved in the `EX` stage, the instructions in the `IF` and `ID` stages are flushed, resulting in a 2-cycle penalty.

## 12. Superscalar Note (Beyond Basics)
Superscalar processors have multiple pipelines and can issue more than one instruction per cycle. This increases the complexity of hazard detection and requires more advanced techniques like scoreboarding or the Tomasulo algorithm to manage dependencies.

## 13. Exam Tips
-   Draw a pipeline diagram to visualize dependencies and stalls.
-   The most common data hazard is the **load-use hazard**, which almost always requires a stall.
-   Branch penalty calculations are frequent: `Penalty = Mispredict Rate × Penalty Cycles`.
-   Remember that forwarding solves most data hazards, but not all.

---
Prev ← `11_control_unit.md` | Next → `13_memory_hierarchy.md`
