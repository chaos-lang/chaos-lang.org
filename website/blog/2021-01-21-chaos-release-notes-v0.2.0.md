---
title: Chaos Release Notes v0.2.0
author: M. Mert Yildiran
authorURL: https://mertyildiran.com/
---

Yesterday we have published Chaos version [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0) and
today I would like to summarize the overall fixes and changes in the Chaos Language.

## Bug Fixes

### A bug in the operator precendence

There was an operator precedence issue in the mathematical expressions when they include a variable name.

For example `2 * n - 2` was being evalated to `2`:

```chaos
kaos> num n = 3
kaos> num a = 2 * n - 2
kaos> print a
2
```

It was an issue in the grammar and it's fixed with [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0)
Now it produces the correct result:

```chaos
kaos> num n = 3
kaos> num a = 2 * n - 2
kaos> print a
4
```

### Errors will be written to `stderr` instead of `stdout`

Before [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), all the errors (including the syntax errors)
were being written to `stdout` instead `stderr`. Now error and program outputs are separated such that; while this is the whole output:

```shell
$ chaos tests/shell/absorber.kaos
hey
  Chaos Error (most recent call last):
    File: "tests/shell/absorber.kaos", line 3, in <module>
      a = 5
  Undefined variable: a
```

Now it's possible to separate `stdout` and `stderr` for the same Chaos program:

```shell
$ chaos tests/shell/absorber.kaos 2>&1 > stdout.dump
  Chaos Error (most recent call last):
    File: "tests/shell/absorber.kaos", line 3, in <module>
      a = 5
  Undefined variable: a
$ cat stdout.dump
hey
```

### The incorrect `Program file does not exists on the given path` error message

When a non-existing program file supplied alongside some other command-line options in the compiler mode like
`chaos -c not/existing/path.kaos -o path -e "-ggdb"` the displayed error message was `Program file does not exists on the given path: -ggdb`.
Now this issue is fixed.

### Other Fixes

- Fixed a segmentation fault on function returns. ([**ab819ff**](https://github.com/chaos-lang/chaos/commit/ab819ffbf5381f4502ba31058a611b80593e4a81))

- Fixed the memory leaks on function returns. ([**9a27e8e**](https://github.com/chaos-lang/chaos/commit/9a27e8ecd3781a0aa74a5f09e5007d11d3ff77d7))

## Changes In The Grammar

### Parameter evaluation inside decision block in the grammar is now forbidden

Before [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), function call parameter evaluations
inside decision block was possible like:

```chaos
num def add(num x, num y)
    num z = x + y
end {
    z == 8  : f1(x * 100),
    z > 10  : f2(),
    default : f3()
}
```

Now this is forbidden by the grammar definition and it throws a syntax error:

```text
  Syntax error:
    File: "dev.kaos", line 4, cause: *
      z == 8  : f1(x * 100),
```

### Support of calling functions from imported libraries in the decision blocks like: `lib.f1()`

Before [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), the grammar was not allowing to
call function from imported modules. Now it's possible:

```chaos
import lib

num def add(num x, num y)
    num z = x + y
end {
    z == 8  : lib.f1(x),
    z > 10  : lib.f2(),
    default : lib.f3()
}
```

## Tail Call Optimization

As it's planned with [**this RFC**](https://github.com/chaos-lang/chaos/issues/95), we have implemented the
**tail call optimization** and the results are quite promising in terms of the performance:

### Non-tail call recursion:

```chaos
void def f1(num x)
    x++
    print x
    f1(x)
end

f1(1)
```

```shell
$ timeout 10 chaos dev.kaos
...
12981
12982
12983
$ chaos -c dev.kaos
$ timeout 10 build/main
...
13647
13648
13649
```

### Tail call recursion:

```chaos
void def f1(num x)
    x++
    print x
end {
    default : f1(x)
}

f1(1)
```

```shell
$ timeout 10 chaos dev.kaos
...
1514549
1514550
1514551
$ chaos -c dev.kaos
$ timeout 10 build/main
...
1755181
1755182
1755183
```

### Conclusion

Tail calls in Chaos are approximately $120 \times $ faster than the generic recursion. Therefore the tail calls are optimized in Chaos.

## Function Call Stack Trace

As it's planned with [**this RFC**](https://github.com/chaos-lang/chaos/issues/94), we have implemented the
**traceback**. So for a faulty Chaos program like this:

```chaos
num def f8()
    num z = 999
    return z
end

num def f7()
    num z = 42
    list a = [1, 2, 3]
    print a[4]
    return z
end

num def f6(num b)
    num y = b - 1
end {
    y > 1  : return y,
    y == 1 : f7()
}

num def f5(num a)
    num y = a - 1
end {
    y > 3  : f8(),
    y == 3 : f6(y),
    y == 2 : f6(y)
}

print f5(3)
```

Before [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), the error output was:

```shell
$ chaos dev.kaos
  Chaos Error:
    Module: dev.kaos
    Line: 9
    Index out of range: 4 for list: a
```

After [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), the error output is:

```shell
$ chaos dev.kaos
  Chaos Error (most recent call last):
    File: "dev.kaos", line 28, in <module>
      print f5(3)
    File: "dev.kaos", line 25, in f5
      y == 2 : f6(y)
    File: "dev.kaos", line 17, in f6
      y == 1 : f7()
    File: "dev.kaos", line 9, in f7
      print a[4]
  Index out of range: 4 for list: a
```

## Preemptive Error Checks

As it's planned with [**this RFC**](https://github.com/chaos-lang/chaos/issues/81), we have implemented the
**preemptive error checks** and it's [**explained in detail here**](https://chaos-lang.org/docs/20_preemptive_checks).

## Added Command-Line Options

With [**v0.2.0**](https://github.com/chaos-lang/chaos/releases/tag/v0.2.0), we have two new command-line options:

- `-l, --license` that prints the license of Chaos language.
- `-u, --unsafe` disables the [**preemptive checks**](https://chaos-lang.org/docs/20_preemptive_checks).

## Changes in the Interactive Shell (REPL)

Greeting text that is printed when you enter into REPL with `chaos` is changed to:

```
        Chaos Language 0.2.0 (Jan 21 2021 03:37:25), GCC version: 9.3.0 on linux
                                 Turn chaos into magic!

    Copyright (C) 2019-2021 Chaos Language Development Authority <info@chaos-lang.org>
    This program comes with ABSOLUTELY NO WARRANTY. This is free software,
    and you are welcome to redistribute it under certain conditions.
    License: GNU General Public License v3.0 (run `chaos -l` to print the license)
```

and the REPL exit message is changed to `Bye bye!`:

```chaos
kaos> exit
    Bye bye!
```

## What's next?

We're planning to reach `v0.3.0` after implementing these three RFCs and fixing any issues that we encounter
along the way:

- [**Code Coverage**](https://github.com/chaos-lang/chaos/issues/98)
- [**Multiline Preemptive Error Report**](https://github.com/chaos-lang/chaos/issues/99)
- [**Error Handling**](https://github.com/chaos-lang/chaos/issues/82)

It's also possible for us to publish a few patch releases `v0.2.x` if any bugs are reported and fixed in the mean time.
