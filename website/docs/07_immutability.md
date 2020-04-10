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

```
kaos> bool a1 = true
kaos> bool b1 = false
kaos> b1 = a1
kaos> print b1
true
kaos> a1 = false
kaos> print b1
true

kaos> num a2 = 3.5
kaos> num b2 = 7.1
kaos> b2 = a2
kaos> print b2
3.5
kaos> a2 = 1.2
kaos> print b2
3.5
```

Immutability is also valid on new variable creation:

```
kaos> bool a3 = true
kaos> bool b3 = a3
kaos> print b3
true
kaos> a3 = false
kaos> print b3
true

kaos> str a4 = 'asdasda'
kaos> str b4 = a4
kaos> print b4
asdasda
kaos> a4 = 'qwqweqwe'
kaos> print b4
asdasda
```

Arrays and the elements of arrays are also immutable:

```
kaos> num x = 5
kaos> array y = [x, 2, 3]
kaos> print y
[5, 2, 3]
kaos> x = 32
kaos> print x
32
kaos> print y
[5, 2, 3]

kaos> list z = [1, 2, 3]
kaos> list t = z
kaos> print z
[1, 2, 3]
kaos> print t
[1, 2, 3]
kaos> z[0] = 5
kaos> print z
[5, 2, 3]
kaos> print t
[1, 2, 3]

kaos> list y2 = [1, 2, 3]
kaos> num x2 = 5
kaos> y2[0] = x2
kaos> print x2
5
kaos> print y2
[5, 2, 3]
kaos> x2 = 7
kaos> print x2
7
kaos> print y2
[5, 2, 3]
```

Dictionaries and the values of dictionaries are also immutable:

```
kaos> num k = 5
kaos> dict q = {'a': k, 'b': 2, 'c': 3}
kaos> print q
{'a': 5, 'b': 2, 'c': 3}
kaos> k = 32
kaos> print k
32
kaos> print q
{'a': 5, 'b': 2, 'c': 3}

kaos> dict n = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> dict m = n
kaos> print n
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> print m
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos> n['a'] = 'alt'
kaos> print n
{'a': 'alt', 'b': 'bar', 'c': 'baz'}
kaos> print m
{'a': 'foo', 'b': 'bar', 'c': 'baz'}

kaos> dict q2 = {'a': 1, 'b': 2, 'c': 3}
kaos> num k2 = 5
kaos> q2['a'] = k2
kaos> print k2
5
kaos> print q2
{'b': 2, 'c': 3, 'a': 5}
kaos> k2 = 7
kaos> print k2
7
kaos> print q2
{'b': 2, 'c': 3, 'a': 5}
```
