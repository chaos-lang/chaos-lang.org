---
id: 16_chaos_c_extensions_development
title: Chaos C Extension Development
sidebar_label: Chaos C Extension Development
---

Chaos C Extensions are the Chaos modules that written in C (to harness the capabilities of C)
which sits under the `spells` directory of your project root.
They have either `.so` or `.dylib` or `.dll` file extensions. Depending on your operating system.

In simple terms, a Chaos C Extension is a dynamic C library that exports some of its functions to be used
as functions in Chaos Language. This is an example Chaos C Extension:

**example.c:**

```C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "chaos.h"

#if defined(_WIN32) || defined(_WIN64) || defined(__CYGWIN__)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

int EXPORT Kaos_hello()
{
    printf("Hello from example extension!\n");
    return 0;
}

int EXPORT KaosRegister(struct Kaos kaos)
{
    char *name = malloc(6);
    strcpy(name, "hello");
    kaos.startFunctionParameters();
    kaos.startFunction(name, K_VOID);
    kaos.endFunction();
    return 0;
}
```

A Chaos C Extension minimally should have a function called `KaosRegister`
and an exported function prefixed with `Kaos_`. The Chaos Interpreter calls `KaosRegister` function to register
the exported function into interpreter's function table and also shares some of its function pointers with the
extension with the purpose of being called by the extension on the registration or on some point where a function
returns a variable.

Here are the example commands to generate dynamic libraries from the above code:

### Linux

#### gcc

```
gcc -shared -fPIC example.c -o spells/example.so
```

#### clang

```
clang -shared -fPIC example.c -o spells/example.so
```

### macOS

#### gcc

```
gcc -shared -fPIC -undefined dynamic_lookup example.c -o spells/example.dylib
```

#### clang

```
clang -shared -fPIC -undefined dynamic_lookup example.c -o spells/example.dylib
```

### Windows

For Windows, currently only `gcc` is the supported compiler:

```
gcc -shared -fPIC example.c -o example.o
gcc -c example.c
gcc -shared -o spells/example.dll example.o -Wl,--out-implib,libexample.a
```

Finally, you use this `example` Chaos C extension just like any other Chaos module:

```
import example

function_table // to see the loaded functions (optional)

example.hello()
```
