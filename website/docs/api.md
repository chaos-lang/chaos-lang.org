---
id: api
title: API Reference
sidebar_label: API Reference
---

Welcome to the API Reference of Chaos language!

In this page we will describe the accessible macros and functions via
[**Chaos.h**](https://github.com/chaos-lang/chaos/blob/master/Chaos.h) header that can be useful while
[**developing C extensions**](16_chaos_c_extensions_development.md) for the language.

## Macros

`__KAOS_LANGUAGE_NAME__ "Chaos"` : Language's name

`__KAOS_VERSION_MAJOR__ 0` : Language's major version

`__KAOS_VERSION_MINOR__ 1` : Language's minor version

`__KAOS_VERSION_PATCHLEVEL__ 2` : Language's patch version

`__KAOS_LANGUAGE_FILE_EXTENSION__ "kaos"` : Default program file extension

`__KAOS_LANGUAGE_MOTTO__ "Turn chaos into magic!"` : Language's motto

`__KAOS_LANGUAGE_KEYWORD_COUNT__ 31` : Number of reserved keywords

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

`enum Phase { INIT_PREPARSE, PREPARSE, INIT_PROGRAM, PROGRAM, INIT_JSON_PARSE, JSON_PARSE };`

`Phase` enumerator symbolizes the states of the runtime. A global variable named `phase` holds the state of the runtime.
The Chaos language parses a program file, builds an [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
and traverses that AST in the phases.

The first phase is named `PREPARSE` and it registers the functions and does some look ahead checks.
The second phase is named `PROGRAM` and it simply executes the program.

To switch a phase, you do set `phase` global variable neither to `PREPARSE` nor to `PROGRAM` but rather set to `INIT_PREPARSE`
or `INIT_PROGRAM` to initiate the switch. It might seem weird but that's how the phase transition
is implemented in our [lexer](https://en.wikipedia.org/wiki/Lexical_analysis).

`INIT_JSON_PARSE` and `JSON_PARSE` are only there to harness the JSON parsing capabilities of the Chaos language and provide [**jsonParse()**](api.md#void-jsonParse) function.

### Type

`enum Type { K_BOOL, K_NUMBER, K_STRING, K_ANY, K_LIST, K_DICT, K_VOID };`

`Type` enumerator is quite simple. It symbolizes the types of variables that the Chaos language can understand.

`K_BOOL` means [**Boolean**](04_primitive-data-types.md#boolean),

`K_NUMBER` means [**Number**](04_primitive-data-types.md#number),

`K_STRING` means [**String**](04_primitive-data-types.md#string),

`K_ANY` means [**Any**](04_primitive-data-types.md#any),

`K_LIST` means [**List**](05_lists),

`K_DICT` means [**Dictionary**](06_dictionaries),

and `K_VOID` means [**Void**](10_functions) data type.

*`K_` prefix can remind you **K**aos.*

### ValueType

`enum ValueType { V_BOOL, V_INT, V_FLOAT, V_STRING, V_VOID };`

`ValueType` enumerator is also quite simple. It symbolizes the types of variables in terms of C language that the Chaos language can store.

`V_BOOL` means `bool`

`V_INT` means `long long`

`V_FLOAT` means `long double`

`V_STRING` means `char*`

and `V_VOID` has a special meaning. It means a [**List**](05_lists) or a [**Dictionary**](06_dictionaries) can store any of the other four data types.

*`V_` prefix can remind you **V**alue.*

### KaosValue

```c
typedef struct KaosValue {
    bool b;
    long long i;
    char *s;
    long double f;
} KaosValue;
```

`KaosValue` is the representation of how the Chaos variables hold their value. It's tightly related to `ValueType`. You use the `KaosValue` to store the value if the value
needs to be hard-coded into the extension and assign to correct C data type according to `ValueType` of variable and its equivalent shown above.

### Role

`enum Role { DEFAULT, PARAM, CALL_PARAM };`

`Role` enumerator symbolizes the role of a variable that used by the runtime.

`DEFAULT` means it's an ordinary variable

`PARAM` means it's a function parameter

and `CALL_PARAM` means it's a function call parameter.


## Functions

### int defineFunction()

```c
int defineFunction(
    char *name,
    enum Type type,
    enum Type secondary_type,
    char *params_name[],
    unsigned params_type[],
    unsigned params_secondary_type[],
    unsigned short params_length,
    KaosValue optional_params[],
    unsigned short optional_params_length
);
```

This is the function to register a function from your Chaos C extension to the runtime and it's meant to put inside the `KaosRegister` function.
It takes 8 parameters. Here is a complete example for the usages of `defineFunction`:

```c
char *add_params_name[] = {
    "x",
    "y"
};
unsigned add_params_type[] = {
    K_NUMBER,
    K_NUMBER
};
unsigned add_params_secondary_type[] = {
    K_ANY,
    K_ANY
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
    kaos.defineFunction("add", K_NUMBER, K_ANY, add_params_name, add_params_type, add_params_secondary_type, add_params_length, NULL, 0);

    return 0;
}
```

**char \*name** : The function's name. If your function is `int EXPORT Kaos_add()` then the name is `add`.

**enum Type type** : The function's return data type. If your function will not return anything it's `K_VOID`, otherwise it's one of these `{ K_BOOL, K_NUMBER, K_STRING, K_ANY, K_LIST, K_DICT }`

**enum Type secondary_type** : This parameter is only meaningful if `enum Type type` is `K_LIST` or `K_DICT`. It indicates the type of typed list or typed dictionary. So for example, if you want to return `num list` then set the parameters as `... K_LIST, K_NUM ...` Otherwise set it to `K_ANY`

**char \*params_name[]** : The parameter names list. If your param list is `char *add_params_name[] = { "x", "y" };` variables named `x` and `y` will be available to use inside your function.

**unsigned params_type[]** : The variable types of the parameters. If your param type list is `unsigned add_params_type[] = { K_NUMBER, K_NUMBER };` there will be two variables with data type [**Number**](04_primitive-data-types.md#number) available to use inside your function.

**unsigned params_secondary_type[]** : The variable types of the elements of list or dictionary parameters. If your params are, for example; `num list` and `bool dict` then secondary type list is `unsigned blabla_params_secondary_type[] = { K_NUMBER, K_BOOL };`. If the parameter is not a typed list or dictionary or a primitive data type then it's a good practice to use `K_ANY` type.

**unsigned short params_length** : The length of the parameter list. So the length of `char *params_name[]` and `unsigned params_type[]` must be equal and you have to supply the length value with `unsigned short params_length`. So it's `2` in this example.

**KaosValue optional_params[]** : Optional parameters list which is an array `KaosValue` that holds the default values of optional parameters. Assign `NULL` if the function does not have any optional parameters.

**unsigned short optional_params_length** : Number of optional parameters. Indicates that how many of the last N parameters are optional function parameters. Assign `0` if the function does not have any optional parameters.

#### Optional Function Parameter Example:

You can turn the implementation of `num add(num x, num y)` function to `num add(num x, num y = 5)` like this:

```c
int EXPORT KaosRegister(struct Kaos _kaos)
{
    kaos = _kaos;

    struct KaosValue add_optional_y;
    add_optional_y.i = 5;
    add_optional_y.f = 5.0;
    struct KaosValue add_optional_params[] = {
        add_optional_y
    };

    kaos.defineFunction("add", K_NUMBER, K_ANY, add_params_name, add_params_type, add_params_length, add_optional_params, 1);

    return 0;
}
```

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

### bool getVariableBoolByTypeCasting()

`bool getVariableBoolByTypeCasting(char *name);`

Get a variable by casting its value type `V_BOOL` no matter what value type it has. Example:

```c
bool x = kaos.getVariableBoolByTypeCasting(my_params_name[0]);
```

### long long getVariableIntByTypeCasting()

`long long getVariableIntByTypeCasting(char *name);`

Get a variable by casting its value type `V_INT` no matter what value type it has. Example:

```c
long long x = kaos.getVariableIntByTypeCasting(my_params_name[0]);
```

### long double getVariableFloatByTypeCasting()

`long double getVariableFloatByTypeCasting(char *name);`

Get a variable by casting its value type `V_FLOAT` no matter what value type it has. Example:

```c
long double x = kaos.getVariableFloatByTypeCasting(my_params_name[0]);
```

### char* getVariableStringByTypeCasting()

`char* getVariableStringByTypeCasting(char *name);`

Get a variable by casting its value type `V_STRING` no matter what value type it has. Example:

```c
char* x = kaos.getVariableStringByTypeCasting(my_params_name[0]);
```

### unsigned long getListLength()

`unsigned long getListLength(char *name);`

Get the length of the list. Example:

```c
unsigned long length = kaos.getListLength(my_params_name[0]);
```

### bool getListElementBool()

`bool getListElementBool(char *name, long long i);`

Get a list element with `V_BOOL` value type. Example:

**long long i** : is the index of the element.

```c
bool x = kaos.getListElementBool(my_params_name[0], 0);
```

### long long getListElementInt()

`long long getListElementInt(char *name, long long i);`

Get a list element with `V_INT` value type. Example:

**long long i** : is the index of the element.

```c
long long x = kaos.getListElementInt(my_params_name[0], 0);
```

### long double getListElementFloat()

`long double getListElementFloat(char *name, long long i);`

Get a list element with `V_FLOAT` value type. Example:

**long long i** : is the index of the element.

```c
long double x = kaos.getListElementFloat(my_params_name[0], 0);
```

### char* getListElementString()

`char* getListElementBool(char *name, long long i);`

Get a list element with `V_STRING` value type. Example:

**long long i** : is the index of the element.

```c
char* x = kaos.getListElementString(my_params_name[0], 0);
```

### bool getListElementBoolByTypeCasting()

`bool getListElementBoolByTypeCasting(char *name, long long i);`

Get a list element by casting its value type `V_BOOL` no matter what value type it has. Example:

```c
bool x = kaos.getListElementBoolByTypeCasting(my_params_name[0], 0);
```

### long long getListElementIntByTypeCasting()

`long long getListElementIntByTypeCasting(char *name, long long i);`

Get a list element by casting its value type `V_INT` no matter what value type it has. Example:

```c
long long x = kaos.getListElementIntByTypeCasting(my_params_name[0], 0);
```

### long double getListElementFloatByTypeCasting()

`long double getListElementFloatByTypeCasting(char *name, long long i);`

Get a list element by casting its value type `V_FLOAT` no matter what value type it has. Example:

```c
long double x = kaos.getListElementFloatByTypeCasting(my_params_name[0], 0);
```

### char* getListElementStringByTypeCasting()

`char* getListElementStringByTypeCasting(char *name, long long i);`

Get a list element by casting its value type `V_STRING` no matter what value type it has. Example:

```c
char* x = kaos.getListElementStringByTypeCasting(my_params_name[0], 0);
```

### void copyListElement()

`void copyListElement(char *name, long long i);`

Copy the list element seamlessly while building a new list with [**startBuildingList()**](api.md#void-startbuildinglist). Example:

```c
kaos.copyListElement(my_params_name[0], 0);
```

### enum Type getListElementType()

`enum Type getListElementType(char *name, long long i);`

Learn the type of specific list element. Example:

```c
enum Type type = kaos.getListElementType(my_params_name[0], 0);
```

### enum ValueType getListElementValueType()

`enum ValueType getListElementValueType(char *name, long long i);`

Learn the value type of specific list element. Example:

```c
enum ValueType value_type = kaos.getListElementValueType(my_params_name[0], 0);
```

### unsigned long getDictLength()

`unsigned long getDictLength(char *name);`

Get the length of the dictionary. Example:

```c
unsigned long length = kaos.getDictLength(my_params_name[0]);
```

### char* getDictKeyByIndex()

`char* getDictKeyByIndex(char *name, long long i);`

Get the key of a dictionary on index `i`.

**long long i** : is the index of the element.

```c
char* x = kaos.getDictKeyByIndex(my_params_name[0], 0);
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

### bool getDictElementBoolByTypeCasting()

`bool getDictElementBoolByTypeCasting(char *name, char *key);`

Get a dictionary element by casting its value type `V_BOOL` no matter what value type it has. Example:

```c
bool x = kaos.getDictElementBoolByTypeCasting(my_params_name[0], "a");
```

### long long getDictElementIntByTypeCasting()

`long long getDictElementIntByTypeCasting(char *name, char *key);`

Get a dictionary element by casting its value type `V_INT` no matter what value type it has. Example:

```c
long long x = kaos.getDictElementIntByTypeCasting(my_params_name[0], "a");
```

### long double getDictElementFloatByTypeCasting()

`long double getDictElementFloatByTypeCasting(char *name, char *key);`

Get a dictionary element by casting its value type `V_FLOAT` no matter what value type it has. Example:

```c
long double x = kaos.getDictElementFloatByTypeCasting(my_params_name[0], "a");
```

### char* getDictElementStringByTypeCasting()

`char* getDictElementStringByTypeCasting(char *name, char *key);`

Get a dictionary element by casting its value type `V_STRING` no matter what value type it has. Example:

```c
char* x = kaos.getDictElementStringByTypeCasting(my_params_name[0], "a");
```

### void copyDictElement()

`void copyDictElement(char *name, char *key);`

Copy the dictionary element seamlessly while building a new dictionary with [**startBuildingDict()**](api.md#void-startbuildingdict). Example:

```c
kaos.copyDictElement(my_params_name[0], "a");
```

### enum Type getDictElementType()

`enum Type getDictElementType(char *name, char *key);`

Learn the type of specific dictionary element. Example:

```c
enum Type type = kaos.getDictElementType(my_params_name[0], "a");
```

### enum ValueType getDictElementValueType()

`enum ValueType getDictElementValueType(char *name, char *key);`

Learn the value type of specific dictionary element. Example:

```c
enum ValueType value_type = kaos.getDictElementValueType(my_params_name[0], "a");
```

### char* dumpVariableToString()

`char* dumpVariableToString(char *name, bool pretty, bool escaped, bool double_quotes);`

Dumps a variable into a string as if you're printing that variable. Example:

```c
char* dump = kaos.dumpVariableToString(my_params_name[0], false, true, true);
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

Create a variable with `K_BOOL` type and `V_BOOL` value type. Example:

*It's meant to be used after [**startBuildingList()**](api.md#void-startbuildinglist) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableBool("b", true);
```

### void createVariableInt()

`void createVariableInt(char *name, long long i);`

Create a variable with `K_NUMBER` type and `V_INT` value type. Example:

*It's meant to be used after [**startBuildingList()**](api.md#void-startbuildinglist) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableInt("i", 1);
```

### void createVariableFloat()

`void createVariableFloat(char *name, long double f);`

Create a variable with `K_NUMBER` type and `V_FLOAT` value type. Example:

*It's meant to be used after [**startBuildingList()**](api.md#void-startbuildinglist) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableFloat("f", 3.14);
```

### void createVariableString()

`void createVariableString(char *name, char *s);`

Create a variable with `K_STRING` type and `V_STRING` value type. Example:

*It's meant to be used after [**startBuildingList()**](api.md#void-startbuildinglist) or [**startBuildingDict()**](api.md#void-startbuildingdict)*

**char \*name** : is the key if it's a dictionary element.

```c
kaos.createVariableString("s", "bar");
```

### void startBuildingList()

`void startBuildingList();`

Start building a list for the return. Example:

```c
kaos.startBuildingList();
kaos.createVariableInt(NULL, 1);
kaos.createVariableInt(NULL, 2);
kaos.createVariableInt(NULL, 3);
kaos.returnList(K_NUMBER);
```

### void returnList()

`void returnList(enum Type type);`

Return the list. If `enum Type type` is one of these `{ K_BOOL, K_NUMBER, K_STRING }` then that means it will be a typed list. Example:

```c
kaos.startBuildingList();
kaos.createVariableInt(NULL, 1);
kaos.createVariableInt(NULL, 2);
kaos.createVariableInt(NULL, 3);
kaos.returnList(K_NUMBER);
```

### void startBuildingDict()

`void startBuildingDict();`

Start building a dictionary for the return. Example:

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

Return the dictionary. If `enum Type type` is one of these `{ K_BOOL, K_NUMBER, K_STRING }` then that means it will be a typed dictionary. Example:

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

This function can be used instead of [**returnList()**](api.md#void-returnlist) or [**returnDict()**](api.md#void-returndict).

### void finishList()

`void finishList(enum Type type);`

Finish building a list that you started with [**startBuildingList()**](api.md#void-startbuildinglist). You can think this function as [**returnList()**](api.md#void-returnlist) minus `return`

### void finishDict()

`void finishDict(enum Type type);`

Finish building a dictionary that you started with [**startBuildingDict()**](api.md#void-startbuildingdict). You can think this function as [**returnDict()**](api.md#void-returndict) minus `return`

### void finishComplex()

`void finishComplex(enum Type type);`

This function can be used instead of [**finishList()**](api.md#void-finishlist) or [**finishDict()**](api.md#void-finishdict).

### enum Type getListType()

`enum Type getListType(char *name);`

Learn the type of a typed list. Example:

```c
enum Type type = kaos.getListType(my_params_name[0]);
```

### enum Type getDictType()

`enum Type getDictType(char *name);`

Learn the type of a typed dictionary. Example:

```c
enum Type type = kaos.getDictType(my_params_name[0]);
```

### enum ValueType getValueType()

`enum ValueType getValueType(char *name);`

Learn the value type of a specific variable. Example:

```c
enum ValueType value_type = kaos.getValueType(my_params_name[0]);
```

### enum Role getRole()

`enum Role getRole(char *name);`

Learn the role of a specific variable. Example:

```c
enum Role role = kaos.getRole(my_params_name[0]);
```

### void raiseError()

`void raiseError(char *msg);`

Throw an error. Example:

```c
kaos.raiseError("Something bad happened!")
```

### void parseJson()

`void parseJson(char *json);`

Parse a JSON string and return it as a dictionary.
