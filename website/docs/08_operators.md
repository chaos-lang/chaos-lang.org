---
id: 08_operators
title: Operators
sidebar_label: Operators
---

### Relational Operators

Relational operators in Chaos language are exactly the same as the relational operators in C language:

| Operator |                                   Description                                               |  Example |
|:---------|:-------------------------------------------------------------------------------------------:|---------:|
| `==`     | Checks if the values of two operands are equal or not.                                      | `a == b` |
| `!=`     | Checks if the values of two operands are equal or not.                                      | `a != b` |
| `>`      | Checks if the value of left operand is greater than the value of right operand.             | `a > b`  |
| `<`      | Checks if the value of left operand is less than the value of right operand.                | `a < b`  |
| `>=`     | Checks if the value of left operand is greater than or equal to the value of right operand. | `a >= b` |
| `<=`     | Checks if the value of left operand is less than or equal to the value of right operand.    | `a <= b` |

### Logical Operators

Logical operators in Chaos language, is a combination of the logical operators in C and Python language:

| Operator                        |                         Description                       |                                 Example |
|:--------------------------------|:---------------------------------------------------------:|----------------------------------------:|
| `&&`, `and`                     | Logical AND operator.                                     | `a && b`, `a and b`                     |
| <code>&#124;&#124;</code>, `or` | Logical OR operator.                                      | <code>a &#124;&#124; b</code>, `a or b` |
| `!`, `not`                      | Logical NOT operator.                                     | `!a`, `not a`                           |

### Bitwise Operators

Bitwise operators in Chaos language are exactly the same as the bitwise operators in C language:

| Operator            |                                                  Description                                                              |                 Example |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------:|------------------------:|
| `&`                 | Binary AND Operator copies a bit to the result if it exists in both operands.                                             | `a & b`                 |
| <code>&#124;</code> | Binary OR Operator copies a bit if it exists in either operand.                                                           | <code>a &#124; b</code> |
| `^`                 | Binary XOR Operator copies the bit if it is set in one operand but not both.                                              | `a ^ b`                 |
| `~`                 | Binary One's Complement Operator is unary and has the effect of 'flipping' bits.                                          | `~a`                    |
| `<<`                | Binary Left Shift Operator. The left operands value is moved left by the number of bits specified by the right operand.   | `a << 1`                |
| `>>`                | Binary Right Shift Operator. The left operands value is moved right by the number of bits specified by the right operand. | `a >> 1`                |

### Unary Operators

Chaos language also supports unary operators like parentheses: `()`, pre-/post-increment: `++a`, `a++` and pre-/post-decrement: `--a`, `a--` just like in C language.

#### Notes:

 - *There are intentionally no ternary or conditional operators to facilitate the **zero cyclomatic complexity** requirement.*

 - *There are no arithmetic assignment operators because we believe having those operators, resulting more error-prone code.*

 - *Modulus, exponent and floor division is provided by the standart library as functions instead of as operators for the favor of less error-prone code.*
