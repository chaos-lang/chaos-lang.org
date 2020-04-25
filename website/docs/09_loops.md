---
id: 09_loops
title: Loops
sidebar_label: Loops
---

All loops ends with `end` keyword in Chaos Language.

## N times do

Syntax for starting an **N times do** loop is: `<NUMBER> times do`

```chaos
kaos> str a = 'hello world'
kaos> 3 times do
....      print a
....  end
hello world
hello world
hello world
```

You can also use a [**number**](04_primitive-data-types.md#number) type variable to specify the iteration count:

```chaos
kaos> num n = 5
kaos> n times do
....      print a
....  end
hello world
hello world
hello world
hello world
hello world
```

If you need an infinite loop you can use `INFINITE` keyword:

```chaos
kaos> INFINITE times do
....      print a
....  end
hello world
hello world
hello world
    ||
    \/  Prints out until you press Ctrl+C
```

## foreach as

Syntax for starting a **foreach as** loop on [**lists**](05_lists.md) is: `foreach <LIST> as <VALUE>`

```chaos
kaos> list a = [1, 2, 3]
kaos> foreach a as el
....      print el
....      el = 5
....      print el
....  end
1
5
2
5
3
5
kaos> print a
[5, 5, 5]
```

Syntax for starting a **foreach as** loop on [**dictionaries**](06_dictionaries.md) is: `foreach <DICT> as <KEY> : <VAL>`

```chaos
kaos> dict n = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> foreach n as key : val
....      print key
....      print val
....  end
a
foo
b
bar
c
baz
```

## Nested Loops

It's also possible to create nested loops in Chaos Language:

```chaos
kaos> list a = [1, 2, 3]
kaos> num b = 32
kaos> foreach a as el
....      print el
....      2 times do
....          print b
....      end
....  end
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

a more complex example with nested data structures:

```chaos
kaos> dict a = {'C': [{'h': 'a', 'o': 's'}, {' ': 'L', 'a': 'n'}], 'g': [{'u': 'a', 'g': 'e'}]}
kaos> foreach a as key1 : val1
....      print key1
....      foreach val1 as i
....          foreach i as key2 : val2
....              print key2
....              print val2
....          end
....      end
....  end
C
h
a
o
s
 
L
a
n
g
u
a
g
e
```
