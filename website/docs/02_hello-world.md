---
id: 02_hello-world
title: Hello World
sidebar_label: Hello World
---

### Interactive Shell

```chaos
$ chaos
    Chaos Language 0.0.1-alpha (Dec 23 2019 04:18:23)
    GCC version: 7.4.0 on linux
    Turn chaos into magic!

kaos> print "hello world"
hello world
```

### Program File as Command-line Argument

**hello.kaos**:
```chaos
print "hello world"
```

and run `hello.kaos` with:

```chaos
$ chaos hello.kaos
hello world
```
