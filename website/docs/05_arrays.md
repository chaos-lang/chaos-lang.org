---
id: 05_arrays
title: Arrays
sidebar_label: Arrays
---

There are two keywords for **Array** data type: `list` or `array`

```
kaos> array a = [1, 2, 3]
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
kaos> array e = ["A", "B", "C"]
kaos> print e
['A', 'B', 'C']
kaos> list f = ['A', "asdasdad12312", 1232, 435.16, true, false]
kaos> print f
['A', 'asdasdad12312', 1232, 435.16, true, false]
```

Multi-line array definition:

```
kaos> array a = [
    'foo',
    'bar',
    'baz'
]
```

Accessing array elements:

```
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

Updating array elements:

```
kaos> list a = [1, 2, 3]
kaos> a[0] = 5
kaos> print a
[5, 2, 3]
```

Deleting array elements:

```
kaos> list g = [1, 2, 3, 4, 5]
kaos> print g
[1, 2, 3, 4, 5]
kaos> del g[1]
kaos> print g
[1, 3, 4, 5]
```

### Typed Arrays

It's possible to create typed arrays in Chaos language
by prefixing `list` or `array` keywords with a [**Primitive Data Type**](04_primitive-data-types.md):

```
kaos> bool list arr1 = [true, false, true]
kaos> print arr1
[true, false, true]
kaos> number list arr2 = [1, 2, 63.3, 12321.1515]
kaos> print arr2
[1, 2, 63.3, 12321.2]
kaos> string array arr3 = ['A', "asdasdaqs", 'asdasd123123', "."]
kaos> print arr3
['A', 'asdasdaqs', 'asdasd123123', '.']
```
