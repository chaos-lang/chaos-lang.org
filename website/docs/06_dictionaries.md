---
id: 06_dictionaries
title: Dictionaries
sidebar_label: Dictionaries
---

There are two keywords for **Dictionary** data type: `json` or `dict`

```
kaos> dict a = {'a': 1, 'b': 2}
kaos> print a
{'a': 1, 'b': 2}
kaos> dict b = {'a': 1, 'b': 2, 'c': 3}
kaos> print b
{'a': 1, 'b': 2, 'c': 3}
kaos> json c = {"a": 1, "b": 2}
kaos> print c
{'a': 1, 'b': 2}
kaos> json d = {"a": 1, "b": 2, "c": 3}
kaos> print d
{'a': 1, 'b': 2, 'c': 3}
```

Multi-line dictionary definition:

```
kaos> dict a = {
    'a': 1,
    'b': 2,
    'c': 3
}
```

Accessing dictonary elements:

```
kaos> dict a = {'a': 1, 'b': 2, 'c': 3}
kaos> print a['a']
1
kaos> print a["b"]
2
```

Updating dictonary values:

```
kaos> dict a = {'a': 1, 'b': 2, 'c': 3}
kaos> a['a'] = 5
kaos> print a
{'a': 5, 'b': 2, 'c': 3}
```

Deleting dictionary keys:

```
kaos> json d = {"a": 1, "b": 2, "c": 3}
kaos> print d
{'a': 1, 'b': 2, 'c': 3}
kaos> del d['a']
kaos> print d
{'b': 2, 'c': 3}
```

### Typed Dictionaries

It's possible to create typed dictionaries in Chaos language
by prefixing `json` or `dict` keywords with a [**Primitive Data Type**](04_primitive-data-types.md):

```
kaos> bool dict dict1 = {'a': true, 'b': false}
kaos> print dict1
{'a': true, 'b': false}
kaos> number dict dict2 = {'a': 1, "b": 2, 'c': 63.3, 'd': 12321.1515}
kaos> print dict2
{'a': 1, 'b': 2, 'c': 63.3, 'd': 12321.2}
kaos> string json dict3 = {'a': 'A', 'b': "asdasdaqs", 'c': 'asdasd123123', 'd': "."}
kaos> print dict3
{'a': 'A', 'b': 'asdasdaqs', 'c': 'asdasd123123', 'd': '.'}
```
