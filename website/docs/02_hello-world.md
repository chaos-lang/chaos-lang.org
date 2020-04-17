---
id: 02_hello-world
title: Hello World
sidebar_label: Hello World
---

### Interactive Shell

```text
$ chaos
    Chaos Language 0.0.1-alpha (Dec 23 2019 04:18:23)
    GCC version: 7.4.0 on linux
    Turn chaos into magic!

kaos> print "hello world"
hello world
kaos>
```

### Program File as Command-line Argument

**hello.kaos**:
```text
print "hello world"
```

and run `hello.kaos` with:

```text
$ chaos dev.kaos
hello world
```
