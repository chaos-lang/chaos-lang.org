---
id: 20_preemptive_checks
title: Preemptive Checks
sidebar_label: Preemptive Checks
---

Chaos does some preemptive checks in both interpreter and compiler mode to report possible runtime errors
in compile-time inside the all imported or defined functions.
These checks can be disabled with `--unsafe` option which also decreases the warm up time.

## Undefined variable checks

Chaos searches for undefined variables inside function bodies and throws a preemptive error if such an
issue is detected:

```chaos
kaos> void def f4()
....      print b
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 2, in f4
      print b
  Undefined variable: b
  Absorbed by Interactive Shell
```

It also searches for undefined variables inside decision blocks both in the boolean expression (left-hand side):

```chaos
kaos> num def f1()
....      num a = 101
....      return a
....  end
kaos>
kaos> num def f2()
....      num b = 102
....      return b
....  end
kaos>
kaos> num def f3()
....      num c = 103
....      return c
....  end
kaos>
kaos> num def f4(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z == 8  : f1(),
....      n1 > 10 : f2(),
....      default : f3()
....  }
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 27, in f4
      n1 > 10 : f2(),
  Undefined variable: n1
  Absorbed by Interactive Shell
```

and in the function call parameters (right-hand side):

```chaos
kaos> num def f4(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z == 8  : f1(),
....      z > 10  : f2(n2),
....      default : f3()
....  }
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 39, in f4
      z > 10  : f2(n2),
  Undefined variable: n2
  Absorbed by Interactive Shell
```

## Undefined function checks

Similar to undefined variable checks, Chaos searches for undefined functions inside function bodies and throws
a preemptive error if such an issue is detected:

```chaos
kaos> void def a()
....      num b = f5()
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 47, in a
      num b = f5()
  Undefined function: f5 in <module>
  Absorbed by Interactive Shell
```

It also searches for undefined functions inside decision blocks (right-hand side):

```chaos
kaos> num def f4(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z == 8  : f1(),
....      z > 10  : f6(),
....      default : f3()
....  }
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 58, in f4
      z > 10  : f6(),
  Undefined function: f1 in <module>
  Absorbed by Interactive Shell
```

## Incorrect argument count checks

Chaos also searches for incorrect argument counts in function calls inside both function bodies:

```chaos
kaos> num def f4()
....      num c = 103
....      num x = f1(c)
....      return c
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 66, in f1
      num x = f1(c)
  Incorrect argument count for function: f1
  Absorbed by Interactive Shell
```

and decision blocks:

```chaos
kaos> num def f4(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z == 8  : f1(z),
....      z > 10  : f2(),
....      default : f3()
....  }
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 76, in f1
      z == 8  : f1(z),
  Incorrect argument count for function: f1
  Absorbed by Interactive Shell
```

## Illegal variable type for function parameter checks

Similar to incorrect argument count checks, Chaos also searches for function calls with illegal variable
types for function parameters:

```chaos
kaos> num def f8(num a, str b)
....      print a
....      print b
....      num c = a + 5
....      return c
....  end
kaos>
kaos> void def f4()
....      num a = 3
....      num b = 5
....      f8(a, b)
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 11, in f8
      f8(a, b)
  Illegal variable type for function parameter: b of function: f8
  Absorbed by Interactive Shell
```

## Illegal return type checks

Chaos also checks whether the variable type of a variable returned by a `return` statement matches the function's
return type:

```chaos
kaos> list def f4()
....      num x = 5
....      dict a = {'a': 1, 'b': 2, 'c': 3}
....  end {
....      x == 5  : return a,
....      default : return a
....  }
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 5, in f4
      x == 5  : return a,
  Illegal variable type: Dictionary for function: f4
  Absorbed by Interactive Shell
```

## Checks for foreach-ed variables if they are actual lists or dictionaries

Chaos also checks whether the variable supplied into `foreach <LIST> as <VALUE>` is an actual list or not:

```chaos
kaos> void def f4(num a)
....      foreach a as el
....          print el
....      end
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 2, in f4
      foreach a as el
  'a' is not a list!
  Absorbed by Interactive Shell
```

and the variable supplied into `foreach <DICT> as <KEY> : <VAL>` is an actual dictionary or not:

```chaos
kaos> void def f4(num a)
....      foreach a as key : val
....          print key
....          print val
....      end
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 2, in f4
      foreach a as key : val
  'a' is not a dictionary!
  Absorbed by Interactive Shell
```

## Checks for calls to a function with `break` or `continue` from outside a loop

There are also preemptive checks that prevents you calling functions with `break` or `continue` statements from
outside a loop:

```chaos
kaos> num def f9(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z > 5   : break,
....      z == 8  : f1(),
....      z > 10  : f2(),
....      default : f3()
....  }
kaos>
kaos> num def f4(num x, num y)
....      num r = f9(x, y)
....      return r
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 290, in f9
      num r = f9(x, y)
  Call to a function with `break` from outside a loop: f9
  Absorbed by Interactive Shell
```

## Checks for calls to a function with `break` or `continue` from a multiline loop

The last preemptive check is a little bit special. To comply with the **always 100% coverage** criteria, it's
forbidden to call a fucntion with `break` or `continue` statements from a multiline loop:

```chaos
kaos> num def f9(num x, num y)
....      num z = x + y
....      bool a = true
....  end {
....      z > 5   : break,
....      z == 8  : f1(),
....      z > 10  : f2(),
....      default : f3()
....  }
kaos>
kaos> void def f12(num list a)
....      foreach a as el
....          print el
....          print f9(el, 1)
....      end
....  end
  Preemptive Error:
    File: "/home/myuser/__interactive__.kaos", line 299, in f9
      print f9(el, 1)
  Call to a function with `break` from a multiline loop: f9
  Absorbed by Interactive Shell
```

The correct way to call `f9` from inside a loop is just defining the loop as a one line:

```chaos
kaos> void def f12(num list a)
....      foreach a as el
....          print f9(el, 1)
....      end
....  end
kaos>
kaos> list a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
kaos>
kaos> f12(a)
103
103
103
103
```
