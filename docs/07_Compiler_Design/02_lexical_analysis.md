# 02. Lexical Analysis

Lexical analysis is the **first phase** of a compiler. It is also known as **scanning**.

- **Input:** A stream of characters (the source code).
- **Output:** A stream of **tokens**.

## 1. Role of the Lexical Analyzer
The main job of the lexical analyzer is to read the source code and convert it into a sequence of tokens. It acts as an interface between the source program and the parser.

- It strips out comments and whitespace.
- It correlates error messages with the source program (e.g., by tracking line numbers).

## 2. Key Terminology
- **Token:** A token is a pair consisting of a token name and an optional attribute value. It represents a logical unit in the source code. Examples: `(identifier, "x")`, `(operator, "+")`, `(number, 10)`.
- **Lexeme:** A sequence of characters in the source program that is matched to the pattern for a token. Example: `x`, `+`, `10`.
- **Pattern:** A description of the form that the lexemes of a token may take. This is typically defined by a **regular expression**.

**Example:**
Source code: `int result = 100;`

| Lexeme | Token |
|---|---|
| `int` | `(keyword, "int")` |
| `result` | `(identifier, "result")` |
| `=` | `(operator, "=")` |
| `100` | `(number, 100)` |
| `;` | `(symbol, ";")` |

## 3. Implementation
Lexical analyzers are implemented using the concepts of **regular expressions** and **finite automata** from the Theory of Computation.

1.  **Define Patterns:** Each token type is defined by a regular expression.
    - `identifier → letter (letter | digit)*`
    - `number → digit+`
    - `whitespace → ( ' ' | '\t' | '\n' )+`
2.  **Combine REs:** All regular expressions are combined into one large RE using the union operator (`|`).
3.  **Build an NFA:** An NFA is constructed from the combined regular expression (e.g., using McNaughton-Yamada-Thompson algorithm).
4.  **Convert to a DFA:** The NFA is converted into an equivalent DFA using subset construction. This DFA is the core of the lexical analyzer.
5.  **Implement the DFA:** The resulting DFA is implemented as a program that reads characters and transitions between states. When it reaches an accepting state, it has found a lexeme and can emit the corresponding token.

## 4. The Longest Match Rule
In many cases, more than one prefix of the remaining input could match a pattern. The lexical analyzer follows the **longest match rule**: it always chooses the longest possible string of characters that could constitute a lexeme.

**Example:**
Input: `int a = 10;`
- When the scanner is at `i`, `i` matches the pattern for an identifier.
- `in` also matches the pattern for an identifier.
- `int` matches the pattern for an identifier AND the pattern for a keyword.
The scanner will continue until it reads `int`, which is the longest match. Since the pattern for the `int` keyword takes precedence over the identifier pattern, it emits the `(keyword, "int")` token.

## 5. Lexical Analyzer Generators
Writing a lexical analyzer by hand is tedious. Tools like **Lex** or **Flex** automate this process.
- **Input:** A file containing a set of regular expressions and corresponding C code actions.
- **Output:** A C source file that implements a lexical analyzer based on the provided rules.

---
Prev ← `01_introduction_to_compilers.md` | Next → `03_parsing_and_syntax_analysis.md` | Index: `README.md`
