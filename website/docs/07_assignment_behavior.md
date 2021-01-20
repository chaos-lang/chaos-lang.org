---
id: 07_assignment_behavior
title: Assignment Behavior
sidebar_label: Assignment Behavior
---

Assignment behavior in Chaos language resembles the common sense.
When you assign a variable to another variable, the language's itself
creates a **deep copy** of that variable. That means; the new(*left-hand*) variable will
live in a completely different memory region than the old(*right-hand*) variable which we
call that **isolation**. Besides that, function call parameters are always **immutable**.

Here are some examples to demonstrate the **isolation** in Chaos language:

```chaos
kaos> bool a = true
kaos> bool b = false
kaos> b = a
kaos> print b
true
kaos> a = false
kaos> print b
true
```

```chaos
kaos> num a = 3.5
kaos> num b = 7.1
kaos> b = a
kaos> print b
3.5
kaos> a = 1.2
kaos> print b
3.5
```

**Isolation** is also valid on new variable creation:

```chaos
kaos> bool a = true
kaos> bool b = a
kaos> print b
true
kaos> a = false
kaos> print b
true
```

```chaos
kaos> str a = 'foo'
kaos> str b = a
kaos> print b
foo
kaos> a = 'bar'
kaos> print b
foo
```

Lists and the elements of lists are also **isolated**:

```chaos
kaos> num x = 5
kaos> list y = [x, 2, 3]
kaos> print y
[5, 2, 3]
kaos> x = 32
kaos> print x
32
kaos> print y
[5, 2, 3]
```

```chaos
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

```chaos
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

Dictionaries and the values of dictionaries are also **isolated**:

```chaos
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

```chaos
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

```chaos
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

Here is an example to demonstrate how function call parameters are **immutable**:

```chaos
kaos> num def alter_variable(num x)
....      x = 5
....      return x
....  end
kaos> num a = 3
kaos> a
3
kaos> alter_variable(a)
5
kaos> a
3
```
