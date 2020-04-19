---
id: 07_immutability
title: Immutability
sidebar_label: Immutability
---

Every variable in Chaos language is **immutable by default**.
When you assign a variable to another variable, the language's itself
creates a **deep copy** of that variable. That means; the new(*left-hand*) variable will
live in a completely different memory region than the old(*right-hand*) variable.

Here are some examples of immutability on Chaos language:

```text
kaos> bool a = true
kaos> bool b = false
kaos> b = a
kaos> print b
true
kaos> a = false
kaos> print b
true
```

```text
kaos> num a = 3.5
kaos> num b = 7.1
kaos> b = a
kaos> print b
3.5
kaos> a = 1.2
kaos> print b
3.5
```

Immutability is also valid on new variable creation:

```text
kaos> bool a = true
kaos> bool b = a
kaos> print b
true
kaos> a = false
kaos> print b
true
```

```text
kaos> str a = 'foo'
kaos> str b = a
kaos> print b
foo
kaos> a = 'bar'
kaos> print b
foo
```

Arrays and the elements of arrays are also immutable:

```text
kaos> num x = 5
kaos> array y = [x, 2, 3]
kaos> print y
[5, 2, 3]
kaos> x = 32
kaos> print x
32
kaos> print y
[5, 2, 3]
```

```text
kaos> list x = [1, 2, 3]
kaos> list y = x
kaos> print x
[1, 2, 3]
kaos> print y
[1, 2, 3]
kaos> x[0] = 5
kaos> print x
[5, 2, 3]
kaos> print y
[1, 2, 3]
```

```text
kaos> num x = 5
kaos> list y = [1, 2, 3]
kaos> y[0] = x
kaos> print x
5
kaos> print y
[5, 2, 3]
kaos> x = 7
kaos> print x
7
kaos> print y
[5, 2, 3]
```

Dictionaries and the values of dictionaries are also immutable:

```text
kaos> num k = 5
kaos> dict q = {'a': k, 'b': 2, 'c': 3}
kaos> print q
{'a': 5, 'b': 2, 'c': 3}
kaos> k = 32
kaos> print k
32
kaos> print q
{'a': 5, 'b': 2, 'c': 3}
```

```text
kaos> dict k = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> dict q = k
kaos> print k
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> print q
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> k['a'] = 'alt'
kaos> print k
{'a': 'alt', 'b': 'bar', 'c': 'baz'}
kaos> print q
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
```

```text
kaos> num k = 5
kaos> dict q = {'a': 1, 'b': 2, 'c': 3}
kaos> q['a'] = k
kaos> print k
5
kaos> print q
{'b': 2, 'c': 3, 'a': 5}
kaos> k = 7
kaos> print k
7
kaos> print q
{'b': 2, 'c': 3, 'a': 5}
```
