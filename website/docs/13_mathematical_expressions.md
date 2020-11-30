---
id: 13_mathematical_expressions
title: Mathematical Expressions
sidebar_label: Mathematical Expressions
---

Here are some examples to demonstrate the how mathematical expressions works in Chaos language:

```chaos
kaos> 3 + 5
8
kaos> 145 + 24.8
169.8
kaos> 0.32 + 0.42
0.74
kaos> (3 + 5) * 2
16
kaos> 6 * 4 / 12 + 72 / 8 - 9
2
kaos> 3 + 6 * (11 + 1 - 4) / 8 * 2
15
```

or using the [**math**](spells/math.md) spell:

```chaos
kaos> import math
kaos> num a = math.pow(5, 2)
kaos> num b = math.pow(2, 2)
kaos> 3 * a / 15 - (5 - b)
4
```
