---
id: 05_lists
title: Lists
sidebar_label: Lists
---

The keyword for **List** data type: `list`

```chaos
kaos> list a = [1, 2, 3]
kaos> print a
[1, 2, 3]
kaos> list b = [true, false]
kaos> print b
[true, false]
kaos> list c = [3.2, 345.1665]
kaos> print c
[3.2, 345.166]
kaos> list d = ['a', 'b', 'c']
kaos> print d
['a', 'b', 'c']
kaos> list e = ["A", "B", "C"]
kaos> print e
['A', 'B', 'C']
kaos> list f = ['A', "some text", 1232, 435.16, true, false]
kaos> pretty print f
[
    'A',
    'some text',
    1232,
    435.16,
    true,
    false
]
```

Multiline list definition:

```chaos
kaos> list a = [
    'foo',
    'bar',
    'baz'
]
```

Accessing list elements:

```chaos
kaos> list d = ['a', 'b', 'c']
kaos> print d[2]
c
kaos> print d[1]
b
kaos> print d[0]
a
kaos> print d[-1]
c
kaos> print d[-2]
b
kaos> print d[-3]
a
```

Updating list elements:

```chaos
kaos> list a = [1, 2, 3]
kaos> a[0] = 5
kaos> print a
[5, 2, 3]
```

Deleting list elements:

```chaos
kaos> list g = [1, 2, 3, 4, 5]
kaos> print g
[1, 2, 3, 4, 5]
kaos> del g[1]
kaos> print g
[1, 3, 4, 5]
```

## Typed Lists

It's possible to create typed lists in Chaos language
by prefixing `list` keyword with a [**Primitive Data Type**](04_primitive-data-types.md):

```chaos
kaos> bool list a = [true, false, true]
kaos> print a
[true, false, true]
kaos> number list b = [1, 2, 63.3, 12321.1515]
kaos> print b
[1, 2, 63.3, 12321.2]
kaos> str list c = ['A', "some text", 'with numbers 123456', "."]
kaos> print c
['A', 'some text', 'with numbers 123456', '.']
```

## Multidimensional Lists

Multidimensional lists are quite simple and flexible in Chaos language. You can put any data type combination you want
with almost infinite nested level:

```chaos
kaos> list foo = [
....      [1, 2],
....      [3, 4],
....      [5, 6]
....  ]
kaos> print foo
[[1, 2], [3, 4], [5, 6]]
kaos> list bar = [
....      {'a': 1, 'b': 2},
....      {'c': 3, 'd': 4},
....      {'e': 5, 'f': 6}
....  ]
kaos> print bar
[{'a': 1, 'b': 2}, {'c': 3, 'd': 4}, {'e': 5, 'f': 6}]
kaos> list baz = [
....      {
....          'a': [1, 2],
....          'b': [3, 4]
....      },
....      {
....          'c': [5, 6],
....          'd': [7, 8]
....      },
....      {
....          'e': [9, 10],
....          'f': [11, 12]
....      }
....  ]
kaos> print baz
[{'a': [1, 2], 'b': [3, 4]}, {'c': [5, 6], 'd': [7, 8]}, {'e': [9, 10], 'f': [11, 12]}]
```

Accessing the elements of multidimensional lists:

```chaos
kaos> print foo[2][0]
5
kaos> print bar[1]['d']
4
kaos> print baz[2]['e'][0]
9
```

Updating the elements of multidimensional lists:

```chaos
kaos> foo[1][0] = 7
kaos> print foo
[[1, 2], [7, 4], [5, 6]]
kaos> bar[2]['f'] = 0
kaos> print bar
[{'a': 1, 'b': 2}, {'c': 3, 'd': 4}, {'e': 5, 'f': 0}]
kaos> baz[0]['a'][1] = 2019
kaos> print baz
[{'a': [1, 2019], 'b': [3, 4]}, {'c': [5, 6], 'd': [7, 8]}, {'e': [9, 10], 'f': [11, 12]}]
```

Deleting the elements of multidimensional lists:

```chaos
kaos> del foo[2][1]
kaos> print foo
[[1, 2], [7, 4], [5]]
kaos> del bar[1]['c']
kaos> print bar
[{'a': 1, 'b': 2}, {'d': 4}, {'e': 5, 'f': 0}]
kaos> del baz[1]['d'][0]
kaos> print baz
[{'a': [1, 2019], 'b': [3, 4]}, {'c': [5, 6], 'd': [8]}, {'e': [9, 10], 'f': [11, 12]}]
```

*Related spells: [**string**](spells/string.md)*
