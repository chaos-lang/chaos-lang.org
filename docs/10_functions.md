---
id: 10_functions
title: Functions
sidebar_label: Functions
---

### Comments

There are three keywords for declaring functions: `func`, `function` and `def`

```
### void func f1()
... 	print "hello world"
... end
### f1()
hello world
```

#### Declaration Order

There is no need for forward declaring functions because Chaos interpreter looks ahead:

```
void func a()
    print "inside function a"
    num val1 = 5
    print val1
end

print "first print this"

a()
b()

null function b()
    print "inside function b"
    num val2 = 8
    print val2
end
```

Gives you this output:

```
first print this
inside function a
5
inside function b
8
```

#### Type Safety

All of the functions in Chaos Language is forced to have one of these keywords to
determine the return type: `bool`, `boolean`, `num`, `number`, `str`, `string`, `list`, `array`, `json`, `dict`

If you try to return an incorrect data type from a function an error will be thrown:

```
### str def errorTest()
... 	num a = 32
... 	return a
... end
### errorTest()
Chaos Error - Illegal variable type for function: 'errorTest'
```

#### Immutability

The parameters supplied to a function in Chaos Language, will be deep cloned hence
changina a parameter's value inside a function never updates the original variable:

```
### str hello = 'hello world'
###
### nil def f1(str param1)
... 	param1 = 'hello my friend'
... 	print param1
... end
###
### f1(hello)
hello my friend
### print hello
hello world
```

### Example Functions

#### Print a Dictionary with a Title

```
### dict d = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
###
### dict func f2(str param1, json param2)
... 	print param1
... 	return param2
... end
###
### print f2('Dictionary:', d)
Dictionary:
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
```

#### Add Two Numbers Together

```
### num def add(num x, num y)
... 	num result = x + y
... 	return result
... end
###
### print add(3, 5)
8
```
