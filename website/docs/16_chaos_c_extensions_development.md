---
id: 16_chaos_c_extensions_development
title: Chaos C Extension Development
sidebar_label: Chaos C Extension Development
---

Chaos C Extensions are the Chaos modules that written in C (to harness the capabilities of C)
which sits under the `spells` directory of your project root.
They have either `.so` or `.dylib` or `.dll` file extensions. Depending on your operating system.

In simple terms, a Chaos C Extension is a dynamic C library that includes
[**Chaos.h**](https://github.com/chaos-lang/chaos/blob/master/Chaos.h) header and exports some of its
functions to be used as functions in Chaos Language. This is an example Chaos C Extension:

**example.c:**

```C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#include "Chaos.h"

#if defined(_WIN32) || defined(_WIN64) || defined(__CYGWIN__)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

char *hello_params_name[] = {};
unsigned hello_params_type[] = {};
unsigned short hello_params_length = 0;
int EXPORT Kaos_hello()
{
    printf("Hello from example extension!\n");
    return 0;
}

char *add_params_name[] = {
    "x",
    "y"
};
unsigned add_params_type[] = {
    K_NUMBER,
    K_NUMBER
};
unsigned short add_params_length = (unsigned short) sizeof(add_params_type) / sizeof(unsigned);
int EXPORT Kaos_add()
{
    long long x = kaos.getVariableInt(add_params_name[0]);
    long long y = kaos.getVariableInt(add_params_name[1]);
    long long z = x + y;
    kaos.returnVariableInt(z);
    return 0;
}


int EXPORT KaosRegister(struct Kaos _kaos)
{
    kaos = _kaos;
    kaos.defineFunction("hello", K_VOID, hello_params_name, hello_params_type, hello_params_length);
    kaos.defineFunction("add", K_NUMBER, add_params_name, add_params_type, add_params_length);

    return 0;
}
```

A Chaos C Extension minimally should have a function called `KaosRegister`
and an exported function prefixed with `Kaos_`. The Chaos Interpreter calls `KaosRegister` function to register
the exported functions into interpreter's function table and also shares some of its function pointers with the
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
kaos> import example
kaos>
kaos> function_table // to see the loaded functions (optional)
[start] =>
	{name: hello, type: 6, parameter_count: 0, decision_length: 0, context: __interactive__.kaos, module_context: spells/example.so, module: example} =>
	{name: add, type: 1, parameter_count: 2, decision_length: 0, context: __interactive__.kaos, module_context: spells/example.so, module: example} =>
[end]
kaos>
kaos> example.hello()
Hello from example extension!
kaos> print example.add(3, 5)
8
```

The details of [**Chaos.h**](https://github.com/chaos-lang/chaos/blob/master/Chaos.h) can be found in [**the API Reference**](api.md).
