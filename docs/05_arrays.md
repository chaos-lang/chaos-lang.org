---
id: 05_arrays
title: Arrays
sidebar_label: Arrays
---

There are two keywords for **Array** data type: `list` or `array`

```
### array a = [1, 2, 3]
### print a
[1, 2, 3]
### list b = [true, false]
### print b
[true, false]
### list c = [3.2, 345.1665]
### print c
[3.2, 345.167]
### list d = ['a', 'b', 'c']
### print d
['a', 'b', 'c']
### array e = ["A", "B", "C"]
### print e
['A', 'B', 'C']
### list f = ['A', "asdasdad12312", 1232, 435.16, true, false]
### print f
['A', 'asdasdad12312', 1232, 435.16, true, false]
```

Multi-line array definition:

```
### array a = [
    'foo',
    'bar',
    'baz'
]
```

Accessing array elements:

```
### list d = ['a', 'b', 'c']
### print d[2]
c
### print d[1]
b
### print d[0]
a
### print d[-1]
c
### print d[-2]
b
### print d[-3]
a
```

Updating array elements:

```
### list a = [1, 2, 3]
### a[0] = 5
### print a
[5, 2, 3]
```

Deleting array elements:

```
### list g = [1, 2, 3, 4, 5]
### print g
[1, 2, 3, 4, 5]
### del g[1]
### print g
[1, 3, 4, 5]
```

### Typed Arrays

It's possible to create typed arrays in Chaos language
by prefixing `list` or `array` keywords with a [Primitive Data Type](04_primitive-data-types.md):

```
### bool list arr1 = [true, false, true]
### print arr1
[true, false, true]
### number list arr2 = [1, 2, 63.3, 12321.1515]
### print arr2
[1, 2, 63.3, 12321.2]
### string array arr3 = ['A', "asdasdaqs", 'asdasd123123', "."]
### print arr3
['A', 'asdasdaqs', 'asdasd123123', '.']
```
