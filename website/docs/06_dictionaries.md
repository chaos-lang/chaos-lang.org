---
id: 06_dictionaries
title: Dictionaries
sidebar_label: Dictionaries
---

The keyword for **Dictionary** data type is: `dict`

```text
kaos> dict b = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> pretty print b
{
    'a': 'foo',
    'b': 'bar',
    'c': 'baz'
}
kaos> dict c = {"a": {}, "b": {'d': false}}
kaos> print c
{'a': {}, 'b': {'d': false}}
kaos> dict d = {"a": [1], "b": [1, 2], "c": [1, 2, 3]}
kaos> pretty print d
{
    'a': [
        1
    ],
    'b': [
        1,
        2
    ],
    'c': [
        1,
        2,
        3
    ]
}
```

Multi-line dictionary definition:

```text
kaos> dict a = {
    'a': 1,
    'b': 2,
    'c': 3
}
```

Accessing dictonary elements:

```text
kaos> dict a = {'a': 1, 'b': 2, 'c': 3}
kaos> print a['a']
1
kaos> print a["b"]
2
```

Updating dictonary values:

```text
kaos> dict a = {'a': 1, 'b': 2, 'c': 3}
kaos> a['a'] = 5
kaos> print a
{'a': 5, 'b': 2, 'c': 3}
```

Deleting dictionary keys:

```text
kaos> dict d = {"a": 1, "b": 2, "c": 3}
kaos> print d
{'a': 1, 'b': 2, 'c': 3}
kaos> del d['a']
kaos> print d
{'b': 2, 'c': 3}
```

## Typed Dictionaries

It's possible to create typed dictionaries in Chaos language
by prefixing `dict` keyword with a [**Primitive Data Type**](04_primitive-data-types.md):

```text
kaos> bool dict dict1 = {'a': true, 'b': false}
kaos> print dict1
{'a': true, 'b': false}
kaos> number dict dict2 = {'a': 1, "b": 2, 'c': 63.3, 'd': 12321.1515}
kaos> print dict2
{'a': 1, 'b': 2, 'c': 63.3, 'd': 12321.2}
kaos> str dict dict3 = {'a': 'A', 'b': "asdasdaqs", 'c': 'asdasd123123', 'd': "."}
kaos> print dict3
{'a': 'A', 'b': 'asdasdaqs', 'c': 'asdasd123123', 'd': '.'}
```

## Nested Dictionaries

Nested Dictionaries are quite simple and flexible in Chaos language. You can put any data type combination you want
with almost infinite nested level:

```text
kaos> dict foo = {
....      'a': {'a': 1, 'b': 2},
....      'b': {'c': 3, 'd': 4},
....      'c': {'e': 5, 'f': 6}
....  }
kaos> print foo
{'a': {'a': 1, 'b': 2}, 'b': {'c': 3, 'd': 4}, 'c': {'e': 5, 'f': 6}}
kaos> dict bar = {
....      'a': [1, 2],
....      'b': [3, 4],
....      'c': [5, 6]
....  }
kaos> print bar
{'a': [1, 2], 'b': [3, 4], 'c': [5, 6]}
kaos> dict baz = {
....      'a': [
....          {'a': 1, 'b': 2},
....          {'c': 3, 'd': 4}
....      ],
....      'b': [
....          {'e': 5, 'f': 6},
....          {'g': 7, 'h': 8}
....      ],
....      'c': [
....          {'x': 9, 'y': 10},
....          {'t': 11, 'v': 12}
....      ]
....  }
kaos> print baz
{'a': [{'a': 1, 'b': 2}, {'c': 3, 'd': 4}], 'b': [{'e': 5, 'f': 6}, {'g': 7, 'h': 8}], 'c': [{'x': 9, 'y': 10}, {'t': 11, 'v': 12}]}
```

Accessing the elements of nested dictionaries:

```text
kaos> print foo['c']['e']
5
kaos> print bar['b'][1]
4
kaos> print baz['c'][0]['x']
9
```

Updating the elements of nested dictionaries:

```text
kaos> foo['b']['c'] = 7
kaos> print foo
{'a': {'a': 1, 'b': 2}, 'b': {'c': 7, 'd': 4}, 'c': {'e': 5, 'f': 6}}
kaos> bar['c'][1] = 0
kaos> print bar
{'a': [1, 2], 'b': [3, 4], 'c': [5, 0]}
kaos> baz['a'][0]['b'] = 2019
kaos> print bar
{'a': [1, 2], 'b': [3, 4], 'c': [5, 0]}
```

Deleting the elements of nested dictionaries:

```text
kaos> del foo['c']['f']
kaos> print foo
{'a': {'a': 1, 'b': 2}, 'b': {'c': 7, 'd': 4}, 'c': {'e': 5}}
kaos> del bar['b'][0]
kaos> print bar
{'a': [1, 2], 'b': [4], 'c': [5, 0]}
kaos> del baz['b'][1]['g']
kaos> print baz
{'a': [{'a': 1, 'b': 2019}, {'c': 3, 'd': 4}], 'b': [{'e': 5, 'f': 6}, {'h': 8}], 'c': [{'x': 9, 'y': 10}, {'t': 11, 'v': 12}]}
```
