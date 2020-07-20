---
id: array
title: array
sidebar_label: array
---

Array library of the Chaos language. You can install this spell with:

```bash
occultist install array
```

and import it with:

```chaos
import array
```

## Array Operations

### list array.merge(list l1, list l2)

Merges list `l1` and list `l2` into a new list, in that order.

```chaos
kaos> list a = [1, 2, 3]
kaos> list b = [4, 5, 6]
kaos> array.merge(a, b)
[1, 2, 3, 4, 5, 6]
```

### list array.insert(list l, any x, num i)

Inserts a new item `x` into list `l` before index `i`.

```chaos
kaos> list a = [1, 2, 3]
kaos> array.reverse(a)
[3, 2, 1]
```

### list array.reverse(list l)

Reverse the order of items in the list `l`.

```chaos
kaos> import array
kaos> list a = [1, 2, 3]
kaos> array.reverse(a)
[3, 2, 1]
```

### list array.chunk(list l, num x)

Chunk a list into `x` length sublists.

```chaos
kaos> import array
kaos> list c = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
kaos> array.chunk(c, 3)
[['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']]
```

## Searching & Replacing

### num list array.search(list haystack, any needle)

Searches the list `haystack` for a given value `needle` and returns the corresponding indexes if successful. Returns an empty list `[]` if unsuccessful.

```chaos
kaos> list d = [1, 2, 3, 4, 5, 3, 6, 7, 3]
kaos> array.search(d, 3)
[2, 5, 8]
kaos> list e = ['foo', 'bar', 'foo', 'baz', 'bar', 'foo']
kaos> array.search(e, 'foo')
[0, 2, 5]
```

### list array.replace(list haystack, any needle, any replacement)

Replaces all occurrences of the `needle` with the `replacement` in list `haystack`.

```chaos
kaos> list d = [1, 2, 3, 4, 5, 3, 6, 7, 3]
kaos> list e = ['foo', 'bar', 'foo', 'baz', 'bar', 'foo']
kaos> array.replace(d, 3, 17)
[1, 2, 17, 4, 5, 17, 6, 7, 17]
kaos> array.replace(e, 'foo', 'goo')
['goo', 'bar', 'goo', 'baz', 'bar', 'goo']
```

## Information Functions

### num array.length(list l)

Returns the length of list `l`.

```chaos
kaos> list a = [1, 2, 3]
kaos> array.length(a)
3
```
