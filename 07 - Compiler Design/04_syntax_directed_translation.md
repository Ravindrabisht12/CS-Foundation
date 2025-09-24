# 04. Syntax-Directed Translation (SDT)

Syntax-Directed Translation is the process of attaching **semantic rules** or **actions** to the productions of a context-free grammar. As the parser builds the syntax tree, it executes these actions to perform tasks like type checking or generating intermediate code.

## 1. Attributes
An **attribute** is any property associated with a programming language construct, such as the data type of a variable, the value of an expression, or the location of a variable in memory.

Attributes are associated with the nodes of the parse tree.

- **Synthesized Attributes:** The value of a synthesized attribute at a node is computed from the values of attributes at its **children**. Information flows **up** the parse tree.
- **Inherited Attributes:** The value of an inherited attribute at a node is computed from the values of attributes at its **parent** and/or **siblings**. Information flows **down** and/or **sideways** across the parse tree.

## 2. Syntax-Directed Definitions (SDD)
An SDD is a context-free grammar where each grammar symbol is associated with a set of attributes, and each production rule is associated with a set of semantic rules for computing the values of those attributes.

**Example:** An SDD for evaluating simple arithmetic expressions.
Let `E`, `T`, `F` have a synthesized attribute `val`.

| Production | Semantic Rule |
|---|---|
| `E → E₁ + T` | `E.val = E₁.val + T.val` |
| `E → T` | `E.val = T.val` |
| `T → T₁ * F` | `T.val = T₁.val * F.val` |
| `T → F` | `T.val = F.val` |
| `F → (E)` | `F.val = E.val` |
| `F → digit` | `F.val = digit.lexval` |

This SDD uses only synthesized attributes. The `val` of a node is computed from the `val` of its children.

## 3. S-Attributed vs. L-Attributed Definitions

### a) S-Attributed Definitions
- An SDD is S-attributed if it uses **only synthesized attributes**.
- **Evaluation:** Attributes can be evaluated by a **bottom-up** (post-order) traversal of the parse tree.
- **Compatibility:** S-attributed definitions are a natural fit for **bottom-up parsers** (like LR parsers). The semantic rules can be executed as soon as a production is reduced.

### b) L-Attributed Definitions
- An SDD is L-attributed if for each production `A → X₁X₂...Xₙ`, each inherited attribute of `Xⱼ` depends only on:
  1. The inherited attributes of `A`.
  2. The attributes (synthesized or inherited) of the symbols to its left (`X₁...Xⱼ₋₁`).
- **In simple terms:** Information can flow from parent to child, and from left sibling to right sibling, but **not** from right to left.
- **Evaluation:** Attributes can be evaluated by a **depth-first** traversal of the parse tree.
- **Compatibility:** L-attributed definitions can be used with **top-down parsers** (like LL parsers) and also with bottom-up parsers (with some care).

*Note: Every S-attributed definition is also an L-attributed definition, but not vice versa.*

## 4. Syntax-Directed Translation Schemes (SDTS)
An SDTS is a more implementation-focused notation where semantic actions (code fragments) are embedded directly within the grammar productions.

**Example:** Converting an infix expression to postfix.
`E → E₁ + T { print('+') }`
`T → T₁ * F { print('*') }`
...

The timing of the action's execution depends on its position in the production. This is crucial for generating code in the correct order.

---
Prev ← `03_parsing_and_syntax_analysis.md` | Next → `05_intermediate_code_generation.md` | Index: `README.md`
