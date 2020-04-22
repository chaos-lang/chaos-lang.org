---
id: 10_functions
title: Functions
sidebar_label: Functions
---

There are three keywords for declaring functions: `func`, `function` and `def`:

```text
kaos> void func hello_world()
....      print "hello world"
....  end
kaos> hello_world()
hello world
```

#### Declaration Order

There is no need for forward declaration because the Chaos interpreter looks ahead:

```text
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

```text
first print this
inside function a
5
inside function b
8
```

#### Type Safety

All of the functions in Chaos Language are forced to have one of these keywords to
determine the return type: `bool`, `boolean`, `num`, `number`, `str`, `string`, `list`, `array`, `json`, `dict`.

If you try to return an incorrect data type from a function an error will be thrown:

```text
kaos> str def errorTest()
....      num a = 32
....      return a
....  end
kaos> errorTest()
  Chaos Error:
    Module: /home/mertyildiran/Documents/chaos/__interactive__.kaos
    Line: 4
    Illegal variable type: Number for function: errorTest
    Absorbed by Interactive Shell
kaos>
```

#### Immutability

The parameters supplied to a function in Chaos will be deep cloned.  Changing a
parameter's value inside a function never updates the original variable:

```text
kaos> str hello = 'hello world'
kaos>
kaos> nil def f1(str param1)
....      param1 = 'hello my friend'
....      print param1
....  end
kaos>
kaos> f1(hello)
hello my friend
kaos> print hello
hello world
```

### Example Functions

#### Print a Dictionary with a Title

```text
kaos> dict d = {'a': 'foo', 'b': 'bar', 'c': 'baz'}
kaos>
kaos> dict func f2(str param1, json param2)
....      print param1
....      return param2
....  end
kaos>
kaos> print f2('Dictionary:', d)
Dictionary:
{'a': 'foo', 'b': 'bar', 'c': 'baz'}
```

#### Add Two Numbers Together

```text
kaos> num def add(num x, num y)
....      num result = x + y
....      return result
....  end
kaos>
kaos> print add(3, 5)
8
```
