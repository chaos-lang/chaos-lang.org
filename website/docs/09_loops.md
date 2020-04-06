---
id: 09_loops
title: Loops
sidebar_label: Loops
---

All loops ends with `end` keyword in Chaos Language.

### N times do

Syntax for starting an **N times do** loop is: `<NUMBER> times do`

```
### str a = 'hello world'
### 3 times do
... 	print a
... end
hello world
hello world
hello world
```

### foreach as

Syntax for starting a **foreach as** loop on **arrays** is: `foreach <ARRAY> as <VALUE>`

```
### list a = [1, 2, 3]
### foreach a as el
... 	print el
... 	el = 5
... 	print el
... end
1
5
2
5
3
5
### print a
[5, 5, 5]
```

Syntax for starting a **foreach as** loop on **dictionaries** is: `foreach <DICT> as <KEY> : <VAL>`

```
### dict n = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
### foreach n as key : val
... 	print key
... 	print val
... end
a
foo
b
bar
c
baz
```

### Nested Loops

It's also possible to create nested loops in Chaos Language:

```
### list a = [1, 2, 3]
### num b = 32
### foreach a as el
... 	print el
... 	2 times do
...         print b
... 	end
... end
1
32
32
2
32
32
3
32
32
```
