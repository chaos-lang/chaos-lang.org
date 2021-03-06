---
id: 02_hello-world
title: Hello, World!
sidebar_label: Hello, World!
---

## Interpreter

### Interactive Shell

```chaos
$ chaos
    Chaos Language 0.2.0 (Jan 20 2021 02:39:23)
    GCC version: 9.3.0 on linux
    Turn chaos into magic!

kaos> print "hello world"
hello world
kaos> exit
    You have chosen the order!
```

### Program File as Command-line Argument

**hello.kaos**:

```chaos
print "hello world"
```

and run `hello.kaos` with:

```shell
$ chaos hello.kaos
hello world
```

## Compiler

```shell
$ chaos -c hello.kaos -o hello
Starting compiling...
Compiling Chaos code into build/hello.c
Compiling the C code into machine code...
Cleaning up the temporary files...

Finished compiling.

Binary is ready on: build/hello
$ build/hello
hello world
```

Run `chaos --help` to see more options or check out **[this detailed blog post](/blog/2020/11/30/blog-post)**
about the Chaos compiler.
