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
### bool a1 = true
### bool b1 = false
### b1 = a1
### print b1
true
### a1 = false
### print b1
true

### num a2 = 3.5
### num b2 = 7.1
### b2 = a2
### print b2
3.5
### a2 = 1.2
### print b2
3.5
```

Immutability is also valid on new variable creation:

```
### bool a3 = true
### bool b3 = a3
### print b3
true
### a3 = false
### print b3
true

### str a4 = 'asdasda'
### str b4 = a4
### print b4
asdasda
### a4 = 'qwqweqwe'
### print b4
asdasda
```

Arrays and the elements of arrays are also immutable:

```
### num x = 5
### array y = [x, 2, 3]
### print y
[5, 2, 3]
### x = 32
### print x
32
### print y
[5, 2, 3]

### list z = [1, 2, 3]
### list t = z
### print z
[1, 2, 3]
### print t
[1, 2, 3]
### z[0] = 5
### print z
[5, 2, 3]
### print t
[1, 2, 3]

### list y2 = [1, 2, 3]
### num x2 = 5
### y2[0] = x2
### print x2
5
### print y2
[5, 2, 3]
### x2 = 7
### print x2
7
### print y2
[5, 2, 3]
```

Dictionaries and the values of dictionaries are also immutable:

```
### num k = 5
### dict q = {'a': k, 'b': 2, 'c': 3}
### print q
{'a': 5, 'b': 2, 'c': 3}
### k = 32
### print k
32
### print q
{'a': 5, 'b': 2, 'c': 3}

### dict n = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
### dict m = n
### print n
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
### print m
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
### n['a'] = 'alt'
### print n
{'a': 'alt', 'b': 'bar', 'c': 'baz'}
### print m
{'a': 'foo', 'b': 'bar', 'c': 'baz'}

### dict q2 = {'a': 1, 'b': 2, 'c': 3}
### num k2 = 5
### q2['a'] = k2
### print k2
5
### print q2
{'b': 2, 'c': 3, 'a': 5}
### k2 = 7
### print k2
7
### print q2
{'b': 2, 'c': 3, 'a': 5}
```
