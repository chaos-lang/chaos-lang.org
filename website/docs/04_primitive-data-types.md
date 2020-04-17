---
id: 04_primitive-data-types
title: Primitive Data Types
sidebar_label: Primitive Data Types
---

### Boolean

There are two keywords for **Boolean** data type: `bool` or `boolean`

```text
kaos> bool a = true
kaos> boolean b = false
kaos> a = false
kaos> b = true
kaos> print a
false
kaos> print b
true
```

### Number

There are two keywords for **Number** data type: `num` or `number`

```text
kaos> num a = 5
kaos> a = 7
kaos> print a
7
kaos> num b = 3.2
kaos> b = 5.4
kaos> print b
5.4
```

### String

There are two keywords for **String** data type: `str` or `string`

```text
kaos> str a = "string1"
kaos> a = 'string2'
kaos> print a
string2
kaos> string b = 'string3'
kaos> b = "string4"
kaos> print b
string4
```

### Any

There is a single keyword for **Any** data type: `any`

```text
kaos> any a = true
kaos> a = 7
kaos> a = 'hello world'
kaos> print a
hello world
kaos> any b = 5
kaos> num c = 3
kaos> b = c
kaos> print b
3
kaos> num d = 27
kaos> any e = d
kaos> print e
27
```
