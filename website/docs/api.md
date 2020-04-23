---
id: api
title: API Reference
sidebar_label: API Reference
---

Welcome to the API Reference of Chaos language!

In this page we will describe the accessible macros and functions via
[**Chaos.h**](https://github.com/chaos-lang/chaos/blob/master/Chaos.h) header that can be useful while [**developing
C extensions**]((16_chaos_c_extensions_development.md)) for the language.

## Macros

`__KAOS_LANGUAGE_NAME__ "Chaos"` : Interpreter's name

`__KAOS_LANGUAGE_VERSION__ "0.0.1-alpha"` : Interpreter's version

`__KAOS_LANGUAGE_FILE_EXTENSION__ "kaos"` : Default program file extension

`__KAOS_LANGUAGE_MOTTO__ "Turn chaos into magic!"` : Language's motto

`__KAOS_LANGUAGE_KEYWORD_COUNT__ 34` : Number of reserved keywords

`__KAOS_INTERACTIVE_MODULE_NAME__ "__interactive__.kaos"` : Interactive shell's module name

`__KAOS_MAX_RECURSION_DEPTH__ 1000` : Maximum recursion depth

`__KAOS_MSG_LINE_LENGTH__ 1000` : A buffer constant being used while printing error messages

`__KAOS_BYE_BYE__ "You have chosen the order! "` : Farewell message appears on exit from interactive shell

`__KAOS_SPELLS__ "spells"` : Default package directory name

`__KAOS_DYNAMIC_LIBRARY_EXTENSION__` : Dynamic library extension. On Linux: `"so"`, on macOS: `"dylib"`, on Windows: `"dll"`

`__KAOS_EXTENSION_REGISTER_FUNCTION__ "KaosRegister"` : The function name purposed to be called to register the Chaos C extensions.

`__KAOS_EXTENSION_FUNCTION_PREFIX__ "Kaos_"` : Prefix for the exported functions inside the Chaos C extensions.

`__KAOS_SHELL_INDICATOR__` : Interactive shell indicator/prompt. `"kaos> "` on Windows, `"\001\033[0;90m\002kaos>\001\033[0m\002 "` on other platforms. (colored)

`__KAOS_SHELL_INDICATOR_BLOCK__` : Interactive shell indicator/prompt in code block mode. `"....  "` on Windows, `"\001\033[0;90m\002....\001\033[0m\002  "` on other platforms. (colored)

`__KAOS_PLATFORM_NAME__` : Gives you the current platform's name. See [**platform.h**](https://github.com/chaos-lang/chaos/blob/master/utilities/platform.h) for more details.

`__KAOS_PATH_SEPARATOR__` : Path separator string. `"\\"` on Windows, `"/"` on other platforms.

`__KAOS_PATH_SEPARATOR_ASCII__` : Path separator character. `'\\'` on Windows, `'/'` on other platforms.


## Enums

### Phase

`enum Phase { INIT_PREPARSE, PREPARSE, INIT_PROGRAM, PROGRAM };`

`Phase` enumerator symbolizes the states of the interpreter. A global variable named `phase` holds the state of the interpreter.
The Chaos Interpreter parses a program file twice.

The first parsing phase is named `PREPARSE` and it parses the functions and does some look ahead checks.
The second parsing phase is named `PROGRAM` and it simply executes the program.

To switch a phase, you do set `phase` global variable neither to `PREPARSE` nor to `PROGRAM` but rather set to `INIT_PREPARSE`
or `INIT_PROGRAM` to initiate the switch. It might seem weird but that's the nature of [lexers](https://en.wikipedia.org/wiki/Lexical_analysis).

### Type

`enum Type { K_BOOL, K_NUMBER, K_STRING, K_ANY, K_ARRAY, K_DICT, K_VOID };`

`Type` enumerator is quite simple. It symbolizes the types of variables that the Chaos Interpreter can understand.

`K_BOOL` means [**Boolean**](04_primitive-data-types.md#boolean),

`K_NUMBER` means [**Number**](04_primitive-data-types.md#number),

`K_STRING` means [**String**](04_primitive-data-types.md#string),

`K_ANY` means [**Any**](04_primitive-data-types.md#any),

`K_ARRAY` means [**Array**](05_arrays),

`K_DICT` means [**Dictionary**](06_dictionaries),

and `K_VOID` means [**Void**](10_functions) data type.

*`K_` prefix can remind you **K**aos.*

### ValueType

`enum ValueType { V_BOOL, V_INT, V_FLOAT, V_STRING, V_VOID };`

`ValueType` enumerator is also quite simple. It symbolizes the types of variables in terms of C language that the Chaos Interpreter can store.

`V_BOOL` means `bool`

`V_INT` means `long long`

`V_FLOAT` means `long double`

`V_STRING` means `char*`

and `V_VOID` has a special meaning. It means an [**Array**](05_arrays) or a [**Dictionary**](06_dictionaries) can store any of the other four data types.

*`V_` prefix can remind you **V**alue.*

### Role

`enum Role { DEFAULT, PARAM, CALL_PARAM };`

`Role` enumerator symbolizes the role of a variable that used by the interpreter.

`DEFAULT` means it's an ordinary variable

`PARAM` means it's a function parameter

and `CALL_PARAM` means it's a function call parameter.


## Functions

### int defineFunction()

`int defineFunction(char *name, enum Type type, char *params_name[], unsigned params_type[], unsigned short params_length);`

This is the function to register a function from your Chaos C extension to the interpreter and it's meant to put inside the `KaosRegister` function.
It takes 5 parameters. Here is a complete example for the usages of `defineFunction`:

```c
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
    kaos.defineFunction("add", K_NUMBER, add_params_name, add_params_type, add_params_length);

    return 0;
}
```

**char \*name** : The function's name. If your function is `int EXPORT Kaos_add()` then the name is `add`.

**enum Type type** : The function's return data type. If your function will not return anything it's `K_VOID`, otherwise it's one of these `{ K_BOOL, K_NUMBER, K_STRING, K_ANY, K_ARRAY, K_DICT }`

**char \*params_name[]** : The parameter names list. If your param list is `char *add_params_name[] = { "x", "y" };` variables named `x` and `y` will be available to use inside your function.

**unsigned params_type[]** : The variable types of the parameters. If your param type list is `unsigned add_params_type[] = { K_NUMBER, K_NUMBER };` there will be two variables with data type [**Number**](04_primitive-data-types.md#number) available to use inside your function.

**unsigned short params_length** : The length of the parameter list. So the length of `char *params_name[]` and `unsigned params_type[]` must be equal and you have to supply the length value with `unsigned short params_length`. So it's `2` in this example.

### bool getVariableBool()

`bool getVariableBool(char *name);`

Get a `V_BOOL` value type variable. Example:

```c
bool x = kaos.getVariableBool(my_params_name[0]);
```

### long long getVariableInt()

`long long getVariableInt(char *name);`

Get a variable with `V_INT` value type. Example:

```c
long long x = kaos.getVariableInt(my_params_name[0]);
```

### long double getVariableFloat()

`long double getVariableFloat(char *name);`

Get a variable with `V_FLOAT` value type. Example:

```c
long double x = kaos.getVariableFloat(my_params_name[0]);
```

### char* getVariableString()

`char* getVariableString(char *name);`

Get a variable with `V_STRING` value type. Example:

```c
char* x = kaos.getVariableString(my_params_name[0]);
```

### bool getArrayElementBool()

`bool getArrayElementBool(char *name, long long i);`

Get an array element with `V_BOOL` value type. Example:

**long long i** : is the index of the element.

```c
bool x = kaos.getArrayElementBool(my_params_name[0], 0);
```

### long long getArrayElementInt()

`long long getArrayElementInt(char *name, long long i);`

Get an array element with `V_INT` value type. Example:

**long long i** : is the index of the element.

```c
long long x = kaos.getArrayElementInt(my_params_name[0], 0);
```

### long double getArrayElementFloat()

`long double getArrayElementFloat(char *name, long long i);`

Get an array element with `V_FLOAT` value type. Example:

**long long i** : is the index of the element.

```c
long double x = kaos.getArrayElementFloat(my_params_name[0], 0);
```

### char* getArrayElementString()

`char* getArrayElementBool(char *name, long long i);`

Get an array element with `V_STRING` value type. Example:

**long long i** : is the index of the element.

```c
char* x = kaos.getArrayElementString(my_params_name[0], 0);
```

### bool getDictElementBool()

`bool getDictElementBool(char *name, char *key);`

Get a dictionary element with `V_BOOL` value type. Example:

**char \*key** : is the key of the element.

```c
bool x = kaos.getDictElementBool(my_params_name[0], "a");
```

### long long getDictElementInt()

`long long getDictElementInt(char *name, char *key);`

Get a dictionary element with `V_INT` value type. Example:

**char \*key** : is the key of the element.

```c
long long x = kaos.getDictElementInt(my_params_name[0], "a");
```

### long double getDictElementFloat()

`long double getDictElementFloat(char *name, char *key);`

Get a dictionary element with `V_FLOAT` value type. Example:

**char \*key** : is the key of the element.

```c
long double x = kaos.getDictElementFloat(my_params_name[0], "a");
```

### char* getDictElementString()

`char* getDictElementString(char *name, char *key);`

Get a dictionary element with `V_STRING` value type. Example:

**char \*key** : is the key of the element.

```c
char* x = kaos.getDictElementString(my_params_name[0], "a");
```

### void returnVariableBool()

`void returnVariableBool(bool b);`

Return a variable with `K_BOOL` type and `V_BOOL` value type. Example:

```c
kaos.returnVariableBool(true);
```

### void returnVariableInt()

`void returnVariableInt(long long i);`

Return a variable with `K_NUMBER` type and `V_INT` value type. Example:

```c
kaos.returnVariableInt(365);
```

### void returnVariableFloat()

`void returnVariableFloat(long double f);`

Return a variable with `K_NUMBER` type and `V_FLOAT` value type. Example:

```c
kaos.returnVariableFloat(3.14);
```

### void returnVariableString()

`void returnVariableString(char *s);`

Return a variable with `K_STRING` type and `V_STRING` value type. Example:

```c
kaos.returnVariableString("foo");
```

### void createVariableBool()

`void createVariableBool(char *name, bool b);`

Creates a variable with `K_BOOL` type and `V_BOOL` value type. Example:

*It's meant to be used [**startBuildingArray()**](api.md#void-startbuildingarray) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableBool("b", true);
```

### void createVariableInt()

`void createVariableInt(char *name, long long i);`

Creates a variable with `K_NUMBER` type and `V_INT` value type. Example:

*It's meant to be used [**startBuildingArray()**](api.md#void-startbuildingarray) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableInt("i", 1);
```

### void createVariableFloat()

`void createVariableFloat(char *name, long double f);`

Creates a variable with `K_NUMBER` type and `V_FLOAT` value type. Example:

*It's meant to be used [**startBuildingArray()**](api.md#void-startbuildingarray) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableFloat("f", 3.14);
```

### void createVariableString()

`void createVariableString(char *name, char *s);`

Creates a variable with `K_STRING` type and `V_STRING` value type. Example:

*It's meant to be used [**startBuildingArray()**](api.md#void-startbuildingarray) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableString("s", "bar");
```

### void startBuildingArray()

`void startBuildingArray();`

Starts building an array for the return. Example:

```c
kaos.startBuildingArray();
kaos.createVariableInt(NULL, 1);
kaos.createVariableInt(NULL, 2);
kaos.createVariableInt(NULL, 3);
kaos.returnArray(K_NUMBER);
```

### void returnArray()

`void returnArray(enum Type type);`

Returns the array. If `enum Type type` is one of these `{ K_BOOL, K_NUMBER, K_STRING }` then that means it will be a typed array. Example:

```c
kaos.startBuildingArray();
kaos.createVariableInt(NULL, 1);
kaos.createVariableInt(NULL, 2);
kaos.createVariableInt(NULL, 3);
kaos.returnArray(K_NUMBER);
```

### void startBuildingDict()

`void startBuildingDict();`

Starts building a dictionary for the return. Example:

```c
kaos.startBuildingDict();
kaos.createVariableBool("b", true);
kaos.createVariableInt("i", 1);
kaos.createVariableFloat("f", 3.14);
kaos.createVariableString("s", "bar");
kaos.returnDict(K_ANY);
```

### void returnDict()

`void returnDict(enum Type type);`

Returns the dictionary. If `enum Type type` is one of these `{ K_BOOL, K_NUMBER, K_STRING }` then that means it will be a typed dictionary. Example:

```c
kaos.startBuildingDict();
kaos.createVariableBool("b", true);
kaos.createVariableInt("i", 1);
kaos.createVariableFloat("f", 3.14);
kaos.createVariableString("s", "bar");
kaos.returnDict(K_ANY);
```

### void returnComplex()

`void returnComplex(enum Type type);`

This function can be used instead of [**returnArray()**](api.md#void-returnarray) or [**returnDict()**](api.md#void-returndict).
