---
id: 06_dictionaries
title: Dictionaries
sidebar_label: Dictionaries
---

There are two keywords for **Dictionary** data type: `json` or `dict`

```
### dict a = {'a': 1, 'b': 2}
### print a
{'a': 1, 'b': 2}
### dict b = {'a': 1, 'b': 2, 'c': 3}
### print b
{'a': 1, 'b': 2, 'c': 3}
### json c = {"a": 1, "b": 2}
### print c
{'a': 1, 'b': 2}
### json d = {"a": 1, "b": 2, "c": 3}
### print d
{'a': 1, 'b': 2, 'c': 3}
```

Multi-line dictionary definition:

```
### dict a = {
    'a': 1,
    'b': 2,
    'c': 3
}
```

Accessing dictonary elements:

```
### dict a = {'a': 1, 'b': 2, 'c': 3}
### print a['a']
1
### print a["b"]
2
```

Updating dictonary values:

```
### dict a = {'a': 1, 'b': 2, 'c': 3}
### a['a'] = 5
### print a
{'a': 5, 'b': 2, 'c': 3}
```

Deleting dictionary keys:

```
### json d = {"a": 1, "b": 2, "c": 3}
### print d
{'a': 1, 'b': 2, 'c': 3}
### del d['a']
### print d
{'b': 2, 'c': 3}
```

### Typed Dictionaries

It's possible to create typed dictionaries in Chaos language
by prefixing `json` or `dict` keywords with a [Primitive Data Type](04_primitive-data-types.md):

```
### bool dict dict1 = {'a': true, 'b': false}
### print dict1
{'a': true, 'b': false}
### number dict dict2 = {'a': 1, "b": 2, 'c': 63.3, 'd': 12321.1515}
### print dict2
{'a': 1, 'b': 2, 'c': 63.3, 'd': 12321.2}
### string json dict3 = {'a': 'A', 'b': "asdasdaqs", 'c': 'asdasd123123', 'd': "."}
### print dict3
{'a': 'A', 'b': 'asdasdaqs', 'c': 'asdasd123123', 'd': '.'}
```
