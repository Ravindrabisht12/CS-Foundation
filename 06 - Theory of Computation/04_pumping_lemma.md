# 04. The Pumping Lemma

The Pumping Lemma is a powerful tool used to prove that a language is **NOT** regular or **NOT** context-free. It establishes a property that all languages in a certain class must have. If you can show that a language does *not* have this property, then it cannot belong to that class.

**Important:** The Pumping Lemma can **never** be used to prove that a language *is* regular or context-free.

## 1. Pumping Lemma for Regular Languages
- **The Idea:** If a language is regular, it must be accepted by a DFA with a finite number of states, say `p`. If we process a string `w` that is longer than `p`, the DFA must revisit at least one state. This means there is a **cycle** in the path. We can "pump" this cycle (traverse it zero or more times) to generate an infinite number of new strings that must also be in the language.

- **Formal Statement:**
  For any regular language `L`, there exists an integer `p` (the pumping length) such that for any string `w` in `L` with `|w| ≥ p`, `w` can be divided into three parts, `w = xyz`, satisfying:
  1.  `|y| > 0` (the loop is not empty).
  2.  `|xy| ≤ p` (the loop occurs within the first `p` characters).
  3.  For all `i ≥ 0`, the string `xyⁱz` is also in `L`.
      - `i=0`: `xz` is in `L` (skipping the loop).
      - `i=1`: `xyz` is in `L` (the original string).
      - `i=2`: `xyyz` is in `L` (going through the loop twice).

### Proof by Contradiction (Adversary Game)
To prove a language `L` is not regular:
1.  **Opponent:** Chooses a pumping length `p`.
2.  **You:** Choose a clever string `w` in `L` such that `|w| ≥ p`. Your choice of `w` is crucial.
3.  **Opponent:** Divides `w` into `xyz` according to the rules (`|y| > 0`, `|xy| ≤ p`).
4.  **You:** Show that there exists at least one `i ≥ 0` for which `xyⁱz` is **NOT** in `L`.

**Example:** Prove `L = {0ⁿ1ⁿ | n ≥ 0}` is not regular.
1.  Opponent gives `p`.
2.  You choose `w = 0ᵖ1ᵖ`. `|w| = 2p ≥ p`.
3.  Opponent must divide `w = xyz`. Because `|xy| ≤ p`, the `xy` part can only consist of `0`s. So, `x = 0ᵃ`, `y = 0ᵇ`, `z = 0ᶜ1ᵖ`, where `a+b+c = p` and `b > 0`.
4.  You choose `i = 2`. The new string is `xy²z = 0ᵃ0ᵇ0ᵇ0ᶜ1ᵖ = 0ᵃ⁺²ᵇ⁺ᶜ1ᵖ = 0ᵖ⁺ᵇ1ᵖ`.
5.  Since `b > 0`, the number of `0`s is not equal to the number of `1`s. This new string is **not** in `L`. Therefore, `L` is not regular.

## 2. Pumping Lemma for Context-Free Languages
- **The Idea:** The logic is similar but more complex. For a CFL, any sufficiently long string `w` must have a parse tree where some non-terminal is repeated in a path from the root to a leaf. This repeated non-terminal allows a section of the string to be "pumped" in a symmetric way.

- **Formal Statement:**
  For any context-free language `L`, there exists a pumping length `p` such that for any string `w` in `L` with `|w| ≥ p`, `w` can be divided into five parts, `w = uvxyz`, satisfying:
  1.  `|vy| > 0` (at least one of the pumped parts is not empty).
  2.  `|vxy| ≤ p` (the pumped parts are "close" to each other).
  3.  For all `i ≥ 0`, the string `uvⁱxyⁱz` is also in `L`.

### Proof by Contradiction
The game is the same, but you have to show that for any division `uvxyz` by the opponent, you can find an `i` that makes `uvⁱxyⁱz` not in `L`.

**Example:** Prove `L = {aⁿbⁿcⁿ | n ≥ 0}` is not context-free.
1.  Opponent gives `p`.
2.  You choose `w = aᵖbᵖcᵖ`.
3.  Opponent divides `w = uvxyz` where `|vxy| ≤ p`. This means the `vxy` substring cannot contain all three symbols (`a`, `b`, and `c`). It can contain at most two.
   - **Case 1:** `vxy` contains only `a`'s, only `b`'s, or only `c`'s. Pumping (`i=2`) will unbalance the counts (e.g., `aᵖ⁺ᵏbᵖcᵖ`).
   - **Case 2:** `vxy` contains `a`'s and `b`'s, or `b`'s and `c`'s. Pumping will increase the counts of two symbols but leave the third unchanged, again unbalancing the counts (e.g., `aᵖ⁺ᵏbᵖ⁺ʲcᵖ`).
4.  In all possible cases, pumping the string results in a string not in `L`. Therefore, `L` is not context-free.

---
Prev ← `03_context_free_languages_and_pushdown_automata.md` | Next → `05_turing_machines.md` | Index: `README.md`
